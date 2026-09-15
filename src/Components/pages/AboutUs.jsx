import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const AboutUs = () => {
  return (
    <PageLayout
      title="About TrueCallCheck"
      subtitle="The open, privacy-conscious telecom intelligence lookup and phone series analysis platform for India."
      category="About"
      breadcrumbs={[
        { label: 'Company', href: '#' },
        { label: 'About Us', active: true }
      ]}
    >
      <div className="tcc-article-body">
        <h2>Our Mission</h2>
        <p>
          In an era where unsolicited telemarketing robocalls, OTP phishing syndicates, and impersonation scams plague hundreds of millions of smartphone users, the average citizen is left without transparent tools to verify incoming phone numbers.
        </p>
        <p>
          Most existing caller identification services operate as "contact harvesters"—forcing users to upload their personal address books to a private corporate database before granting access to basic lookup features.
        </p>
        <p>
          <strong>TrueCallCheck</strong> was created to champion an alternative: <strong>open, zero-contact-harvesting telecom intelligence</strong>. We empower users to look up mobile series, identify telecom circles, detect licensed service providers, and understand signaling data without surrendering their address books.
        </p>

        <h2>Our Data & Privacy Guarantees</h2>
        <div className="row g-4 my-4">
          <div className="col-md-4">
            <div className="tcc-contact-card">
              <div className="tcc-contact-icon">🚫</div>
              <h5>We Never Sell Your Data</h5>
              <p className="tcc-card-text">
                Zero data sale policy. We never sell, rent, broker, or monetize your search queries or personal details with anyone.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tcc-contact-card">
              <div className="tcc-contact-icon">🛡️</div>
              <h5>Zero Contact Harvesting</h5>
              <p className="tcc-card-text">
                No phonebook uploading, no app installation required, and zero tracking of your private contact records.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tcc-contact-card">
              <div className="tcc-contact-icon">📡</div>
              <h5>Smart Filtering Gateway</h5>
              <p className="tcc-card-text">
                Custom backend middleware that queries, filters, and standardizes pre-existing third-party directory records.
              </p>
            </div>
          </div>
        </div>

        <h2>Who We Are</h2>
        <p>
          TrueCallCheck is engineered and maintained by <strong>Goutam Septa</strong>, a full-stack developer and open-source enthusiast focused on privacy-centric web applications and telecommunication intelligence.
        </p>
        <p>
          You can learn more about my ongoing open-source projects, engineering notes, and public software tools at <a href="https://imgoutam.dev" target="_blank" rel="noopener noreferrer">imgoutam.dev</a>.
        </p>

        <h2>Where Does the Data Come From? (Data Sourcing Reality)</h2>
        <p>
          We believe in 100% transparency about how our system operates:
        </p>
        <ul>
          <li>
            <strong>Pre-Existing Public & Leaked Records:</strong> TrueCallCheck does not steal or extract private contact books from your phone. Any names or alternative numbers that appear in search results originate from <strong>pre-existing third-party directory APIs, historical publicly circulated directory leaks, and open telecom circle allocation registries</strong> that already exist across the web.
          </li>
          <li>
            <strong>Custom API Middleware:</strong> When you enter a phone number, our custom backend queries third-party directory APIs and acts as a smart filter—removing spammy duplicates, stripping out sensitive or private fields, and formatting the carrier details.
          </li>
          <li>
            <strong>Zero Persistent Query Storage:</strong> Cleaned results are delivered directly to your screen in real time. We do not maintain any permanent database of your search queries or lookup history.
          </li>
          <li>
            <strong>Free Unlisting:</strong> If your number is exposed in third-party directories and visible on our search tool, we offer a 100% free unlisting service to suppress your records from our search engine upon request.
          </li>
        </ul>

        <div className="tcc-callout tcc-callout-info">
          <h4 className="tcc-callout-title">Interested in learning more about Indian telecom infrastructure?</h4>
          <p className="tcc-callout-desc">
            Check out our educational research library at our Telecom Educational Guides section.
          </p>
          <div className="mt-3">
            <Link to="/guides" className="tcc-btn-primary">
              Browse Telecom Guides →
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
