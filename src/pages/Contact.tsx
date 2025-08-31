import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";
import { useToast } from "../hooks/use-toast";
import Map from "../components/Map";
import ReCAPTCHA from "react-google-recaptcha";
import { ExternalLink, Facebook, Instagram } from "lucide-react";

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            <p className="text-white">{t("home.churchDescription")}</p>
          </div>
        </div>

        {/* Contact Information and Form Section */}
        <section className="section">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="card">
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
              </div>

              {/* Contact Form */}
              <div className="card">
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
                  </div>

                  {/* reCAPTCHA */}
                  <div className="pt-2">
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
        </section>

        {/* Map Section */}
        <section className="section bg-orthodox-cream">
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
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
