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

        <h2>Core Principles</h2>
        <div className="row g-4 my-4">
          <div className="col-md-4">
            <div className="tcc-contact-card">
              <div className="tcc-contact-icon">🛡️</div>
              <h5>Privacy First</h5>
              <p className="tcc-card-text">
                No phonebook uploading, no app installation required, and we do not sell or monetize your search queries.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tcc-contact-card">
              <div className="tcc-contact-icon">📡</div>
              <h5>Smart Filtering Middleware</h5>
              <p className="tcc-card-text">
                Custom backend API gateway that queries, filters, and standardizes third-party directory data in real time.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tcc-contact-card">
              <div className="tcc-contact-icon">⚡</div>
              <h5>Fast & Free</h5>
              <p className="tcc-card-text">
                Lightweight Single Page Application (SPA) designed to load instantly on any mobile or desktop web browser.
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

        <h2>How TrueCallCheck Works & Data Sourcing</h2>
        <p>
          To deliver instant caller information while safeguarding user privacy, TrueCallCheck operates through a dedicated backend API gateway:
        </p>
        <ol>
          <li>
            <strong>Query Submission:</strong> When you enter a 10-digit Indian phone number, the request is sent securely to our custom backend API.
          </li>
          <li>
            <strong>Third-Party API Aggregation:</strong> Our backend queries third-party telecom directory and caller identification APIs. These providers reference public numbering plans and pre-existing directory records already circulating on the internet.
          </li>
          <li>
            <strong>Filtering & Sanitization:</strong> Our custom API parses the third-party response—removing duplicates, standardizing carrier and circle allocations, and stripping out unnecessary sensitive fields.
          </li>
          <li>
            <strong>Ephemeral Real-Time Display:</strong> Cleaned data is returned to your browser. Queries are processed in-memory and are not stored in any permanent database or shared with advertisers.
          </li>
        </ol>

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
