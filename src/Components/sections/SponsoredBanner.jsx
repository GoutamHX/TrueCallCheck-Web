import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { SITE_CONFIG } from "../../data";

/**
 * Sponsored slot for an adults-only Telegram bot. The outbound link is not
 * rendered until the visitor confirms they are 18+, and answering "No" hides
 * the banner, because the hero is shown to every visitor.
 */
export function SponsoredBanner() {
  const [stage, setStage] = useState("idle"); // idle | confirm | dismissed

  if (stage === "dismissed") return null;

  const isConfirming = stage === "confirm";

  return (
    <aside className="sponsored-banner" aria-label="Sponsored, adults only">
      <span className="sponsored-age-badge mono-num">18+</span>

      <div className="sponsored-copy" aria-live="polite">
        {isConfirming ? (
          <>
            <strong className="sponsored-title">Are you 18 or older?</strong>
            <span className="sponsored-text">
              This link opens a Telegram bot with adult content.
            </span>
          </>
        ) : (
          <>
            <strong className="sponsored-title">VideosHubz</strong>
            <span className="sponsored-text">Adults-only Telegram bot</span>
          </>
        )}
      </div>

      <span className="sponsored-label mono-num">Sponsored</span>

      <div className="sponsored-actions">
        {isConfirming ? (
          <>
            <a
              href={SITE_CONFIG.links.sponsoredBot}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="no-data-btn-primary"
              onClick={() => setStage("idle")}
            >
              <FaTelegram aria-hidden="true" />
              <span>Yes, I'm 18+</span>
            </a>
            <button
              type="button"
              className="no-data-btn-secondary"
              onClick={() => setStage("dismissed")}
            >
              No
            </button>
          </>
        ) : (
          <button
            type="button"
            className="no-data-btn-secondary"
            onClick={() => setStage("confirm")}
          >
            View
          </button>
        )}
      </div>
    </aside>
  );
}

export default SponsoredBanner;
