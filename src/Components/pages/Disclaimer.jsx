import React from 'react';
import PageLayout from './PageLayout';

const Disclaimer = () => {
  return (
    <PageLayout
      title="Legal Disclaimer"
      subtitle="Important notices regarding data sources, trademarks, and informational limitations."
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
          The content, telephone series analyses, circle mappings, and caller lookup tools made available on TrueCallCheck (<a href="https://truecallcheck.tech">https://truecallcheck.tech</a>) are presented solely for educational, investigative, and non-commercial informational purposes.
        </p>

        <h2>2. Dynamic Telecom Numbering & Portability (MNP)</h2>
        <p>
          In India, Mobile Number Portability (MNP) allows subscribers to retain their mobile phone numbers when switching between service providers (e.g., from Airtel to Jio or Vi to BSNL) or across telecom circles.
        </p>
        <p>
          While TrueCallCheck identifies the original allocation circle and series licensee via Department of Telecommunications (DoT) National Numbering Plan (NNP) documentation, ported numbers may actively operate on a different carrier than the original allocation block. We do not guarantee real-time signaling synchronization with private Home Location Registers (HLRs).
        </p>

        <h2>3. Trademarks & Brand Ownership</h2>
        <p>
          All registered trademarks, service marks, brand names, and company logos referenced on this site (including but not limited to Truecaller, Bharti Airtel, Reliance Jio Infocomm, Vodafone Idea, BSNL, and MTNL) are the exclusive property of their respective trademark holders. Reference to any specific commercial product, process, or service by trade name does not constitute an endorsement, recommendation, or affiliation by TrueCallCheck.
        </p>

        <h2>4. No Legal or Professional Advice</h2>
        <p>
          Information provided on TrueCallCheck does not constitute legal, telecommunication regulatory, or forensic evidence. Users should independently verify any phone number information through official regulatory or law enforcement channels before taking action based upon search results.
        </p>

        <h2>5. Inquiries</h2>
        <p>
          If you have questions regarding this disclaimer, please contact us at <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a>.
        </p>
      </div>
    </PageLayout>
  );
};

export default Disclaimer;
