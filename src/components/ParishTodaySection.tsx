
import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop",
    alt: "Modern church exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
    alt: "Church sanctuary interior",
  },
  {
    src: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
    alt: "Community gathering at church",
  },
];

const ParishTodaySection: React.FC = () => (
  <section className="section bg-orthodox-cream">
    <div className="container-custom">
      <div className="card">
        <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
          About Our Parish Today
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6">
              Our parish today is a vibrant home to Orthodox Christians from many different backgrounds and generations. We celebrate the Divine Liturgy every week, welcome new families, and offer a space for both spiritual growth and meaningful fellowship.
            </p>
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="rounded-lg mb-6 shadow-md"
            />
            <p className="mb-6">
              With every church service, feast, and community event, our church is filled with joyful singing, moments of quiet prayer, and the laughter of children. The church interior blends timeless tradition with a sense of warmth and togetherness, making it a sanctuary for all ages.
            </p>
          </div>
          <div>
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="rounded-lg mb-6 shadow-md"
            />
            <p className="mb-6">
              In recent years, we've expanded our ministries, supporting a thriving Sunday school, youth groups, charitable outreach, and cultural events. The life of our parish is only possible thanks to the dedication of volunteers and the openness of our community, continuing the legacy of those who built this church generations ago.
            </p>
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ParishTodaySection;
