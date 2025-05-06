
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { Clock } from 'lucide-react';
import Gallery from '../components/Gallery';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  // Working hours data
  const workingHours = [
    { day: 'Monday - Friday', hours: '09:00 - 16:00' },
    { day: 'Saturday', hours: '09:00 - 19:00' },
    { day: 'Sunday', hours: '09:00 - 14:00' }
  ];

  // Gallery images
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1518224071898-d1642604e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
      alt: 'Church Interior'
    },
    {
      src: 'https://images.unsplash.com/photo-1541331913542-3e775ab48a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      alt: 'Church Icons'
    },
    {
      src: 'https://images.unsplash.com/photo-1594905883965-ba245250c1c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Church Exterior'
    },
    {
      src: 'https://images.unsplash.com/photo-1614351636041-21b1dffe76a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Church Bell Tower'
    },
    {
      src: 'https://images.unsplash.com/photo-1629111963021-146f7e4651f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Church Dome'
    },
    {
      src: 'https://images.unsplash.com/photo-1614351636041-21b1dffe76a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      alt: 'Candles'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-orthodox-blue text-white py-16">
          <div className="container-custom">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4 text-orthodox-gold">
              {t('about.title')}
            </h1>
          </div>
        </div>

        {/* History Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.history')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="mb-4">
                    The Serbian Orthodox Church of Sveti Sava in Stockholm was founded in 1985 by Serbian immigrants who had come to Sweden seeking a better life. What started as small prayer gatherings in members' homes grew into a vibrant parish community dedicated to preserving Serbian Orthodox traditions in Scandinavia.
                  </p>
                  <p className="mb-4">
                    In 1992, the community purchased its current building, a historic structure dating back to the early 20th century, which was consecrated as an Orthodox church after extensive renovations. The church was named in honor of Sveti Sava (Saint Sava), the patron saint of Serbia and the first Archbishop of the autocephalous Serbian Orthodox Church.
                  </p>
                  <p className="mb-4">
                    Today, our parish serves Orthodox Christians from various ethnic backgrounds, including Serbian, Greek, Russian, Romanian, and Swedish converts, reflecting the diverse nature of Orthodoxy in Stockholm.
                  </p>
                  
                  <div className="ornament">☦</div>
                  
                  <p className="mb-4">
                    Our church is adorned with traditional iconography painted by local and international iconographers, following the Byzantine tradition. The interior features a hand-carved wooden iconostasis imported from Serbia in 2005, depicting saints particularly venerated in the Serbian Orthodox tradition.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1518224071898-d1642604e3b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt="Church History" 
                    className="rounded-lg w-full"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1541331913542-3e775ab48a59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt="Church Interior" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sveti Sava Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                Sveti Sava: The First Serbian Archbishop
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1581337204873-1a38e3b8d49b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80" 
                    alt="Saint Sava" 
                    className="rounded-lg w-full"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-serif mb-3">The Life and Legacy of Saint Sava</h3>
                  
                  <p className="mb-4">
                    Saint Sava (1174-1236), born Rastko Nemanjić, was the youngest son of Stefan Nemanja, the Grand Prince of Serbia. Despite being a prince with all the comforts of royal life, young Rastko was drawn to spiritual matters from an early age.
                  </p>
                  <p className="mb-4">
                    At the age of 17, Rastko left his father's court and traveled to Mount Athos, the center of Orthodox monasticism, where he became a monk and took the name Sava. His father later joined him, taking monastic vows as Simeon. Together, they established the Hilandar Monastery on Mount Athos, which remains an important Serbian spiritual center to this day.
                  </p>
                  <p className="mb-4">
                    Saint Sava's greatest achievement came in 1219 when he successfully negotiated the autocephaly (independence) of the Serbian Orthodox Church and became its first Archbishop. This was a crucial moment in Serbian history, as it established both the religious and national identity of the Serbian people.
                  </p>
                  <p className="mb-4">
                    Beyond his ecclesiastical role, Saint Sava was also a diplomat, legislator, writer, and educator. He founded schools, hospitals, and monasteries throughout Serbia, and authored the Nomocanon, the first Serbian constitution and legal code. His contributions to Serbian culture, law, and education earned him the title "Enlightener of the Serbs."
                  </p>
                  <p>
                    Saint Sava died on January 14, 1236, while returning from a pilgrimage to the Holy Land. He is commemorated on January 27 in the Orthodox calendar. His legacy continues to inspire Orthodox Christians worldwide, representing the ideal harmony between spiritual devotion and practical service to one's community and nation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Priest Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                {t('about.priest')}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <img 
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt="Father Nicholas" 
                    className="rounded-lg w-full"
                  />
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-serif mb-3">Father Nicholas Petrovic</h3>
                  
                  <p className="mb-4">
                    Father Nicholas was ordained to the priesthood in 1998 after completing his theological studies at the Orthodox Theological Faculty of the University of Belgrade and St. Vladimir's Orthodox Theological Seminary in the United States.
                  </p>
                  <p className="mb-4">
                    Prior to leading our parish, Father Nicholas served communities in Serbia and the United Kingdom. He has been our parish priest since 2010.
                  </p>
                  <p className="mb-4">
                    Father Nicholas is fluent in Serbian, English, and Swedish, and is continuing to learn Greek to better serve our diverse community. He is known for his warm pastoral approach and dedication to Orthodox education.
                  </p>
                  <p>
                    His vision for our parish focuses on preserving Serbian Orthodox traditions while making them accessible to all generations and cultural backgrounds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Working Hours Section */}
        <section className="section bg-orthodox-cream">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2 flex items-center gap-2">
                <Clock className="text-orthodox-gold" />
                Church Office Hours
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-6">
                    Our church office is open during the following hours for administrative matters, inquiries, and scheduling of sacraments. 
                    Outside of these hours, please contact us by email or phone for urgent matters.
                  </p>
                  
                  <div className="bg-orthodox-cream p-6 rounded-lg">
                    <h3 className="text-xl font-serif mb-4">Opening Hours</h3>
                    <ul className="space-y-4">
                      {workingHours.map((item, index) => (
                        <li key={index} className="flex justify-between items-center border-b border-dashed border-gray-300 pb-2">
                          <span className="font-medium">{item.day}</span>
                          <span className="bg-orthodox-gold bg-opacity-20 px-3 py-1 rounded text-orthodox-blue">{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-serif mb-4">Contact Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">Address:</span>
                      <span>Birger Jarlsgatan 98, 114 20 Stockholm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">Phone:</span>
                      <span>+46 8 123 456 78</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">Email:</span>
                      <span>info@svetisava-stockholm.se</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold min-w-[100px]">Priest:</span>
                      <span>Father Nicholas Petrovic<br />+46 70 123 45 67</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 aspect-video bg-gray-200 rounded overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      Map placeholder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gallery Section */}
        <section className="section">
          <div className="container-custom">
            <div className="card">
              <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
                Church Gallery
              </h2>
              
              <Gallery images={galleryImages} />
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
                Our parish community is diverse and vibrant, composed of Orthodox Christians from various cultural backgrounds. We are united by our shared faith and commitment to living the Orthodox way of life in Stockholm.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">150+</div>
                  <p>Families</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">15+</div>
                  <p>Nationalities</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orthodox-gold mb-2">35+</div>
                  <p>Years of Service</p>
                </div>
              </div>
              
              <p className="mb-4">
                We offer a range of ministries and activities beyond worship services, including:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Sunday School for children of all ages</li>
                <li>Youth group for teenagers and young adults</li>
                <li>Bible study and catechism classes</li>
                <li>Charitable outreach to the local community</li>
                <li>Cultural events celebrating Orthodox traditions</li>
                <li>Fellowship meals after Sunday services</li>
              </ul>
              
              <p>
                Whether you are a lifelong Orthodox Christian or simply curious about the Orthodox faith, we welcome you to visit us and become part of our community.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
