
import React from "react";

const communityImages = [
  {
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop",
    alt: "Church community gathering and discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
    alt: "Group at parish event",
  },
];

const OurCommunitySection: React.FC = () => (
  <section className="section bg-orthodox-cream">
    <div className="container-custom">
      <div className="card">
        <h2 className="text-2xl font-serif mb-6 text-orthodox-blue border-b border-orthodox-gold pb-2">
          Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="mb-6">
              Our church community is a joyful mosaic of cultural backgrounds, languages, and stories, united by a shared Orthodox faith and love for fellowship. For decades, we’ve welcomed new families, old friends, and travelers alike.
            </p>
            <img
              src={communityImages[0].src}
              alt={communityImages[0].alt}
              className="rounded-lg mb-6 shadow-md"
            />
            <p className="mb-6">
              The bonds formed here extend beyond Sunday liturgy, as we come together in feast and fast, laughter and tears, service and celebration. Generations have helped shape our parish into a home for all.
            </p>
          </div>
          <div>
            <img
              src={communityImages[1].src}
              alt={communityImages[1].alt}
              className="rounded-lg mb-6 shadow-md"
            />
            <p className="mb-6">
              Together we support one another, grow in faith, and help those in need—reflecting Christ’s love in everyday life. Our children, youth, and elders are all cherished and valued in this vibrant family.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default OurCommunitySection;
