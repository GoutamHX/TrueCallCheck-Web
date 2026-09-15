import React from 'react';
import PageLayout from './PageLayout';

const Disclaimer = () => {
  return (
    <PageLayout
      title="Legal Disclaimer"
      subtitle="Important notices regarding third-party data sources, pre-existing public information, and data protection."
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

        <h2>1. Zero Data Sale Policy</h2>
        <p>
          TrueCallCheck has a strict <strong>zero-data-sale policy</strong>. We do not sell, rent, broker, trade, or share user data, search histories, or personal records with any external marketing agencies, advertising networks, or third-party data buyers.
        </p>

        <h2>2. Origin of Search Results (Pre-Existing Public & Leaked Data)</h2>
        <p>
          Information displayed on TrueCallCheck—such as caller names, carrier details, and alternative phone numbers—is retrieved in real time through <strong>third-party directory APIs and publicly circulated indexes</strong>.
        </p>
        <div className="tcc-callout tcc-callout-info">
          <strong>Important Clarification:</strong> TrueCallCheck does not steal, extract, or harvest private address books from your device. Any information displayed in search results represents <strong>pre-existing data already leaked, exposed, or publicly circulated</strong> across external internet databases, historical directory breaches, and open telecom circle allocation registries.
        </div>
        <p>
          TrueCallCheck merely functions as an aggregator and smart filtering search engine to help citizens recognize suspicious calls, verify telecom series, and be aware of their own publicly exposed digital footprint.
        </p>

        <h2>3. Third-Party Data Accuracy & Limitations</h2>
        <p>
          Because underlying subscriber records originate from external third-party API providers and historical directory datasets, TrueCallCheck does not create, maintain, or verify the underlying accuracy of these records. TrueCallCheck cannot guarantee the complete accuracy, timeliness, or validity of any name, carrier, or circle details returned.
        </p>

        <h2>4. Dynamic Telecom Numbering & Portability (MNP)</h2>
        <p>
          In India, Mobile Number Portability (MNP) allows subscribers to retain their mobile phone numbers when switching between service providers (e.g., from Airtel to Jio or Vi to BSNL). While third-party APIs and telecom series tables identify original carrier allocation blocks, ported numbers may actively operate on a different network. We do not provide real-time private carrier signaling synchronization.
        </p>

        <h2>5. Free Unlisting & Data Removal Request</h2>
        <p>
          If your personal telephone number or associated name appears in our search interface from third-party sources and you want it removed, we respect your privacy and will gladly delist it from our search interface for free.
        </p>
        <p>
          To request delisting, email <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a> or contact our developer on Telegram at <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a>. We manually process removal requests within 24 to 48 hours.
        </p>

        <h2>6. Trademarks & Brand Ownership</h2>
        <p>
          All registered trademarks, service marks, brand names, and company logos referenced on this site (including but not limited to Truecaller, Bharti Airtel, Reliance Jio Infocomm, Vodafone Idea, BSNL, and MTNL) are the exclusive property of their respective trademark holders. Reference to any commercial product, process, or service by trade name does not constitute an endorsement, recommendation, or affiliation by TrueCallCheck.
        </p>

        <h2>7. Inquiries</h2>
        <p>
          If you have questions regarding this disclaimer, please contact us at <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a>.
        </p>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
