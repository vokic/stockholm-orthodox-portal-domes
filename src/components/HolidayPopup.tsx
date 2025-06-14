
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Event } from '../services/eventService';

interface HolidayPopupProps {
  event: Event;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HolidayPopup: React.FC<HolidayPopupProps> = ({ event, open, onOpenChange }) => {
  const { t, language } = useLanguage();

  // Format date based on current language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const isSerbian = language === 'sr_cyr' || language === 'sr_lat';
    const locale = isSerbian ? 'sr-RS' : 'en-US';

    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeLabel = (type: string) => {
    switch (type) {
      case 'service':
        return t('service') || 'Service';
      case 'event':
        return t('event') || 'Event';
      case 'slava':
        return 'Slava';
      default:
        return t('event') || 'Event';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'service':
        return 'bg-blue-100 text-blue-800';
      case 'event':
        return 'bg-green-100 text-green-800';
      case 'slava':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] border-orthodox-gold max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          {/* Up top, show description NOT centered */}
          <DialogDescription className="text-lg mb-1">
            {t('popup.upcomingService')}
          </DialogDescription>
          {/* Event title below description, with icon, NOT centered */}
          <DialogTitle className="text-2xl font-serif text-orthodox-blue flex items-center gap-2 mb-2">
            <CalendarIcon className="h-6 w-6 text-orthodox-gold" />
            {event.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="bg-orthodox-cream p-4 rounded-lg">
            <div className="flex flex-col gap-2">
              {/* Date/time row */}
              <div className="flex items-center flex-wrap w-full mb-2">
                <CalendarIcon className="h-5 w-5 text-orthodox-gold" />
                <span className="font-medium mx-2">{formatDate(event.date)}</span>
                {event.time && (
                  <>
                    <Clock className="h-4 w-4 text-orthodox-gold ml-2" />
                    <span className="ml-1">{event.time}</span>
                  </>
                )}
              </div>

              {/* Event description, not centered */}
              {event.description && (
                <p className="text-gray-700 break-words mb-1">{event.description}</p>
              )}

              {/* Location and Tag Pill placed in a ROW and centered */}
              <div className="flex items-center justify-center gap-3 mt-2 w-full">
                {event.location && (
                  <div className="flex items-center gap-1 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-orthodox-gold" />
                    <span className="truncate">{event.location}</span>
                  </div>
                )}
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                  {getEventTypeLabel(event.type)}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex flex-col sm:flex-row sm:justify-between gap-4 sm:gap-0">
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
          >
            {t('popup.close')}
          </Button>
          <Button 
            onClick={() => {
              window.location.href = '/calendar';
              onOpenChange(false);
            }}
            className="bg-orthodox-gold hover:bg-orthodox-gold/90 text-white"
          >
            {t('popup.viewAllServices')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HolidayPopup;

