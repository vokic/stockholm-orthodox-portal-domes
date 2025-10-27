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
import { log } from "console";

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
    { day: t("about.hours.saturday"), hours: "8- 14" },
    { day: t("about.hours.sunday"), hours: "8- 14" },
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
    console.log("Image clicked:", imageSrc);
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
            {/* <p className="text-white">{t("home.churchDescription")}</p> */}
          </div>
        </div>

        {/* Info Section */}
        {/* <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> */}
        {/* Quick Contact */}

        {/* <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  {t("home.contactInfo")}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">{t("home.phone")}</p>
                    <p>
                      <a
                        href={`tel:${t("home.phoneValue")}`}
                        className="text-blue-600 hover:underline"
                      >
                        {t("home.phoneValue")}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">{t("home.email")}</p>
                    <p>{t("home.emailValue")}</p>
                  </div>
                  <div>
                    <p className="font-semibold">{t("home.officeHours")}</p>
                    <p>{t("home.officeHoursValue")}</p>
                    <p>{t("home.officeHoursValue1")}</p>
                    <p>{t("home.officeHoursValue2")}</p> <br />
                    <p className="font-semibold">
                      {t("home.officeHoursValue3")}
                    </p>
                    <p>{t("home.officeHoursValue4")}</p>
                    <p>{t("home.officeHoursValue5")}</p>
                    <p>{t("home.officeHoursValue6")}</p>
                    <br />
                    <p>{t("home.officeHoursValue.info")}</p>
                  </div>
                </div>
              </div> */}
        {/* ovo ide u prethodni div ukoliko mora da se vraca
                
                <div className="mt-4 p-3 bg-orthodox-blue bg-opacity-10 rounded">
                  <p className="text-sm">{t("home.churchIntro")}</p>
                </div> */}
        {/* <Link to="/contact" className="btn-primary inline-block mt-4">
                  {t("home.contactUs")}
                </Link> */}
        {/* Location */}
        {/* <div className="card">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  {t("home.visitOurChurch")}
                </h3>
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
                </div> */}
        {/* <div className="rounded overflow-hidden flex justify-center items-center my-8 sm:my-10">
                  <Map className="h-72 sm:h-96" />
                </div> */}

        {/* <div className="mt-4 p-3 bg-orthodox-blue bg-opacity-10 rounded">
                   <p className="text-sm">{t("home.churchIntro")}</p>
                  <p className="text-sm">
                    Za sve informacije, pitanja i duhovne razovore, kliknite na
                    link dole za telefonske brojeve sveštenika i radna vremena.
                  </p>
                </div>

                <Link to="/contact" className="btn-primary inline-block mt-4">
                  {t("home.contactUs")}
                </Link> */}
        {/* </div>
            </div>
          </div>
        </section> */}

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
                          <span className="bg-orthodox-gold bg-opacity-20 px-3 py-1 rounded text-orthodox-blue">
                            {item.hours}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 text-center lg:text-left">
                    <Link to="/calendar" className="btn-primary inline-block">
                      {t("home.viewFullCalendarBogosluzenja")}
                    </Link>
                  </div>
                </div>

                {/* Map - Right Side */}
                <div>
                  {/* <h3 className="text-xl font-serif mb-4 text-orthodox-blue border-b border-orthodox-gold pb-2">
                    {t("home.visitOurChurch")}
                  </h3> */}
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

        {/* Contact Information and Form Section */}
        {/* <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8"> */}
        {/* Contact Information */}
        {/* <div className="card">
                <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  {t("contact.info")}
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">
                      {t("contact.address.title")}
                    </h3>
                    <p>Bägerstavägen 68, 120 47</p>
                    <p>120 47 Enskede Gård</p>
                    <p>Stockholm, Sweden</p>
                    <button
                      onClick={handleGetDirections}
                      className="flex items-center gap-2 mt-2 text-orthodox-blue hover:text-orthodox-gold transition-colors duration-150 underline"
                    >
                      <ExternalLink size={16} />
                      Get directions
                    </button>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">
                      {t("contact.phone.title")}
                    </h3>
                    <div className="space-y-2">
                      <p>
                        <a
                          href={`tel:${t("contact.phone.main").replace(
                            /\s+/g,
                            ""
                          )}`}
                          className="text-orthodox-blue underline hover:text-orthodox-gold duration-150"
                        >
                          {t("contact.phone.main")} (Main)
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">
                          Otac Milos Petrović:
                        </span>{" "}
                        <a
                          href="tel:+46701234567"
                          className="text-orthodox-blue underline hover:text-orthodox-gold duration-150"
                        >
                          +46 70 123 45 67
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">
                          Otac Stefan Jovanović:
                        </span>{" "}
                        <a
                          href="tel:+46702345678"
                          className="text-orthodox-blue underline hover:text-orthodox-gold duration-150"
                        >
                          +46 70 234 56 78
                        </a>
                      </p>
                      <p>
                        <span className="font-medium">
                          Otac Nikola Petrović:
                        </span>{" "}
                        <a
                          href="tel:+46703456789"
                          className="text-orthodox-blue underline hover:text-orthodox-gold duration-150"
                        >
                          +46 70 345 67 89
                        </a>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">
                      {t("contact.email.title")}
                    </h3>
                    <p>info@serbianorthodoxchurch.se</p>
                    <p>{t("contact.email.priest")}</p>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">
                      Social Networks
                    </h3>
                    <div className="flex items-center gap-3">
                      <a
                        href="https://www.facebook.com/profile.php?id=100069273553241"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orthodox-blue hover:text-orthodox-gold transition-colors"
                      >
                        <Facebook
                          size={20}
                          strokeWidth={1}
                          absoluteStrokeWidth
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/spcstockholm/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orthodox-blue hover:text-orthodox-gold transition-colors"
                      >
                        <Instagram
                          size={20}
                          strokeWidth={1}
                          absoluteStrokeWidth
                        />
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg mb-2 text-orthodox-blue">
                      {t("contact.hours.title")}
                    </h3>
                    <p>{t("contact.hours.weekdays")}</p>
                    <p>{t("contact.hours.saturday")}</p>
                    <p>{t("contact.hours.sunday")}</p>
                  </div>
                </div>
              </div> */}

        {/* Contact Form */}
        {/* <div className="card">
                <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                  {t("contact.form.title")}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block mb-1 font-medium">
                      {t("contact.form.name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                      {t("contact.form.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block mb-1 font-medium">
                      {t("contact.form.subject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-1 font-medium">
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-2 border border-gray-300 rounded"
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={isSubmitting}
                    ></textarea>
                  </div> */}

        {/* reCAPTCHA */}
        {/* <div className="pt-2">
                    <div className="flex justify-center mb-4">
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your actual site key
                        onChange={handleCaptchaChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full"
                      disabled={isSubmitting || !captchaValue}
                    >
                      {isSubmitting
                        ? t("contact.form.sending")
                        : t("contact.form.submit")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}

        {/* Map Section */}
        {/* <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t("contact.findus")}
              </h2>

              <div className="mb-6">
                <h3 className="font-serif text-lg mb-2 text-orthodox-blue">
                  {t("contact.directions.title")}
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("about.directions.public")}</li>
                  <li>{t("about.directions.bus")}</li>
                  <li>{t("about.directions.car")}</li>
                </ul>
              </div>

              <Map
                address="Bägerstavägen 68, 120 47 Enskede Gård Stockholm, Sweden"
                coordinates={[59.296242, 18.074015]}
              />
            </div>
          </div>
        </section> */}
        {/* Our Priests Section */}
        <AboutPriests onImageClick={handleImageClick} />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
