import { createStyles } from "antd-style";

export const useTimeStyles = createStyles(({ token }) => ({
  ampm: {
    color: token.colorTextQuaternary,
    fontSize: "var(--tiny-font-size)",
    fontWeight: "var(--font-medium)",
    marginLeft: "var(--mn-0-25)",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  hours: {
    color: token.colorText,
    fontSize: "var(--biggest-font-size)",
    fontWeight: "var(--font-medium)",
  },
  minutes: {
    color: token.colorText,
    fontSize: "var(--biggest-font-size)",
    fontWeight: "var(--font-medium)",
  },
}));
