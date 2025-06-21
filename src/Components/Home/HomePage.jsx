import './HomePage.css';
import { Sparkles, Scissors, Star, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="icon-wrapper">
            <div className="icon-bubble">
              <Sparkles className="icon-white" />
            </div>
          </div>

          <h1 className="hero-title">
            Discover Your
            <br />
            <span className="inner-glow">
              Inner Glow
              <div className="glow-effect"></div>
            </span>
          </h1>

          <p className="hero-subtitle">
            Where beauty meets artistry. Transform yourself at our premium salon experience.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate('/services')} className="btn-primary">
              <span>Explore Services</span>
              <Scissors className="btn-icon" />
            </button>
            <button onClick={() => navigate('/contact')} className="btn-outline">
              Book Appointment
            </button>
          </div>
        </div>

        {/* Floating Bubbles */}
        <div className="float-bubble pink top-left" />
        <div className="float-bubble purple top-right" />
        <div className="float-bubble indigo bottom-left" />
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-header">
          <h2>Why Choose Luxe Beauty?</h2>
          <p>Experience the difference with our premium services and expert stylists</p>
        </div>

        <div className="features-grid">
          {[
            {
              icon: <Star className="feature-icon" />,
              title: 'Expert Stylists',
              description: 'Our certified professionals bring years of experience and passion to every service.',
            },
            {
              icon: <Heart className="feature-icon" />,
              title: 'Premium Products',
              description: 'We use only the finest, organic, and cruelty-free products for your beauty treatments.',
            },
            {
              icon: <Sparkles className="feature-icon" />,
              title: 'Luxurious Experience',
              description: 'Relax in our serene environment designed for your comfort and rejuvenation.',
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-wrap">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
