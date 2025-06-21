import './contact.css';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage = () => (
  <div className="contact-page">
    <section className="contact-hero">
      <div className="container text-center">
        <h1 className="contact-title">Get In Touch</h1>
        <p className="contact-subtitle">
          Ready to transform your look? Contact us to schedule your appointment or ask any questions
        </p>
      </div>
    </section>

    <section className="contact-content">
      <div className="container contact-grid">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <div className="form-grid">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Your first name" />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Your last name" />
            </div>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="your@email.com" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="" />
          </div>

          <div className="form-group">
            <label>Service Interest</label>
            <select>
              <option>Select a service</option>
              <option>Hair Services</option>
              <option>Facial Treatments</option>
              <option>Nail Services</option>
              <option>Body Treatments</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell us about your beauty goals..." />
          </div>

          <button className="submit-button" onClick={() => alert('Thank you for your message!')}>
            Send Message
          </button>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-section">
            <h2>Visit Our Salon</h2>
            <div className="info-item">
            </div>

            <div className="info-item">
              <div className="info-icon"><Phone /></div>
              <div>
                <h3>Phone</h3>
                <p>(555) 123-LUXE</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><Mail /></div>
              <div>
                <h3>Email</h3>
                <p>hello@luxebeauty.com</p>
              </div>
            </div>
          </div>

          <div className="info-section">
            <h3>Hours</h3>
            <ul className="hours-list">
              <li><span>Monday - Thursday:</span> 9:00 AM - 8:00 PM</li>
              <li><span>Friday - Saturday:</span> 9:00 AM - 9:00 PM</li>
              <li><span>Sunday:</span> 10:00 AM - 6:00 PM</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <button key={index}><Icon /></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;
