
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
import { Post } from '../../types';

const postSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  content: z.string().min(10, { message: "Content must be at least 10 characters" }),
  excerpt: z.string().min(10, { message: "Excerpt must be at least 10 characters" }),
  imageUrl: z.string().url({ message: "Please enter a valid URL" }),
  author: z.string().min(2, { message: "Author name must be at least 2 characters" }),
  category: z.string().min(2, { message: "Category must be at least 2 characters" }),
  tags: z.string().optional(),
});

interface BlogPostEditorProps {
  userRole: string;
}

export const BlogPostEditor: React.FC<BlogPostEditorProps> = ({ userRole }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [posts, setPosts] = useLocalStorage<Post[]>('cms-posts', []);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isEditMode = Boolean(id);

  const form = useForm<z.infer<typeof postSchema>>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
      excerpt: "",
      imageUrl: "",
      author: "",
      category: "",
      tags: "",
    },
  });

  // Load post data if in edit mode
  useEffect(() => {
    if (isEditMode && id) {
      const post = posts.find(post => post.id === id);
      if (post) {
        form.reset({
          title: post.title,
          content: post.content,
          excerpt: post.excerpt,
          imageUrl: post.imageUrl,
          author: post.author,
          category: post.category,
          tags: post.tags.join(', '),
        });
      } else {
        toast.error("Post not found");
        navigate("/admin");
      }
    }
  }, [id, posts, form, navigate, isEditMode]);

  const onSubmit = (values: z.infer<typeof postSchema>) => {
    setIsSubmitting(true);
    
    // Small delay to simulate network request
    setTimeout(() => {
      try {
        const tagsArray = values.tags ? values.tags.split(',').map(tag => tag.trim()) : [];
        
        if (isEditMode && id) {
          // Update existing post
          const updatedPosts = posts.map(post => 
            post.id === id 
              ? { 
                  ...post, 
                  ...values, 
                  tags: tagsArray,
                }
              : post
          );
          setPosts(updatedPosts);
          toast.success("Post updated successfully");
        } else {
          // Create new post
          const newPost: Post = {
            id: Date.now().toString(),
            ...values,
            tags: tagsArray,
            date: new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            }),
          };
          setPosts([...posts, newPost]);
          toast.success("Post created successfully");
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
            {isEditMode ? "Edit Blog Post" : "Create New Blog Post"}
          </h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Post title..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="author"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <FormControl>
                        <Input placeholder="Author name..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl>
                        <Input placeholder="Post category..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Featured Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://example.com/image.jpg" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="excerpt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Excerpt</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="A short excerpt of the post..." 
                        className="resize-none" 
                        rows={2}
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Content</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Main content of the post..." 
                        className="min-h-[200px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tags (comma-separated)</FormLabel>
                    <FormControl>
                      <Input placeholder="faith, community, prayer" {...field} />
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
                  {isSubmitting ? "Saving..." : isEditMode ? "Update Post" : "Create Post"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
