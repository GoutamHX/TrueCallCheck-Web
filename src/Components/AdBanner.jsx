import React, { useState, useEffect, useRef } from "react";

/**
 * Reusable Google AdSense Ad Unit Component
 * Automatically collapses to 0 height & 0 margin when ads are not serving or unfilled.
 * The original UI layout remains 100% pristine with zero empty gaps.
 */
const AdBanner = ({
  slot = "6294867997",
  client = "ca-pub-4794491248601896",
  format = "auto",
  responsive = "true",
  className = "",
  style = {},
}) => {
  const [isFilled, setIsFilled] = useState(false);
  const containerRef = useRef(null);
  const isPushedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const checkFilledStatus = () => {
      const ins = container.querySelector("ins.adsbygoogle");
      if (!ins) return;

      const adStatus = ins.getAttribute("data-ad-status");
      if (adStatus === "unfilled") {
        setIsFilled(false);
        return;
      }

      const iframe = ins.querySelector("iframe");
      // Check if AdSense marked as filled or injected an active iframe with height
      if (
        adStatus === "filled" ||
        (iframe && (iframe.offsetHeight > 10 || ins.offsetHeight > 10))
      ) {
        setIsFilled(true);
      }
    };

    // Observe AdSense DOM mutations (iframe insertion, data-ad-status changes)
    const observer = new MutationObserver(() => {
      checkFilledStatus();
    });

    observer.observe(container, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["data-ad-status", "style"],
    });

    // Push to AdSense queue once on mount
    if (!isPushedRef.current) {
      try {
        if (typeof window !== "undefined") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isPushedRef.current = true;

          if (process.env.NODE_ENV === "development") {
            console.log(
              `%c 📢 AdSense Slot [${slot}] %c Ready & Pushed (%c${client}%c) `,
              "background:#eab308;color:#000;font-weight:700;font-size:11px;padding:3px 6px;border-radius:3px 0 0 3px;",
              "background:#0f172a;color:#38bdf8;font-size:11px;padding:3px 6px;",
              "color:#a855f7;font-weight:600;",
              "color:#38bdf8;"
            );
          }
        }
      } catch (err) {
        // Suppress warning if adblocker is active
      }
    }

    // Safety timeout check after network response
    const t1 = setTimeout(checkFilledStatus, 1200);
    const t2 = setTimeout(checkFilledStatus, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`adsense-wrapper ${isFilled ? "is-filled" : "is-collapsed"} ${className}`.trim()}
      style={{
        width: "100%",
        maxWidth: "728px",
        overflow: "hidden",
        textAlign: "center",
        ...style,
        ...(isFilled
          ? {
              margin: style.margin || "24px auto 12px",
              minHeight: "90px",
              opacity: 1,
              transition: "opacity 0.4s ease-in",
            }
          : {
              height: 0,
              minHeight: 0,
              margin: "0 !important",
              padding: 0,
              opacity: 0,
              pointerEvents: "none",
            }),
      }}
    >
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
};

export default React.memo(AdBanner);
