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
                No mobile app installation, no address book uploads, and zero tracking of your personal phone records.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="tcc-contact-card">
              <div className="tcc-contact-icon">📡</div>
              <h5>Standards-Driven</h5>
              <p className="tcc-card-text">
                Built upon the official Department of Telecommunications (DoT) National Numbering Plan and public telecom registry tables.
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

        <h2>How TrueCallCheck Works</h2>
        <p>
          When you enter an Indian 10-digit telephone number into TrueCallCheck:
        </p>
        <ol>
          <li><strong>Prefix Extraction:</strong> The 4-digit or 5-digit operator allocation prefix is parsed according to DoT allocation bands.</li>
          <li><strong>Circle & Licensee Resolution:</strong> The platform cross-references our telecom database to identify the registered licensee (e.g. Bharti Airtel, Reliance Jio, Vodafone Idea, or BSNL) and the geographic Licensed Service Area (LSA/Circle).</li>
          <li><strong>Public Name Cross-Reference:</strong> Where public records or open directory entries exist, associated identification names are presented alongside security analysis.</li>
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
