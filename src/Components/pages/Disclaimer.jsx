import React from 'react';
import PageLayout from './PageLayout';

const Disclaimer = () => {
  return (
    <PageLayout
      title="Legal Disclaimer"
      subtitle="Important notices regarding third-party data sources, informational limitations, and trademarks."
      category="Compliance"
      breadcrumbs={[
        { label: 'Legal', href: '#' },
        { label: 'Disclaimer', active: true }
      ]}
    >
      <div className="tcc-article-body">
        <div className="tcc-callout tcc-callout-warning">
          <strong>Non-Affiliation Notice:</strong> TrueCallCheck is an independent educational and telecom verification platform. TrueCallCheck is <strong>NOT</strong> affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with Truecaller AB, the Department of Telecommunications (DoT), the Telecom Regulatory Authority of India (TRAI), or any licensed telecom service provider.
        </div>

        <h2>1. Informational & Educational Use Only</h2>
        <p>
          The telephone series analyses, circle mappings, and caller lookup tools made available on TrueCallCheck (<a href="https://truecallcheck.tech">https://truecallcheck.tech</a>) are presented solely for educational, investigative, and non-commercial informational purposes. We do not sell or monetize user search queries or personal data.
        </p>

        <h2>2. Third-Party Data Sources & Limitations</h2>
        <p>
          Information displayed on TrueCallCheck—such as caller names, carrier details, and alternative phone numbers—is retrieved dynamically through <strong>third-party directory APIs and public indexes</strong>.
        </p>
        <p>
          TrueCallCheck operates as an aggregator and filtering interface. Because underlying caller records originate from external third-party API providers and historical public directories, TrueCallCheck does not independently generate, own, or verify individual subscriber records. All details are provided <strong>"as is" and "as available"</strong> without warranty of accuracy, completeness, or real-time carrier synchronization.
        </p>

        <h2>3. Dynamic Telecom Numbering & Portability (MNP)</h2>
        <p>
          In India, Mobile Number Portability (MNP) allows subscribers to retain their mobile phone numbers when switching between service providers (e.g., from Airtel to Jio or Vi to BSNL). While third-party APIs and telecom series tables identify original carrier allocation blocks, ported numbers may actively operate on a different network. We do not provide real-time private carrier signaling synchronization.
        </p>

        <h2>4. Free Delisting Request</h2>
        <p>
          If your personal telephone number or associated name appears in our search interface from third-party sources and you want it removed, we respect your privacy and will gladly delist it from our search interface for free.
        </p>
        <p>
          To request delisting, email <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a> or contact our developer on Telegram at <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a>. We manually process removal requests within 24 to 48 hours.
        </p>

        <h2>5. Trademarks & Brand Ownership</h2>
        <p>
          All registered trademarks, service marks, brand names, and company logos referenced on this site (including but not limited to Truecaller, Bharti Airtel, Reliance Jio Infocomm, Vodafone Idea, BSNL, and MTNL) are the exclusive property of their respective trademark holders. Reference to any commercial product, process, or service by trade name does not constitute an endorsement, recommendation, or affiliation by TrueCallCheck.
        </p>

        <h2>6. Inquiries</h2>
        <p>
          If you have questions regarding this disclaimer, please contact us at <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a>.
        </p>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
