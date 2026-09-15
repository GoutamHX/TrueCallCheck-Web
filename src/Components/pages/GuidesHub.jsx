import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import { TELECOM_GUIDES_DATA } from '../../data';

const GuidesHub = () => {
  return (
    <PageLayout
      title="Telecom & Security Guides"
      subtitle="Comprehensive research, architecture insights, and defense guides against Indian telecommunication fraud and robocall syndicates."
      category="Knowledge Base"
      breadcrumbs={[
        { label: 'Resources', href: '#' },
        { label: 'Telecom Guides', active: true }
      ]}
    >
      <div className="tcc-article-body">
        <p>
          Welcome to the TrueCallCheck Telecom Knowledge Base. Here you will find in-depth educational articles covering Indian cellular signaling, the Department of Telecommunications (DoT) National Numbering Plan, TRAI DND regulations, and defense strategies against financial scams.
        </p>

        <div className="tcc-cards-grid">
          {TELECOM_GUIDES_DATA.map((guide) => (
            <Link
              key={guide.id}
              to={`/guides/${guide.slug}`}
              className="tcc-guide-card"
            >
              <div>
                <div className="tcc-card-badge">{guide.category}</div>
                <h3 className="tcc-card-title">{guide.title}</h3>
                <p className="tcc-card-desc">{guide.summary}</p>
              </div>
              <div className="tcc-card-footer">
                <span>⏱️ {guide.readTime}</span>
                <span className="text-primary fw-semibold">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="tcc-callout tcc-callout-info mt-5">
          <h4 className="tcc-callout-title">Looking to verify a specific number right now?</h4>
          <p className="tcc-callout-desc mb-3">
            Use our real-time telephone prefix parser to look up licensee, circle, and caller intelligence.
          </p>
          <div>
            <Link to="/" className="tcc-btn-primary">
              Go to Number Lookup Tool →
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GuidesHub;
