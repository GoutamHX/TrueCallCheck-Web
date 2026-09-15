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
          <strong>Summary:</strong> TrueCallCheck is a privacy-first telecom intelligence search engine. We do not require account registration, we do not upload your phone contacts, and we do not sell or monetize personal lookup logs.
        </div>

        <p>
          <em>Last updated: September 15, 2026</em>
        </p>

        <h2>1. Overview & Commitment to Privacy</h2>
        <p>
          Welcome to TrueCallCheck (accessible via <a href="https://truecallcheck.tech">https://truecallcheck.tech</a>). We recognize the sensitivity of telecommunication data and personal contact information. Unlike traditional caller identification mobile applications that harvest entire phone address books from users, TrueCallCheck does <strong>not</strong> access, sync, or upload personal address books from your device.
        </p>

        <h2>2. Information We Collect and How We Use It</h2>
        <p>
          We collect minimal information strictly required to maintain site operations, combat abusive scraping, and deliver relevant telecom analytics:
        </p>
        <ul>
          <li>
            <strong>Lookup Queries:</strong> When you enter a telephone number or name in our search interface, the query is processed ephemerally against public telecom circle databases, MSC/HLR numbering plans, and open directory interfaces. Queries are not tied to any personal identifier or stored in persistent user dossiers.
          </li>
          <li>
            <strong>Standard Web Server Logs:</strong> Like standard web hosts, our cloud infrastructure (Vercel) automatically logs network connection metadata such as IP address, browser user-agent, referring URL, and timestamp for security filtering, DDoS prevention, and rate-limiting.
          </li>
          <li>
            <strong>Local Browser Storage:</strong> We use your browser's <code>localStorage</code> solely to remember your UI preferences (such as Dark/Light theme mode). This data never leaves your device.
          </li>
        </ul>

        <h2>3. Google AdSense & Third-Party Advertising</h2>
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

        <h2>4. Cookies & Web Beacons</h2>
        <p>
          TrueCallCheck does not deploy proprietary user-tracking cookies. However, third-party services—including Google AdSense, analytics providers, and content delivery networks (CDNs)—may set cookies to measure advertising effectiveness, authenticate traffic integrity, and analyze aggregated performance. You can manage or disable cookie permissions at any time through your individual web browser settings.
        </p>

        <h2>5. Compliance with DPDP Act 2023 (India) & GDPR (EU)</h2>
        <p>
          We operate under strict compliance with India's <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> and the European Union's <strong>General Data Protection Regulation (GDPR)</strong>:
        </p>
        <ul>
          <li><strong>Right to Rectification and Erasure:</strong> If public directory information associated with your business or enterprise number is inaccurate or should be unlisted, contact us to initiate a removal request.</li>
          <li><strong>Data Minimization:</strong> We do not store, distribute, or broker bulk consumer phone directories or consumer address book dumps.</li>
          <li><strong>Zero Sensitive Personal Data:</strong> We never handle passwords, payment card details, biometric data, or government identity tokens.</li>
        </ul>

        <h2>6. Data Security</h2>
        <p>
          All network communication between your browser and TrueCallCheck is encrypted using modern TLS (Transport Layer Security) 1.3 protocols. We do not maintain any unencrypted backend databases containing search history.
        </p>

        <h2>7. Contact Information & Data Protection Queries</h2>
        <p>
          For privacy inquiries, unlisting requests, or questions regarding our AdSense compliance, please contact our Data Protection Officer:
        </p>
        <div className="tcc-callout">
          <p><strong>Primary Contact:</strong> <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a></p>
          <p><strong>Telegram Support:</strong> <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a></p>
          <p><strong>Website:</strong> <a href="https://truecallcheck.tech">https://truecallcheck.tech</a></p>
        </div>
      </div>
    </PageLayout>
  );
};

export default PrivacyPolicy;
