
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Index';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ServicesPage from './pages/Services';
import BlogPage from './pages/Blog';
import EventsPage from './pages/Events';
import BlogPostPage from './pages/BlogPost';
import Calendar from './pages/Calendar';
import NotFound from './pages/NotFound';
import ClancPage from './pages/Clanci';
import DonatePage from './pages/Donate';
import CustomsPage from './pages/Customs';
import Admin from './pages/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/clanci" element={<ClancPage />} />
        <Route path="/clanci/:id" element={<BlogPostPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/customs" element={<CustomsPage />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
