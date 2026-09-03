import { useEffect } from "react";

/**
 * Disables context menu and devtools inspection shortcuts.
 */
export function useAntiInspect() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();

    const handleKeyDown = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase();
      const devtoolsKey = k === "I" || k === "J" || k === "C";
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && devtoolsKey) ||
        (e.ctrlKey && k === "U") ||
        (e.metaKey && e.altKey && (devtoolsKey || k === "U")) ||
        (e.metaKey && e.shiftKey && devtoolsKey)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
}
