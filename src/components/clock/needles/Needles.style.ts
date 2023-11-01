import { createStyles } from "antd-style";

export const useTimeStyles = createStyles(({ token }) => ({
  hours: {
    "&:before": {
      backgroundColor: token.colorText,
      borderRadius: ".75rem",
      content: '""',
      height: "3rem",
      position: "absolute",
      width: ".25rem",
      zIndex: "var(--z-normal)",
    },
    display: "flex",
    height: "105px",
    justifyContent: "center",
    position: "absolute",
    width: "105px",
  },
  minutes: {
    "&:before": {
      backgroundColor: token.colorText,
      borderRadius: ".75rem",
      content: '""',
      height: "4rem",
      position: "absolute",
      width: ".25rem",
      zIndex: "var(--z-normal)",
    },
    display: "flex",
    height: "136px",
    justifyContent: "center",
    position: "absolute",
    width: "136px",
  },
  seconds: {
    "&:before": {
      backgroundColor: token.blue,
      borderRadius: ".75rem",
      content: '""',
      height: "5rem",
      position: "absolute",
      width: ".125rem",
      zIndex: "var(--z-normal)",
    },
    display: "flex",
    height: "130px",
    justifyContent: "center",
    position: "absolute",
    width: "130px",
  },
}));
