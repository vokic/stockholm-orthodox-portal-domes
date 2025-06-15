
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Plus, Calendar, Clock, MapPin, Type } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ServiceEntryForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: 'service' as 'service' | 'event' | 'slava'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here we would integrate with Contentful API to create a new entry
      // For now, we'll just show a success message
      console.log('Service entry data:', formData);
      
      toast({
        title: "Service Entry Created",
        description: "The service information has been submitted successfully.",
      });

      // Reset form
      setFormData({
        title: '',
        description: '',
        date: '',
        time: '',
        location: '',
        type: 'service'
      });
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create service entry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      type: 'service'
    });
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif">Service Management</h2>
        <Sheet open={isOpen} onOpenChange={(open) => {
          setIsOpen(open);
          if (!open) resetForm();
        }}>
          <SheetTrigger asChild>
            <Button className="bg-orthodox-gold hover:bg-orthodox-gold/90 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Service Entry
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[400px] sm:w-[540px]">
            <SheetHeader>
              <SheetTitle className="text-xl font-serif text-orthodox-blue">
                Create New Service Entry
              </SheetTitle>
              <SheetDescription>
                Add service information that will be stored in the calendar system.
              </SheetDescription>
            </SheetHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="flex items-center gap-2">
                  <Type className="h-4 w-4 text-orthodox-gold" />
                  Service Title
                </Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="Enter service title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Rich Text)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Enter detailed service description..."
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-orthodox-gold" />
                    Date
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleInputChange('date', e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-orthodox-gold" />
                    Time
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleInputChange('time', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orthodox-gold" />
                  Location
                </Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  placeholder="Enter service location"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Service Type</Label>
                <Select
                  value={formData.type}
                  onValueChange={(value) => handleInputChange('type', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select service type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="service">Special Service</SelectItem>
                    <SelectItem value="event">Community Event</SelectItem>
                    <SelectItem value="slava">Serbian Slava</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-orthodox-blue hover:bg-orthodox-blue/90 text-white"
                >
                  {isSubmitting ? 'Creating...' : 'Create Entry'}
                </Button>
              </div>
            </form>
          </SheetContent>
        </Sheet>
      </div>

      <Card className="p-4 bg-orthodox-cream border-orthodox-gold">
        <p className="text-sm text-gray-600 text-center">
          Use the "Add Service Entry" button to create new service entries that will be stored in the calendar system.
          These entries will appear in the calendar alongside regular services.
        </p>
      </Card>
    </div>
  );
};

export default ServiceEntryForm;
