import './services.css';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const ServicesPage = () => (
  <div className="services-page">
    <section className="services-hero">
      <div className="hero-content">
        <h1 className="hero-title">Our Services</h1>
        <p className="hero-subtitle">
          Discover our comprehensive range of beauty services designed to enhance your natural radiance
        </p>
      </div>
    </section>

    <section className="services-grid-section">
      <div className="services-grid">
        {[
          {
            category: "Hair Services",
            services: [
              { name: "Precision Cuts", price: "$80-120", description: "Expert styling tailored to your face shape" },
              { name: "Color & Highlights", price: "$150-300", description: "Professional coloring with premium products" },
              { name: "Hair Treatments", price: "$100-200", description: "Deep conditioning and repair treatments" }
            ],
          },
          {
            category: "Facial Treatments",
            services: [
              { name: "Signature Facial", price: "$120-180", description: "Customized facial for your skin type" },
              { name: "Anti-Aging Treatment", price: "$200-350", description: "Advanced treatments for youthful skin" },
              { name: "Acne Solutions", price: "$100-150", description: "Targeted treatments for clear skin" }
            ],
          },
          {
            category: "Nail Services",
            services: [
              { name: "Manicure & Pedicure", price: "$60-100", description: "Complete nail care and styling" },
              { name: "Gel Extensions", price: "$80-120", description: "Long-lasting nail enhancements" },
              { name: "Nail Art", price: "$20-50", description: "Creative designs and custom art" }
            ],
          },
          {
            category: "Body Treatments",
            services: [
              { name: "Relaxing Massage", price: "$100-180", description: "Full body therapeutic massage" },
              { name: "Body Wraps", price: "$120-200", description: "Detoxifying and moisturizing treatments" },
              { name: "Waxing Services", price: "$30-150", description: "Professional hair removal services" }
            ],
          }
        ].map((category, index) => (
          <div key={index} className="service-category-card">
            <div className="service-category-title">{category.category}</div>
            <div className="service-list">
              {category.services.map((service, i) => (
                <div key={i} className="service-item">
                  <div className="service-header">
                    <h3>{service.name}</h3>
                    <span className="service-price">{service.price}</span>
                  </div>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="book-cta">
        <button onClick={() => window.location.href = '/contact'}>
          Book Your Appointment Today
        </button>
      </div>
    </section>
  </div>
);

export default ServicesPage;
