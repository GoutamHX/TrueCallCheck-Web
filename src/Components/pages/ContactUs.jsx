import React, { useState } from 'react';
import { FaEnvelope, FaTelegram, FaCheck, FaCopy } from 'react-icons/fa';
import PageLayout from './PageLayout';

const ContactUs = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@imgoutam.dev');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <PageLayout
      title="Contact TrueCallCheck"
      subtitle="Have questions, partnership inquiries, or need a number record corrected or unlisted? Reach out directly."
      category="Support"
      breadcrumbs={[
        { label: 'Company', href: '#' },
        { label: 'Contact Us', active: true }
      ]}
    >
      <div className="tcc-article-body">
        <h2>Get in Touch</h2>
        <p>
          We are committed to prompt support, transparency, and data integrity. Whether you are an everyday smartphone user with feedback or a network operator representative, we welcome your communication.
        </p>

        <div className="row g-4 my-4">
          {/* Email Card */}
          <div className="col-md-6">
            <div className="tcc-contact-card">
              <div>
                <div className="tcc-contact-icon">✉️</div>
                <h4>Direct Email</h4>
                <p className="tcc-card-text">
                  For compliance matters, legal notices, and directory lookup queries:
                </p>
                <div className="tcc-email-badge-container">
                  <span className="tcc-code-pill">hello@imgoutam.dev</span>
                  <button
                    type="button"
                    className={`tcc-btn-copy ${copied ? 'copied' : ''}`}
                    onClick={handleCopyEmail}
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <FaCheck /> Copied!
                      </>
                    ) : (
                      <>
                        <FaCopy /> Copy
                      </>
                    )}
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <a
                  href="mailto:hello@imgoutam.dev?subject=TrueCallCheck%20Inquiry"
                  className="tcc-btn-primary w-100"
                >
                  <FaEnvelope /> Send Email
                </a>
              </div>
            </div>
          </div>

          {/* Personal Support on Telegram */}
          <div className="col-md-6">
            <div className="tcc-contact-card">
              <div>
                <div className="tcc-contact-icon">💬</div>
                <h4>Telegram Support</h4>
                <p className="tcc-card-text">
                  For real-time 1-on-1 contact, bug reports, and direct assistance:
                </p>
                <div>
                  <span className="tcc-telegram-username">@MR_GOUTAM08</span>
                </div>
              </div>
              <div className="mt-2">
                <a
                  href="https://t.me/MR_GOUTAM08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tcc-btn-telegram w-100"
                >
                  <FaTelegram /> Chat with Developer
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Official Channel Note */}
        <div className="tcc-callout tcc-callout-info my-4">
          <p className="tcc-callout-desc mb-1">
            📢 <strong>Looking for project announcements & updates?</strong>
          </p>
          <p className="tcc-callout-sub">
            Join our official updates channel at <a href="https://t.me/TheAdvanceBots" target="_blank" rel="noopener noreferrer">@TheAdvanceBots</a>.
          </p>
        </div>

        <h2>Number Unlisting & Correction Policy</h2>
        <p>
          We strictly respect individual privacy rights under India's Digital Personal Data Protection (DPDP) Act 2023. If your personal mobile number or registered business line appears in any directory index on our site and you wish to have it delisted, simply email us:
        </p>
        <div className="tcc-callout tcc-callout-info">
          <h4 className="tcc-callout-title">How to Submit an Unlisting Request:</h4>
          <ol className="mb-0 mt-2">
            <li>Send an email to <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a> with the subject line: <code>[Unlist Request] +91 XXXXXXXXXX</code>.</li>
            <li>Provide the specific 10-digit telephone number and any details regarding why delisting is requested.</li>
            <li>Requests are manually audited and processed within <strong>24 to 48 business hours</strong>.</li>
          </ol>
        </div>

        <h2>Report a Security Bug or Abuse</h2>
        <p>
          If you are a security researcher and have detected a vulnerability or anomalous rate-limit issue, please contact us with a detailed reproduction sequence at <a href="mailto:hello@imgoutam.dev">hello@imgoutam.dev</a> or message our developer directly on Telegram at <a href="https://t.me/MR_GOUTAM08" target="_blank" rel="noopener noreferrer">@MR_GOUTAM08</a>.
        </p>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
