
import React from "react";

const AboutIntroSection: React.FC = () => (
  <section className="section bg-orthodox-cream py-16">
    <div className="container-custom card">
      <div className="flex flex-col md:flex-row md:items-center gap-8">
        <div className="md:w-3/5">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-3 text-orthodox-blue">
            Our Parish Today: Faith, Community & Renewal
          </h2>
          <p className="mb-5 text-lg text-gray-700">
            In the heart of Stockholm, our Serbian Orthodox Church has blossomed into a vibrant center of Christian life. Every Sunday, the sanctuary fills with families and children, echoing the joyous sounds of prayer and song as we celebrate the Divine Liturgy. The doors stand open not only to worshippers, but to all who seek peace, tradition, and a welcoming spiritual home far from their homeland.
          </p>
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
            alt="Current church exterior"
            className="rounded-lg mb-6 shadow-md"
          />
          <p className="mb-5 text-lg text-gray-700">
            Our parish is a tapestry of cultures and generations. After services, laughter spills into the parish hall as we share homemade food and stories—children’s footsteps mixing with the wisdom of our elders. Community events, language lessons, and choir rehearsals bring us together throughout the year, from the joyful celebration of Pascha to the reflective prayer of Christmas evenings.
          </p>
        </div>

        <div className="md:w-2/5 flex flex-col gap-6">
          <img
            src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop"
            alt="Community gathering at church"
            className="rounded-lg w-full h-52 object-cover shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
            alt="Modern church building"
            className="rounded-lg w-full h-52 object-cover shadow-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div>
          <img
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop"
            alt="Church interior"
            className="rounded-lg w-full h-48 object-cover shadow-md mb-4"
          />
          <p className="text-gray-700">
            The icons and candles in our church witness daily acts of faith—quiet prayer, holy mysteries, and moments of deep reflection. Visitors describe our sacred spaces as both peaceful and rich with living tradition.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop"
            alt="Congregation at Divine Liturgy"
            className="rounded-lg w-full h-48 object-cover shadow-md mb-4"
          />
          <p className="text-gray-700">
            Recently, our youth group has played a growing role in parish life—organizing workshops, pilgrimages, and outreach for younger members. Their energy keeps our faith both rooted in tradition and open to renewal.
          </p>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop"
            alt="Community celebration"
            className="rounded-lg w-full h-48 object-cover shadow-md mb-4"
          />
          <p className="text-gray-700">
            We grow together—celebrating the beauty of Orthodox worship, the warmth of fellowship, and the hope that our parish brings to Serbs and friends of all backgrounds in Sweden.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutIntroSection;
