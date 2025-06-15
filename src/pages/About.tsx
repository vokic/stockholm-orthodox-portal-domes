import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Clock, MapPin, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Gallery from '../components/Gallery';
import Map from '../components/Map';
import ParishTodaySection from "../components/ParishTodaySection";
import OurMissionSection from "../components/OurMissionSection";
import OurCommunitySection from "../components/OurCommunitySection";
import {
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog";

const AboutPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // All standalone images on the page for modal viewing
  const allPageImages = [
    {
      src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
      alt: t('about.svetiSava.image1Alt')
    },
    {
      src: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=900&fit=crop",
      alt: t('about.svetiSava.image2Alt')
    },
    {
      src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
      alt: t('about.svetiSava.image3Alt')
    },
    {
      src: "/placeholder.svg",
      alt: t('about.gallery.churchHistory')
    },
    {
      src: "/placeholder.svg",
      alt: t('about.gallery.churchInterior')
    },
    {
      src: "/placeholder.svg",
      alt: t('about.priest1.imageAlt')
    },
    {
      src: "/placeholder.svg",
      alt: t('about.priest2.imageAlt')
    },
    {
      src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
      alt: t('about.parishToday.image1Alt')
    },
    {
      src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
      alt: t('about.ourMission.image1Alt')
    },
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
      alt: t('about.ourCommunity.image1Alt')
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      alt: t('about.ourCommunity.image2Alt')
    }
  ];

  // Handle image click
  const handleImageClick = (imageSrc: string) => {
    const imageIndex = allPageImages.findIndex(img => img.src === imageSrc);
    if (imageIndex !== -1) {
      setSelectedImageIndex(imageIndex);
      setIsLoading(true);
    }
  };

  // Navigate through images
  const navigateImages = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    setIsLoading(true);
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = selectedImageIndex === 0 ? allPageImages.length - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === allPageImages.length - 1 ? 0 : selectedImageIndex + 1;
    }
    
    setSelectedImageIndex(newIndex);
  };

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  // Working hours data
  const workingHours = [
    { day: t('about.hours.mondayFriday'), hours: '09:00 - 16:00' },
    { day: t('about.hours.saturday'), hours: '09:00 - 19:00' },
    { day: t('about.hours.sunday'), hours: '09:00 - 14:00' }
  ];

  // Church Now gallery images
  const churchNowImages = [
    {
      src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop',
      alt: t('about.gallery.churchNow.alt1')
    },
    {
      src: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop',
      alt: t('about.gallery.churchNow.alt2')
    },
    {
      src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop',
      alt: t('about.gallery.churchNow.alt3')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.churchNow.alt4')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.churchNow.alt5')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.churchNow.alt6')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.churchNow.alt7')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.churchNow.alt8')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.churchNow.alt9')
    }
  ];

  // Old photos gallery images
  const oldPhotosImages = [
    {
      src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop',
      alt: t('about.gallery.oldPhotos.alt1')
    },
    {
      src: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop',
      alt: t('about.gallery.oldPhotos.alt2')
    },
    {
      src: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=800&h=600&fit=crop',
      alt: t('about.gallery.oldPhotos.alt3')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.oldPhotos.alt4')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.oldPhotos.alt5')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.oldPhotos.alt6')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.oldPhotos.alt7')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.oldPhotos.alt8')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.oldPhotos.alt9')
    }
  ];

  // Interior gallery images
  const interiorImages = [
    {
      src: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop',
      alt: t('about.gallery.interior.alt1')
    },
    {
      src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop',
      alt: t('about.gallery.interior.alt2')
    },
    {
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop',
      alt: t('about.gallery.interior.alt3')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.interior.alt4')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.interior.alt5')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.interior.alt6')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.interior.alt7')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.interior.alt8')
    },
    {
      src: '/placeholder.svg',
      alt: t('about.gallery.interior.alt9')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16" style={{ backgroundImage: "url('/placeholder.svg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="container-custom rounded-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('about.title')}
            </h1>
            <p className="text-lg mt-2">{t('about.intro')}</p>
          </div>
        </div>

        {/* Parish Today Section */}
        <ParishTodaySection onImageClick={handleImageClick} />

        {/* Our Mission Section */}
        <OurMissionSection onImageClick={handleImageClick} />

        {/* Our Community Section */}
        <OurCommunitySection onImageClick={handleImageClick} />

        {/* Gallery Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.gallery.title')}
              </h2>
              
              {/* Church Now Section */}
              <div className="mb-12">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue">{t('about.gallery.churchNow.title')}</h3>
                <p className="text-gray-600 mb-6">{t('about.gallery.churchNow.description')}</p>
                <Gallery images={churchNowImages} />
              </div>
              
              {/* Old Photos Section */}
              <div className="mb-12">
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue">{t('about.gallery.oldPhotos.title')}</h3>
                <p className="text-gray-600 mb-6">{t('about.gallery.oldPhotos.description')}</p>
                <Gallery images={oldPhotosImages} />
              </div>
              
              {/* Interior Section */}
              <div>
                <h3 className="text-xl font-serif mb-4 text-orthodox-blue">{t('about.gallery.interior.title')}</h3>
                <p className="text-gray-600 mb-6">{t('about.gallery.interior.description')}</p>
                <Gallery images={interiorImages} />
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.history')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="mb-4">
                    {t('about.historyText.p1')}
                  </p>
                  <p className="mb-4">
                    {t('about.historyText.p2')}
                  </p>
                  <p className="mb-4">
                    {t('about.historyText.p3')}
                  </p>
                  <div className="ornament">☦</div>
                  <p className="mb-4">
                    {t('about.historyText.p4')}
                  </p>
                  <p className="mb-4">
                    {t('about.historyText.p5')}
                  </p>
                  <p className="mb-4">
                    {t('about.historyText.p6')}
                  </p>
                </div>
                <div className="space-y-4">
                  <img 
                    src="/placeholder.svg" 
                    alt={t('about.gallery.churchHistory')} 
                    className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/placeholder.svg")}
                  />
                  <img 
                    src="/placeholder.svg" 
                    alt={t('about.gallery.churchInterior')} 
                    className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/placeholder.svg")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sveti Sava Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-8 text-orthodox-blue border-b border-orthodox-gold pb-2 text-center">
                {t('about.svetiSava.title')}
              </h2>
              
              {/* Text content in centered column */}
              <div className="max-w-4xl mx-auto mb-8">
                <h3 className="text-xl font-serif mb-6 text-center">{t('about.svetiSava.subtitle')}</h3>
                <p className="mb-6 text-center">
                  {t('about.svetiSava.p1')}
                </p>
                <p className="mb-6 text-center">
                  {t('about.svetiSava.p2')}
                </p>
                <p className="mb-6 text-center">
                  {t('about.svetiSava.p3')}
                </p>
                <p className="mb-6 text-center">
                  {t('about.svetiSava.p4')}
                </p>
                <p className="text-center">
                  {t('about.svetiSava.p5')}
                </p>
              </div>

              {/* Images in symmetric grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop" 
                    alt={t('about.svetiSava.image1Alt')} 
                    className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop")}
                  />
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=900&fit=crop"
                    alt={t('about.svetiSava.image2Alt')}
                    className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=900&fit=crop")}
                  />
                </div>
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop"
                    alt={t('about.svetiSava.image3Alt')}
                    className="rounded-lg cursor-pointer hover:opacity-90 transition-opacity w-full max-w-sm"
                    onClick={() => handleImageClick("https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Our Priests Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.priests')}
              </h2>
              
              {/* First Priest - Left Side */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-1">
                  <img 
                    src="/placeholder.svg" 
                    alt={t('about.priest1.imageAlt')} 
                    className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/placeholder.svg")}
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-serif mb-3">{t('about.priest1.name')}</h3>
                  
                  <p className="mb-4">
                    {t('about.priest1.p1')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest1.p2')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest1.p3')}
                  </p>
                  <p>
                    {t('about.priest1.p4')}
                  </p>
                </div>
              </div>
              
              {/* Second Priest - Right Side (Mirrored) */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3 md:order-1">
                  <h3 className="text-xl font-serif mb-3">{t('about.priest2.name')}</h3>
                  
                  <p className="mb-4">
                    {t('about.priest2.p1')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest2.p2')}
                  </p>
                  <p className="mb-4">
                    {t('about.priest2.p3')}
                  </p>
                  <p>
                    {t('about.priest2.p4')}
                  </p>
                </div>
                
                <div className="md:col-span-1 md:order-2">
                  <img 
                    src="/placeholder.svg" 
                    alt={t('about.priest2.imageAlt')} 
                    className="rounded-lg w-full cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => handleImageClick("/placeholder.svg")}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location and Working Hours Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2 flex items-center gap-2">
                <MapPin className="text-orthodox-gold" /> 
                {t('about.locationHours.title')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
                    <Clock className="text-orthodox-gold" /> 
                    {t('about.locationHours.openingHours')}
                  </h3>
                  
                  <div className="bg-orthodox-cream p-6 rounded-lg mb-6">
                    <ul className="space-y-4">
                      {workingHours.map((item, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                          <span className="font-medium">{item.day}</span>
                          <span className="bg-orthodox-gold bg-opacity-20 px-3 py-1 rounded text-orthodox-blue">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-serif mb-4">{t('about.locationHours.contactInfo')}</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.address')}:</span>
                      <span>{t('about.locationHours.addressValue')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.phone')}:</span>
                      <span>{t('about.locationHours.phoneValue')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.email')}:</span>
                      <span>{t('about.locationHours.emailValue')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">{t('about.locationHours.priest')}:</span>
                      <span>{t('about.locationHours.priestValue')}</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif mb-4">{t('about.locationHours.findUs')}</h3>
                  <p className="mb-4">
                    {t('about.locationHours.findUsText')}
                  </p>
                  
                  {/* Map Component */}
                  <Map className="mt-4" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Community Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.community')}
              </h2>
              
              <p className="mb-4">
                {t('about.communityText.p1')}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">150+</div>
                  <p>{t('about.communityText.families')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">15+</div>
                  <p>{t('about.communityText.nationalities')}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">35+</div>
                  <p>{t('about.communityText.years')}</p>
                </div>
              </div>
              
              <p className="mb-4">
                {t('about.communityText.p2')}
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>{t('about.communityText.activities.sunday')}</li>
                <li>{t('about.communityText.activities.youth')}</li>
                <li>{t('about.communityText.activities.bible')}</li>
                <li>{t('about.communityText.activities.charity')}</li>
                <li>{t('about.communityText.activities.cultural')}</li>
                <li>{t('about.communityText.activities.fellowship')}</li>
              </ul>
              
              <p>
                {t('about.communityText.p3')}
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Modal for standalone images */}
      <Dialog 
        open={selectedImageIndex !== null} 
        onOpenChange={(open) => !open && setSelectedImageIndex(null)}
      >
        <DialogContent className="max-w-5xl p-0 bg-black/90 border-none">
          <DialogClose className="absolute right-3 top-3 z-10 text-white hover:text-gray-300">
            <X className="h-6 w-6" />
          </DialogClose>
          
          {selectedImageIndex !== null && (
            <div className="w-full h-full flex items-center justify-center p-4 relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-t-orthodox-gold border-opacity-50 rounded-full animate-spin"></div>
                </div>
              )}
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages('prev');
                }}
                className="absolute left-4 z-10 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <img 
                src={allPageImages[selectedImageIndex].src} 
                alt={allPageImages[selectedImageIndex].alt} 
                className={`max-h-[80vh] max-w-full object-contain transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={handleImageLoaded}
              />
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImages('next');
                }}
                className="absolute right-4 z-10 bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                {selectedImageIndex + 1} / {allPageImages.length}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AboutPage;
