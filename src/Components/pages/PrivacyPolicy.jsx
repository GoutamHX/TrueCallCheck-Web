import React from 'react';
import PageLayout from './PageLayout';

const PrivacyPolicy = () => {
  return (
    <PageLayout
      title="Privacy Policy"
      subtitle="How TrueCallCheck respects your privacy, handles telephone queries, and complies with Google AdSense, GDPR, and DPDP Act 2023 requirements."
      category="Compliance"
      breadcrumbs={[
        { label: 'Legal', href: '#' },
        { label: 'Privacy Policy', active: true }
      ]}
    >
      <div className="tcc-article-body">
        <div className="tcc-callout tcc-callout-info">
          <strong>Summary:</strong> TrueCallCheck is a privacy-conscious telecom intelligence search utility. We do not require account registration, do not access your device's address book, and do not sell or trade search queries.
        </div>

        <p>
          <em>Last updated: September 15, 2026</em>
        </p>

        <h2>1. Overview & Data Handling Principles</h2>
        <p>
          Welcome to TrueCallCheck (accessible via <a href="https://truecallcheck.tech">https://truecallcheck.tech</a>). We recognize the importance of personal data protection and telecommunications privacy.
        </p>
        <p>
          Unlike traditional caller identification applications that require syncing or uploading personal address books, TrueCallCheck does not access your device's contacts. We do not sell, rent, or commercialize search queries or user information to third-party marketing companies.
        </p>

        <h2>2. Data Sourcing & Third-Party Directory APIs</h2>
        <p>
          To display caller names, telecom operator allocations, and geographic circles, TrueCallCheck utilizes <strong>third-party directory and telecom lookup APIs</strong>.
        </p>
        <p>
          Our custom backend acts as an intermediary filtering middleware. When you search for a number:
        </p>
        <ul>
          <li>The request is queried against third-party directory APIs referencing pre-existing public numbering plans, telecom circle registries, and publicly circulated directory databases.</li>
          <li>Our backend filters and sanitizes the response—removing duplicate records and formatting the carrier details.</li>
          <li>Queries and results are processed in-memory and are not stored in any permanent database.</li>
        </ul>

        <h2>3. Information We Collect and How We Use It</h2>
        <p>
          We collect minimal information strictly required to maintain site operations, combat abusive scraping, and deliver relevant telecom analytics:
        </p>
        <ul>
          <li>
            <strong>Lookup Queries:</strong> Number searches are processed ephemerally in real time to fetch third-party directory information. We do not maintain historical logs of your search queries.
          </li>
          <li>
            <strong>Standard Web Server Logs:</strong> Standard cloud infrastructure (Vercel) automatically logs network metadata such as IP address, browser user-agent, referring URL, and timestamp for security defense, rate-limiting, and DDoS protection.
          </li>
          <li>
            <strong>Local Browser Storage:</strong> We use your browser's <code>localStorage</code> solely to remember your UI preferences (such as Dark/Light theme mode).
          </li>
        </ul>

        <h2>4. Google AdSense & Third-Party Advertising</h2>
        <p>
          We use <strong>Google AdSense</strong> (a service provided by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) to display advertisements on our website. This monetization enables us to keep this directory lookup service free and publicly accessible.
        </p>
        <ul>
          <li>
            Google and its certified third-party advertising partners use cookies (such as the DoubleClick DART cookie) to serve advertisements based on your prior visits to TrueCallCheck or other websites across the Internet.
          </li>
          <li>
            Google's use of advertising cookies enables it and its partners to serve ads based on your visit to this site and/or other sites on the Internet.
          </li>
          <li>
            <strong>Opt-Out Options:</strong> You may opt out of personalized advertising by visiting Google's <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Ads Settings</a>. Alternatively, you can opt out of third-party vendor cookies for personalized advertising by visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">aboutads.info</a> or the Network Advertising Initiative at <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">networkadvertising.org</a>.
          </li>
          <li>
            AdSense bots and automated scrapers (including <code>Mediapartners-Google</code> and <code>AdsBot-Google</code>) are explicitly permitted access to review our content, as outlined in our <code>robots.txt</code> and authorized in our root <code>ads.txt</code>.
          </li>
        </ul>

        <h2>5. Cookies & Web Beacons</h2>
        <p>
          TrueCallCheck does not deploy proprietary user-tracking cookies. However, third-party services—including Google AdSense, analytics providers, and content delivery networks (CDNs)—may set cookies to measure advertising effectiveness, authenticate traffic integrity, and analyze aggregated performance. You can manage or disable cookie permissions at any time through your individual web browser settings.
        </p>

        <h2>6. Compliance with DPDP Act 2023 (India) & Free Delisting Rights</h2>
        <p>
          We operate in accordance with India's <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and the European Union's <strong>General Data Protection Regulation (GDPR)</strong>:
        </p>
        <ul>
          <li><strong>Right to Rectification and Erasure:</strong> If public directory information associated with your number appears on our search interface and you wish to have it delisted, you can request free removal.</li>
          <li><strong>Data Minimization:</strong> We do not store, distribute, or broker bulk consumer phone directories or consumer address book dumps.</li>
          <li><strong>Zero Sensitive Personal Data:</strong> We never handle passwords, payment card details, biometric data, or government identity tokens.</li>
        </ul>

        <div className="tcc-callout tcc-callout-info">
          <h4 className="tcc-callout-title">How to Request Number Delisting:</h4>
          <p className="tcc-callout-desc">
            To unlist your phone number from our search interface, email <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a> with the subject line <code>[Unlist Request] +91 XXXXXXXXXX</code> or reach out on Telegram at <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a>. We manually process requests within <strong>24 to 48 business hours</strong>.
          </p>
        </div>

        <h2>7. Contact Information</h2>
        <p>
          For privacy inquiries, unlisting requests, or questions regarding our data policies, please contact our Data Protection Officer:
        </p>
        <div className="tcc-callout">
          <p><strong>Primary Contact:</strong> <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a></p>
          <p><strong>Telegram Support:</strong> <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a></p>
          <p><strong>Official Channel:</strong> <a href="https://t.me/TheAdvanceBots" target="_blank" rel="noopener noreferrer">@TheAdvanceBots</a></p>
          <p><strong>Website:</strong> <a href="https://truecallcheck.tech">https://truecallcheck.tech</a></p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
