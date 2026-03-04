import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import SerbianCross from "@/components/SerbianCross";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center max-w-md px-4">
          <div className="text-5xl font-serif mb-6 text-orthodox-gold">
            <SerbianCross size={32} className="text-orthodox-gold" />
          </div>
          <h1 className="text-4xl font-bold font-serif mb-4 text-orthodox-blue">
            {t("notFound.title")}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {t("notFound.message")}
          </p>
          <Link to="/" className="btn-primary">
            {t("notFound.backHome")}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
