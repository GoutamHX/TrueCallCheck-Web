import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageLayout from './PageLayout';
import { TELECOM_GUIDES_DATA } from '../../data';

const GuideDetail = () => {
  const { slug } = useParams();

  const guide = TELECOM_GUIDES_DATA.find((g) => g.slug === slug);

  useEffect(() => {
    if (guide) {
      document.title = `${guide.metaTitle || guide.title} | TrueCallCheck`;
    }
  }, [guide]);

  if (!guide) {
    return (
      <PageLayout
        title="Guide Not Found"
        subtitle="The requested telecom research guide could not be located."
        category="404"
        breadcrumbs={[
          { label: 'Guides', href: '/guides' },
          { label: 'Not Found', active: true }
        ]}
      >
        <div className="tcc-article-body text-center py-5">
          <h3>Article Not Found</h3>
          <p className="tcc-card-text">
            The article you are trying to view does not exist or may have been relocated.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Link to="/guides" className="tcc-btn-primary">
              Browse All Telecom Guides
            </Link>
            <Link to="/" className="tcc-btn-secondary">
              Go to Lookup Tool
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  // Format read time without duplicate "read"
  const cleanReadTime = guide.readTime.replace(/read/gi, '').trim();

  // Find other guides for related recommendations
  const otherGuides = TELECOM_GUIDES_DATA.filter((g) => g.id !== guide.id).slice(0, 2);

  return (
    <PageLayout
      title={guide.title}
      subtitle={guide.summary}
      category={guide.category}
      breadcrumbs={[
        { label: 'Guides', href: '/guides' },
        { label: guide.title, active: true }
      ]}
    >
      <div className="tcc-article-body">
        {/* High-Contrast Metadata Pill Bar */}
        <div className="tcc-guide-meta-bar">
          <span className="tcc-meta-pill">📅 Published: {guide.publishedDate}</span>
          <span className="tcc-meta-pill">⏱️ {cleanReadTime} read</span>
          <span className="tcc-meta-pill tcc-meta-pill-verified">🛡️ Verified Telecom Intelligence</span>
        </div>

        {guide.sections.map((section, idx) => (
          <section key={idx} className="mb-4">
            <h2>{section.heading}</h2>

            {section.paragraphs &&
              section.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}

            {section.callout && (
              <div
                className={`tcc-callout ${
                  section.callout.type === 'warning'
                    ? 'tcc-callout-warning'
                    : section.callout.type === 'success'
                    ? 'tcc-callout-success'
                    : 'tcc-callout-info'
                }`}
              >
                <h4 className="tcc-callout-title">{section.callout.title}</h4>
                <p className="tcc-callout-desc mb-0">{section.callout.text}</p>
              </div>
            )}

            {section.list && (
              <ul>
                {section.list.map((item, lIdx) => (
                  <li key={lIdx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* High-Contrast Editorial / Author Attestation Box */}
        <div className="tcc-callout tcc-callout-info my-5">
          <h4 className="tcc-callout-title">Editorial Review & Author Attestation</h4>
          <p className="tcc-callout-desc">
            Authored by the TrueCallCheck Telecom Research Desk and reviewed by <strong>Goutam Septa</strong>. All information is cross-referenced with public DoT National Numbering Plans, TRAI Telecom Orders, and GSMA signaling specifications.
          </p>
          <p className="tcc-callout-sub">
            Noticed outdated information? Let us know at <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a>.
          </p>
        </div>

        {/* Related Articles */}
        <div className="mt-5 pt-4 border-top">
          <h3>Related Telecom Guides</h3>
          <div className="row g-3 mt-2">
            {otherGuides.map((rel) => (
              <div key={rel.id} className="col-md-6">
                <Link to={`/guides/${rel.slug}`} className="tcc-guide-card h-100">
                  <div className="tcc-card-badge">{rel.category}</div>
                  <div className="fw-bold mb-2 text-light">{rel.title}</div>
                  <p className="tcc-card-desc mb-3">{rel.summary.slice(0, 110)}...</p>
                  <div className="tcc-card-footer">
                    <span>⏱️ {rel.readTime}</span>
                    <span className="text-primary fw-semibold">Read Now →</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mt-5 pt-4 border-top">
          <Link to="/guides" className="tcc-btn-secondary">
            ← Back to All Guides
          </Link>
          <Link to="/" className="tcc-btn-primary">
            Verify a Number Now →
          </Link>
        </div>
      </div>
    </PageLayout>
  );
};

export default GuideDetail;
