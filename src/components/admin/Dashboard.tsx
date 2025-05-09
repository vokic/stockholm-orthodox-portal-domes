
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Menu, Plus, LogOut, Edit, Trash2 } from 'lucide-react';
import { toast } from "sonner";
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { Post, Event } from '../../types';

interface DashboardProps {
  userRole: string;
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ userRole, onLogout }) => {
  const [posts, setPosts] = useLocalStorage<Post[]>('cms-posts', []);
  const [events, setEvents] = useLocalStorage<Event[]>('cms-events', []);
  const [activeTab, setActiveTab] = useState('posts');

  const handleDeletePost = (id: string) => {
    if (userRole !== 'admin') {
      toast.error("Only admins can delete posts");
      return;
    }
    
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    toast.success("Post deleted successfully");
  };

  const handleDeleteEvent = (id: string) => {
    if (userRole !== 'admin') {
      toast.error("Only admins can delete events");
      return;
    }
    
    const updatedEvents = events.filter(event => event.id !== id);
    setEvents(updatedEvents);
    toast.success("Event deleted successfully");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white shadow">
        <h1 className="font-semibold text-lg">CMS Dashboard</h1>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon"><Menu className="h-5 w-5" /></Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col h-full">
              <div className="flex-1 py-4 space-y-4">
                <div className="px-3 py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('posts')}>
                      Blog Posts
                    </Button>
                    <Button variant="ghost" className="w-full justify-start" onClick={() => setActiveTab('events')}>
                      Events
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{userRole === 'admin' ? 'Admin' : 'Moderator'}</p>
                    <p className="text-xs text-muted-foreground">Logged in</p>
                  </div>
                  <Button variant="ghost" size="icon" onClick={onLogout}>
                    <LogOut className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Layout */}
      <div className="flex h-screen">
        {/* Sidebar - desktop only */}
        <div className="hidden lg:block w-64 bg-white shadow-sm border-r">
          <div className="flex flex-col h-full">
            <div className="p-6">
              <h1 className="text-2xl font-bold">CMS Dashboard</h1>
            </div>
            <div className="flex-1 py-6 space-y-1">
              <Button 
                variant={activeTab === 'posts' ? "secondary" : "ghost"} 
                className="w-full justify-start pl-6" 
                onClick={() => setActiveTab('posts')}
              >
                Blog Posts
              </Button>
              <Button 
                variant={activeTab === 'events' ? "secondary" : "ghost"} 
                className="w-full justify-start pl-6" 
                onClick={() => setActiveTab('events')}
              >
                Events
              </Button>
            </div>
            <div className="p-4 border-t">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{userRole === 'admin' ? 'Admin' : 'Moderator'}</p>
                  <p className="text-xs text-muted-foreground">Logged in</p>
                </div>
                <Button variant="ghost" size="icon" onClick={onLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between mb-4">
              <div className="hidden lg:block">
                <TabsList>
                  <TabsTrigger value="posts">Blog Posts</TabsTrigger>
                  <TabsTrigger value="events">Events</TabsTrigger>
                </TabsList>
              </div>
              {activeTab === 'posts' ? (
                <Link to="/admin/blog/new">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Post
                  </Button>
                </Link>
              ) : (
                <Link to="/admin/events/new">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Event
                  </Button>
                </Link>
              )}
            </div>

            <TabsContent value="posts" className="space-y-4">
              {posts.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-muted-foreground mb-4">No blog posts found</p>
                  <Link to="/admin/blog/new">
                    <Button>Create your first post</Button>
                  </Link>
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {posts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="font-medium">{post.title}</TableCell>
                          <TableCell>{post.date}</TableCell>
                          <TableCell>{post.author}</TableCell>
                          <TableCell>{post.category}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Link to={`/admin/blog/edit/${post.id}`}>
                                <Button variant="outline" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                onClick={() => handleDeletePost(post.id)}
                                disabled={userRole !== 'admin'}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>

            <TabsContent value="events" className="space-y-4">
              {events.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-muted-foreground mb-4">No events found</p>
                  <Link to="/admin/events/new">
                    <Button>Create your first event</Button>
                  </Link>
                </div>
              ) : (
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {events.map((event) => (
                        <TableRow key={event.id}>
                          <TableCell className="font-medium">{event.name}</TableCell>
                          <TableCell>{event.date}</TableCell>
                          <TableCell>{event.location}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Link to={`/admin/events/edit/${event.id}`}>
                                <Button variant="outline" size="icon">
                                  <Edit className="h-4 w-4" />
                                </Button>
                              </Link>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                onClick={() => handleDeleteEvent(event.id)}
                                disabled={userRole !== 'admin'}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
