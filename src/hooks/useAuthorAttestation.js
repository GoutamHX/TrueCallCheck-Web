import { useEffect, useState, useRef } from "react";

// Obfuscated cryptographic constants protecting original developer attribution
// [0]: 'Goutam Septa', [1]: 'https://www.imgoutam.dev/', [2]: 'https://github.com/GoutamHX', [3]: '@GoutamHX', [4]: 'TrueCallCheck'
const _0xTCC_SEC = [
  "R291dGFtIFNlcHRh",
  "aHR0cHM6Ly93d3cuaW1nb3V0YW0uZGV2Lw==",
  "aHR0cHM6Ly9naXRodWIuY29tL0dvdXRhbUhY",
  "QEdvdXRhbUhY",
  "VHJ1ZUNhbGxDaGVjaw==",
];

const _decode = (idx) => {
  try {
    if (typeof window !== "undefined" && window.atob) {
      return window.atob(_0xTCC_SEC[idx]);
    }
  } catch {
    // fallback
  }
  return "";
};

/**
 * Ensures creator watermark in browser DevTools and enforces DOM attribution integrity.
 */
export function useAuthorAttestation() {
  const verifiedRef = useRef({
    name: _decode(0) || "Goutam Septa",
    url: _decode(1) || "https://www.imgoutam.dev/",
    github: _decode(2) || "https://github.com/GoutamHX",
    handle: _decode(3) || "@GoutamHX",
    brand: _decode(4) || "TrueCallCheck",
  });

  const [authorInfo] = useState(verifiedRef.current);

  useEffect(() => {
    const original = verifiedRef.current;

    // 1. Console DevTools Watermark Badge (Site load hote hi console me branded badge)
    if (typeof window !== "undefined" && !window.__TCC_INITIALIZED__ && !window.__TCC_ATTESTED__) {
      try {
        Object.defineProperty(window, "__TCC_INITIALIZED__", {
          value: true,
          writable: false,
          configurable: false,
        });
      } catch {
        window.__TCC_INITIALIZED__ = true;
      }

      console.log(
        `%c 📞 ${original.brand} v2.0 %c Crafted with ❤️ by ${original.name} `,
        "background:#0284c7;color:#ffffff;font-weight:700;font-size:12px;padding:6px 12px;border-radius:4px 0 0 4px;font-family:system-ui,sans-serif;",
        "background:#0f172a;color:#38bdf8;font-weight:600;font-size:12px;padding:6px 12px;border-radius:0 4px 4px 0;font-family:system-ui,sans-serif;"
      );
      console.log(
        `%c ⚡ Portfolio: ${original.url} | GitHub: ${original.github} (${original.handle}) %c`,
        "color:#94a3b8;font-size:11px;font-family:monospace;padding:3px 0;",
        ""
      );
    }

    // 2. Tamper-resistant Obfuscated Integrity Guard for Footer Attribution
    const enforceIntegrity = () => {
      if (typeof document === "undefined") return;

      const sigLink = document.querySelector(".dev-signature-link");
      const devName = document.querySelector(".dev-name");

      if (sigLink && sigLink.getAttribute("href") !== original.url) {
        sigLink.setAttribute("href", original.url);
      }
      if (devName && devName.textContent !== original.name) {
        devName.textContent = original.name;
      }
    };

    enforceIntegrity();

    // DOM MutationObserver to self-heal and guard against attribution tampering
    let observer = null;
    if (typeof MutationObserver !== "undefined") {
      observer = new MutationObserver(() => {
        enforceIntegrity();
      });

      const target = document.querySelector("[data-author-attestation]") || document.body;
      if (target) {
        observer.observe(target, {
          childList: true,
          subtree: true,
          characterData: true,
          attributes: true,
          attributeFilter: ["href", "title"],
        });
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return authorInfo;
}

export default useAuthorAttestation;
