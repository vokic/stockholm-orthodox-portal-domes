import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { useToast } from "../hooks/use-toast";
import Map from "../components/Map";
import ReCAPTCHA from "react-google-recaptcha";
import { Clock, ExternalLink, Facebook, Instagram, MapPin } from "lucide-react";
import AboutPriests from "@/components/about/AboutPriests";

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Working hours data
  const workingHours = [
    { day: t("about.hours.mondayFridayPre"), hours: "9 - 13" },
    { day: t("about.hours.mondayFridayPosle"), hours: "17 - 18" },
    { day: t("about.hours.saturday"), hours: "8 - 14" },
    { day: t("about.hours.sunday"), hours: "8 - 14" },
  ];

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if captcha is completed
    if (!captchaValue) {
      toast({
        title: t("contact.form.captchaRequired"),
        description: t("contact.form.completeCaptcha"),
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create form data for email service
      const formData = {
        name,
        email,
        subject,
        message,
        captchaToken: captchaValue,
        recipient: "info@serbianorthodoxchurch.se",
      };

      // Using a service like EmailJS, Formspree, or your own endpoint
      // This is a mock implementation - replace with your actual email service
      const response = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form on success
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setCaptchaValue(null);

        toast({
          title: t("contact.form.successTitle"),
          description: t("contact.form.successMessage"),
          duration: 5000,
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: t("contact.form.errorTitle"),
        description: t("contact.form.errorMessage"),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGetDirections = () => {
    const address = "Bägerstavägen 68, 120 47 Enskede Gård, Stockholm, Sweden";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleImageClick = (imageSrc: string) => {
    // Image click handler - can be extended for modal/lightbox functionality
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t("nav.contact")}
            </h1>
          </div>
        </div>

        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h1 className="text-xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2 flex items-center gap-2">
                {t("about.locationHours.title")}
              </h1>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Working Hours - Left Side */}
                <div>
                  <div className="bg-orthodox-cream p-6 rounded-lg mb-6">
                    <ul className="space-y-4">
                      {workingHours.map((item, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2"
                        >
                          <span className="font-medium">{item.day}</span>
                          <span className="bg-orthodox-gold bg-opacity-20 px-3 py-1 rounded text-orthodox-blue whitespace-nowrap">
                            {item.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 p-3 bg-orthodox-blue bg-opacity-10 rounded">
                    {t("home.viewFullCalendarInfo")}
                  </p>

                  <div className="mt-6 text-center lg:text-left">
                    <Link to="/calendar" className="btn-primary inline-block">
                      {t("home.viewFullCalendarBogosluzenja")}
                    </Link>
                  </div>
                </div>

                {/* Map - Right Side */}
                <div>
                  <p className="mb-4">{t("home.visitOurChurchIntro")}</p>
                  <div className="mb-4">
                    <p className="font-semibold">{t("home.addressLabel")}</p>
                    <p>{t("home.address")}</p>
                    <button
                      onClick={handleGetDirections}
                      className="flex items-center gap-2 mt-2 text-orthodox-blue hover:text-orthodox-gold transition-colors duration-150 underline"
                    >
                      <ExternalLink size={16} />
                      {t("home.getDirections")}
                    </button>
                  </div>
                  <div className="w-full rounded overflow-hidden">
                    <Map className="h-72 lg:h-full min-h-[300px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Priests Section */}
        <AboutPriests onImageClick={handleImageClick} />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
