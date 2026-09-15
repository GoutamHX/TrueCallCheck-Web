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

        <h2>2. Nature of Service & Educational Purpose</h2>
        <p>
          TrueCallCheck is an informational utility designed to help Indian mobile and landline subscribers decode telecom series, identify licensed telecom service providers (such as Airtel, Jio, Vi, BSNL), recognize geographic operating circles, and cross-reference publicly indexed caller names.
        </p>
        <div className="tcc-callout tcc-callout-warning">
          <strong>Important Disclaimer:</strong> TrueCallCheck is an independent educational and verification platform. It is not affiliated with, endorsed by, or connected to Truecaller AB, the Department of Telecommunications (DoT), or any mobile network operator.
        </div>

        <h2>3. Acceptable Use Policy</h2>
        <p>When using TrueCallCheck, you agree that you will not:</p>
        <ul>
          <li>Use automated scripts, bots, scrapers, or crawlers to flood the search endpoint or perform bulk queries.</li>
          <li>Use the platform for any illegal purpose, including stalking, harassment, doxxing, or malicious telemarketing.</li>
          <li>Circumvent, disable, or tamper with security or rate-limiting measures implemented on the server.</li>
          <li>Attempt to decompile, reverse-engineer, or disassemble any part of the service infrastructure.</li>
        </ul>

        <h2>4. Data Accuracy & Limitation of Liability</h2>
        <p>
          While we strive for high accuracy by indexing standardized DoT National Numbering Plans (NNP) and public telecom registry tables, caller identification records are dynamic. Number series get reallocated through Mobile Number Portability (MNP), and caller names may change over time.
        </p>
        <p>
          Consequently, TrueCallCheck provides all information on an <strong>"as is" and "as available"</strong> basis without warranties of any kind. Under no circumstances shall the operators or creators of TrueCallCheck be liable for any direct, indirect, incidental, or consequential damages resulting from reliance on any information retrieved on this site.
        </p>

        <h2>5. Intellectual Property</h2>
        <p>
          All proprietary source code, graphic designs, custom layouts, and original written telecom documentation on TrueCallCheck are protected under applicable copyright and intellectual property laws. Third-party trademarks and brand logos (such as telecom operator names) are the property of their respective owners.
        </p>

        <h2>6. Modifications to the Service</h2>
        <p>
          We reserve the right to modify, suspend, or discontinue any feature or part of TrueCallCheck at any time without prior notice. Continued use of the platform following any revisions constitutes your acceptance of the updated terms.
        </p>

        <h2>7. Inquiries & Legal Notices</h2>
        <p>
          If you have questions regarding these terms, please contact:
        </p>
        <div className="tcc-callout">
          <p><strong>Email:</strong> <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a></p>
          <p><strong>Telegram:</strong> <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a></p>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsOfService;
