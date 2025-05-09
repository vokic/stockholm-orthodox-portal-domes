
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ChevronLeft } from 'lucide-react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Event } from '../../types';

const eventSchema = z.object({
  name: z.string().min(3, { message: "Event name must be at least 3 characters" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  date: z.string().min(1, { message: "Date is required" }),
  time: z.string().min(1, { message: "Time is required" }),
  location: z.string().min(3, { message: "Location must be at least 3 characters" }),
  imageUrl: z.string().url({ message: "Please enter a valid URL" }).optional().or(z.literal('')),
});

interface EventEditorProps {
  userRole: string;
}

export const EventEditor: React.FC<EventEditorProps> = ({ userRole }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [events, setEvents] = useLocalStorage<Event[]>('cms-events', []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditMode = Boolean(id);

  const form = useForm<z.infer<typeof eventSchema>>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      name: "",
      description: "",
      date: "",
      time: "",
      location: "",
      imageUrl: "",
    },
  });

  // Load event data if in edit mode
  useEffect(() => {
    if (isEditMode && id) {
      const event = events.find(event => event.id === id);
      if (event) {
        form.reset({
          name: event.name,
          description: event.description,
          date: event.date,
          time: event.time,
          location: event.location,
          imageUrl: event.imageUrl || "",
        });
      } else {
        toast.error("Event not found");
        navigate("/admin");
      }
    }
  }, [id, events, form, navigate, isEditMode]);

  const onSubmit = (values: z.infer<typeof eventSchema>) => {
    setIsSubmitting(true);
    
    // Small delay to simulate network request
    setTimeout(() => {
      try {
        if (isEditMode && id) {
          // Update existing event
          const updatedEvents = events.map(event => 
            event.id === id ? { ...event, ...values } : event
          );
          setEvents(updatedEvents);
          toast.success("Event updated successfully");
        } else {
          // Create new event
          const newEvent: Event = {
            id: Date.now().toString(),
            ...values,
          };
          setEvents([...events, newEvent]);
          toast.success("Event created successfully");
        }
        
        navigate("/admin");
      } catch (error) {
        toast.error("An error occurred. Please try again.");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/admin" className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-6">
            {isEditMode ? "Edit Event" : "Create New Event"}
          </h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Event name..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input type="time" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Event location..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Event description..." 
                        className="min-h-[150px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image URL (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end space-x-4">
                <Button type="button" variant="outline" onClick={() => navigate("/admin")}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : isEditMode ? "Update Event" : "Create Event"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
