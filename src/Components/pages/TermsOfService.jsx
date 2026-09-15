import React from 'react';
import PageLayout from './PageLayout';

const TermsOfService = () => {
  return (
    <PageLayout
      title="Terms of Service"
      subtitle="Read the terms, acceptable use policies, and legal disclaimers governing the use of TrueCallCheck."
      category="Compliance"
      breadcrumbs={[
        { label: 'Legal', href: '#' },
        { label: 'Terms of Service', active: true }
      ]}
    >
      <div className="tcc-article-body">
        <p><em>Effective Date: September 15, 2026</em></p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using TrueCallCheck (<a href="https://truecallcheck.tech">https://truecallcheck.tech</a>), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using the service immediately.
        </p>

        <h2>2. Zero Data Sale Guarantee</h2>
        <p>
          TrueCallCheck guarantees that we do <strong>not</strong> sell, rent, monetize, broker, or share user search queries, phone lookups, or user metadata with any third-party marketing companies, ad networks, or data brokers.
        </p>

        <h2>3. Nature of Service & Pre-Existing Public Data</h2>
        <p>
          TrueCallCheck is an informational utility and search interface designed to help Indian mobile subscribers decode telecom series, identify licensed service providers (such as Airtel, Jio, Vi, BSNL), recognize geographic operating circles, and cross-reference caller details via <strong>third-party directory APIs and custom filtering middleware</strong>.
        </p>
        <div className="tcc-callout tcc-callout-warning">
          <strong>Pre-Existing Data Notice:</strong> TrueCallCheck does not harvest your personal address book. Any caller names or associated records displayed in search results originate from <strong>pre-existing third-party directory APIs, historical publicly circulated data repositories, and open telecom circle allocation registries</strong> already accessible across the web.
        </div>

        <h2>4. Acceptable Use Policy</h2>
        <p>When using TrueCallCheck, you agree that you will not:</p>
        <ul>
          <li>Use automated scripts, bots, scrapers, or crawlers to flood the search endpoint or perform bulk queries.</li>
          <li>Use the platform for any illegal purpose, including stalking, harassment, doxxing, or malicious telemarketing.</li>
          <li>Circumvent, disable, or tamper with security or rate-limiting measures implemented on the server.</li>
          <li>Attempt to decompile, reverse-engineer, or disassemble any part of the service infrastructure.</li>
        </ul>

        <h2>5. Third-Party Data Accuracy & Limitation of Liability</h2>
        <p>
          TrueCallCheck retrieves caller identification information dynamically from third-party API providers and standard National Numbering Plan (NNP) allocations. Because records are maintained by external third parties, numbers may be reallocated through Mobile Number Portability (MNP), and caller names may change over time.
        </p>
        <p>
          Consequently, TrueCallCheck provides all information on an <strong>"as is" and "as available"</strong> basis without warranties of any kind. TrueCallCheck does not warrant that information from third-party APIs is completely error-free or exhaustive. Under no circumstances shall the operators or creators of TrueCallCheck be liable for any direct, indirect, incidental, or consequential damages resulting from reliance on any information retrieved on this site.
        </p>

        <h2>6. Free Delisting Request</h2>
        <p>
          If your personal or business number appears in our search interface from third-party sources and you wish to have it delisted, you may request free removal by contacting <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a> or on Telegram at <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a>.
        </p>

        <h2>7. Intellectual Property</h2>
        <p>
          All proprietary source code, graphic designs, custom layouts, and original written telecom documentation on TrueCallCheck are protected under applicable copyright and intellectual property laws. Third-party trademarks and brand logos (such as telecom operator names) are the property of their respective owners.
        </p>

        <h2>8. Modifications to the Service</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any feature or part of TrueCallCheck at any time without prior notice. Continued use of the platform following any revisions constitutes your acceptance of the updated terms.
        </p>

        <h2>9. Inquiries & Legal Notices</h2>
        <p>
          If you have questions regarding these terms, please contact:
        </p>
        <div className="tcc-callout">
          <p><strong>Email:</strong> <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a></p>
          <p><strong>Telegram Support:</strong> <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a></p>
          <p><strong>Official Channel:</strong> <a href="https://t.me/TheAdvanceBots" target="_blank" rel="noopener noreferrer">@TheAdvanceBots</a></p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
