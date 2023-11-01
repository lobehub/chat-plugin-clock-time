import { createStyles } from "antd-style";

export const useSticksStyles = createStyles(({ token }) => ({
  axis: {
    backgroundColor: token.blue,
    border: `2px solid ${token.blue7}`,
    borderRadius: "50%",
    height: ".75rem",
    width: ".75rem",
    zIndex: "var(--z-tooltip)",
  },
  nine: {
    backgroundColor: token.colorText,
    height: "1px",
    left: ".75rem",
    position: "absolute",
    top: "50%",
    width: "1rem",
  },
  six: {
    backgroundColor: token.colorText,
    bottom: "1.25rem",
    height: "1px",
    left: "50%",
    position: "absolute",
    transform: "translateX(-50%) rotate(90deg)",
    width: "1rem",
  },
  three: {
    backgroundColor: token.colorText,
    height: "1px",
    position: "absolute",
    right: ".75rem",
    top: "50%",
    width: "1rem",
  },
  twelve: {
    backgroundColor: token.colorText,
    height: "1px",
    left: "50%",
    position: "absolute",
    top: "1.5rem",
    transform: "translateX(-50%) rotate(90deg)",
    width: "1rem",
  },
}));
