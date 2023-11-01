import * as React from "react";
import { useSticksStyles } from "./Sticks.style";

export const StickTwelve: React.FC = () => {
  const { styles } = useSticksStyles();
  return <span className={styles.twelve}></span>;
};

export const StickThree: React.FC = () => {
  const { styles } = useSticksStyles();
  return <span className={styles.three}></span>;
};

export const StickSix: React.FC = () => {
  const { styles } = useSticksStyles();
  return <span className={styles.six}></span>;
};

export const StickNine: React.FC = () => {
  const { styles } = useSticksStyles();
  return <span className={styles.nine}></span>;
};

export const Axis: React.FC = () => {
  const { styles } = useSticksStyles();
  return <span className={styles.axis}></span>;
};
