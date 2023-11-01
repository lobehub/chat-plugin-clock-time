import { useTimeStyles } from "./Needles.style";
import { FC } from "react";

interface Props {
  value: number;
}

export const NeedleHours: FC<Props> = (props) => {
  const { styles } = useTimeStyles();

  return (
    <span
      className={styles.hours}
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
    ></span>
  );
};

export const NeedleMinutes: FC<Props> = (props) => {
  const { styles } = useTimeStyles();
  return (
    <span
      className={styles.minutes}
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
    ></span>
  );
};

export const NeedleSeconds: FC<Props> = (props) => {
  const { styles } = useTimeStyles();
  return (
    <span
      className={styles.seconds}
      style={{ transform: "rotateZ(" + props.value + "deg)" }}
    ></span>
  );
};
