import React from "react";
import { ExternalLink, Star } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Revolution",
      category: "Online Store",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      testimonial: "Sales increased by 300% in the first month!",
      client: "Fashion Boutique Owner",
      rating: 5
    },
    {
      title: "Professional Services Hub",
      category: "Corporate Website",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&h=300&fit=crop",
      testimonial: "Beautiful design and lightning-fast delivery!",
      client: "Consulting Firm CEO",
      rating: 5
    },
    {
      title: "Local Business Boost",
      category: "GMB + SEO",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=300&fit=crop",
      testimonial: "Now ranking #1 in local searches. Amazing!",
      client: "Restaurant Owner",
      rating: 5
    },
  ];

  return (
    <section id="portfolio" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4">
            Real Results from <span className="gradient-text">Real Businesses</span>
          </h2>
          <p className="text-lg text-gray-600">
            See how we've transformed businesses like yours
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div 
              key={project.title}
              className="group glass rounded-2xl overflow-hidden hover-lift card-shine"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-56 bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <button className="bg-white text-blue-600 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="font-display font-bold text-xl mt-2 mb-3">{project.title}</h3>
                
                {/* Testimonial */}
                <div className="bg-blue-50 rounded-xl p-4 mb-3">
                  <div className="flex gap-1 mb-2">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm italic text-gray-700 mb-2">"{project.testimonial}"</p>
                  <p className="text-xs font-medium text-gray-600">— {project.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12 fade-in-up">
          <a 
            href="#contact" 
            className="inline-block glass border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-all font-semibold"
          >
            Start Your Project Today
          </a>
        </div>
      </div>
    </section>
  );
}
