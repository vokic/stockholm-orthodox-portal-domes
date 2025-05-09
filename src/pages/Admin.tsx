
import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AdminLogin } from '../components/admin/AdminLogin';
import { Dashboard } from '../components/admin/Dashboard';
import { BlogPostEditor } from '../components/admin/BlogPostEditor';
import { EventEditor } from '../components/admin/EventEditor';
import { useLocalStorage } from '../hooks/useLocalStorage';

// Since we're not using a backend with proper auth, we'll use local storage
// and hardcoded credentials for demo purposes
const ADMIN_EMAIL = 'admin@example.com';
const ADMIN_PASSWORD = 'admin123';
const MODERATOR_EMAIL = 'moderator@example.com';
const MODERATOR_PASSWORD = 'moderator123';

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean>('adminAuth', false);
  const [userRole, setUserRole] = useLocalStorage<string>('adminRole', '');

  const handleLogin = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setUserRole('admin');
      return true;
    } else if (email === MODERATOR_EMAIL && password === MODERATOR_PASSWORD) {
      setIsAuthenticated(true);
      setUserRole('moderator');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole('');
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard userRole={userRole} onLogout={handleLogout} />} />
      <Route path="/blog/new" element={<BlogPostEditor userRole={userRole} />} />
      <Route path="/blog/edit/:id" element={<BlogPostEditor userRole={userRole} />} />
      <Route path="/events/new" element={<EventEditor userRole={userRole} />} />
      <Route path="/events/edit/:id" element={<EventEditor userRole={userRole} />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default Admin;
