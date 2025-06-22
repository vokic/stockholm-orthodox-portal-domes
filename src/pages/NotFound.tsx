import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SerbianCross from "@/components/SerbianCross";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4">
          <div className="text-5xl font-serif mb-6 text-orthodox-gold">
            <SerbianCross size={32} className="text-orthodox-gold" />
          </div>
          <h1 className="text-4xl font-bold font-serif mb-4 text-orthodox-blue">
            404
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            We're sorry, the page you're looking for cannot be found.
          </p>
          <Link to="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
