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
          <strong>Summary:</strong> TrueCallCheck operates on a strict zero-tracking, zero-data-sale policy. We never sell, rent, broker, or trade your personal information or search queries to anyone. All caller identity records displayed on this platform originate from pre-existing third-party directories and publicly circulated repositories—never from your personal device.
        </div>

        <p>
          <em>Last updated: September 15, 2026</em>
        </p>

        <h2>1. Strict "Zero Data Sale" & "Zero Harvesting" Guarantee</h2>
        <p>
          We want to make our privacy stance 100% transparent:
        </p>
        <ul>
          <li><strong>We Never Sell Your Data:</strong> TrueCallCheck does not sell, rent, trade, monetize, or broker user search queries, IP addresses, or personal contact information to any third-party marketing companies, data brokers, or advertisers.</li>
          <li><strong>Zero Contact Harvesting:</strong> We do not require any app installation or permission to access your private address book. We do not harvest, upload, or sync your phone contacts.</li>
        </ul>

        <h2>2. Origin of Search Results & Pre-Existing Public Data</h2>
        <p>
          A common question is: <em>"Where does the name or information displayed in search results come from?"</em>
        </p>
        <p>
          TrueCallCheck does <strong>not</strong> generate, collect, or private-investigate individual personal data. The subscriber records, caller names, and alternative numbers returned in search queries are fetched via third-party telecom directory APIs that aggregate:
        </p>
        <ul>
          <li>Pre-existing, publicly circulated data repositories and historical public directory leaks already accessible across the web.</li>
          <li>Publicly indexed business directories and telecom circle numbering plan (NNP) allocations.</li>
          <li>Open crowd-verified telecom identifiers.</li>
        </ul>
        <p>
          TrueCallCheck merely acts as a <strong>filtering search interface</strong> that queries these existing third-party databases, standardizes the output, and formats it so users can recognize unknown callers and verify their own digital exposure.
        </p>

        <h2>3. Information We Collect and How We Use It</h2>
        <p>
          We collect only the minimum technical metadata strictly required to operate the service and block malicious denial-of-service attempts:
        </p>
        <ul>
          <li>
            <strong>Lookup Queries:</strong> When you search a telephone number, our custom backend API forwards the request to third-party directory APIs, parses the response, and returns it to your browser in real time. Queries and results are processed ephemerally in-memory and are <strong>never stored, logged in persistent databases, or profiled</strong>.
          </li>
          <li>
            <strong>Technical Server Logs:</strong> Cloud hosting infrastructure (Vercel) automatically logs standard connection metadata (IP address, user-agent, timestamp) for security defense, rate-limiting, and DDoS mitigation.
          </li>
          <li>
            <strong>Local Preferences:</strong> We use your browser's <code>localStorage</code> solely to remember your Dark/Light theme toggle.
          </li>
        </ul>

        <h2>4. Google AdSense & Third-Party Advertising</h2>
        <p>
          We use <strong>Google AdSense</strong> (Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) to display advertisements on our website. This monetization enables us to keep this directory lookup service free and publicly accessible.
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
            AdSense bots and automated crawlers (including <code>Mediapartners-Google</code> and <code>AdsBot-Google</code>) are explicitly permitted access to review our content, as outlined in our <code>robots.txt</code> and authorized in our root <code>ads.txt</code>.
          </li>
        </ul>

        <h2>5. Cookies & Web Beacons</h2>
        <p>
          TrueCallCheck does not deploy proprietary user-tracking cookies. However, third-party services—including Google AdSense, analytics providers, and content delivery networks (CDNs)—may set cookies to measure advertising effectiveness, authenticate traffic integrity, and analyze aggregated performance. You can manage or disable cookie permissions at any time through your individual web browser settings.
        </p>

        <h2>6. Free Number Delisting / Removal Rights (DPDP Act 2023 & GDPR)</h2>
        <p>
          If your personal number or business details appear in our search interface from third-party directories and you wish to have it delisted, we provide a <strong>free, no-questions-asked unlisting procedure</strong>:
        </p>
        <div className="tcc-callout tcc-callout-info">
          <h4 className="tcc-callout-title">How to Request Removal:</h4>
          <p className="tcc-callout-desc">
            Send an email to <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a> with the subject line <code>[Unlist Request] +91 XXXXXXXXXX</code> or reach out on Telegram at <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a>. We manually review and suppress requested numbers from our search engine within <strong>24 to 48 business hours</strong>.
          </p>
        </div>

        <h2>7. Contact Information & Data Protection Officer</h2>
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
