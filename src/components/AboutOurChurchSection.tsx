
import React from "react";

const AboutOurChurchSection: React.FC = () => (
  <section className="section pt-16 pb-8 bg-white">
    <div className="container-custom card">
      <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-orthodox-blue">
        About Our Church
      </h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="mb-5 text-lg text-gray-700">
            Nestled in Stockholm, our Serbian Orthodox Church has been a refuge and spiritual anchor for generations of families. Rooted in ancient traditions yet alive with the joys and challenges of today's world, our parish stands as a living witness to faith, love, and unity.
          </p>
          <img
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop"
            alt="Church interior and altar"
            className="rounded-lg shadow-md mb-6 w-full object-cover"
            style={{ maxHeight: 240 }}
          />
          <p className="mb-5 text-lg text-gray-700">
            We cherish every sacred moment: the quietness of daily prayer before icons, the light of candles on feast days, and the collective voice of our choir during festive services. Here, all are welcome—families, newcomers, visitors, and seekers drawn by the Orthodox tradition.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=800&h=600&fit=crop"
            alt="Church building exterior night"
            className="rounded-lg shadow-md mb-6 w-full object-cover"
            style={{ maxHeight: 240 }}
          />
          <p className="mb-5 text-lg text-gray-700">
            Beyond worship, our parish is a vibrant community. Children learn the stories and language of their ancestors; elders share wisdom over coffee and homecooked meals. Charity efforts, youth gatherings, and cultural events connect us—binding generations together in a spirit of mutual care and respect.
          </p>
          <img
            src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop"
            alt="Community gathering outdoors"
            className="rounded-lg shadow-md w-full object-cover"
            style={{ maxHeight: 180 }}
          />
        </div>
      </div>
      <div className="mt-8">
        <p className="text-lg text-gray-700 mb-4">
          Whether you are a lifelong parishioner or visiting for the first time, may you find peace, friendship, and inspiration within these walls. Our church continues to grow and renew itself—rooted in Christ’s love and the radiant tradition of the Orthodox faith.
        </p>
        <p className="text-gray-600 italic">
          "Christ is in our midst—He is and ever shall be!"
        </p>
      </div>
    </div>
  </section>
);

export default AboutOurChurchSection;
