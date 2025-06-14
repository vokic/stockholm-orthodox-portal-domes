
import React from "react";

const missionImages = [
  {
    src: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=600&fit=crop",
    alt: "Light of faith in the church hall",
  },
  {
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
    alt: "Church sanctuary with warm light",
  },
];

const OurMissionSection: React.FC = () => (
  <section className="section bg-white">
    <div className="container-custom">
      <div className="card">
        <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6">
              Our parish’s mission is to continue the sacred work of the Orthodox Church in Stockholm, drawing everyone closer to Christ through vibrant worship, teaching, and loving service. We welcome all people seeking truth and meaning, whatever their background.
            </p>
            <img
              src={missionImages[0].src}
              alt={missionImages[0].alt}
              className="rounded-lg mb-6 shadow-md"
            />
            <p className="mb-6">
              As a spiritual family, we strive to nurture faith across generations. Our commitment is to offer strength, comfort, and inspiration in Christ, building a community where the Gospel takes root in hearts and lives.
            </p>
          </div>
          <div>
            <img
              src={missionImages[1].src}
              alt={missionImages[1].alt}
              className="rounded-lg mb-6 shadow-md"
            />
            <p className="mb-6">
              Through worship, teaching, outreach, and acts of kindness, we aim to shine the Light of Orthodoxy to everyone around us, carrying joy and compassion into the wider world. Every member has a place in our mission to serve God and neighbor.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurMissionSection;
