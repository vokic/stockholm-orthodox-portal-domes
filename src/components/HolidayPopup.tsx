
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
import { Calendar as CalendarIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HolidayPopupProps {
  holidayService: {
    title: string;
    date: string;
    time: string;
    description: string;
  };
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HolidayPopup: React.FC<HolidayPopupProps> = ({ holidayService, open, onOpenChange }) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] border-orthodox-gold max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-orthodox-blue flex items-center gap-2">
            <CalendarIcon className="h-6 w-6 text-orthodox-gold" />
            {holidayService.title}
          </DialogTitle>
          <DialogDescription className="text-lg">
            {t('popup.upcomingService')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div className="bg-orthodox-cream p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <CalendarIcon className="h-5 w-5 text-orthodox-gold" />
              <span className="font-medium">{holidayService.date}</span>
              <span className="mx-2">•</span>
              <span>{holidayService.time}</span>
            </div>
            <p className="text-gray-700 break-words">{holidayService.description}</p>
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
