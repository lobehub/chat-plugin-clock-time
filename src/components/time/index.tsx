import { memo } from 'react';

import { useStore } from '../../store';
import { useTimeStyles } from './style';

const Time = memo(() => {
  const { styles } = useTimeStyles();
  const props = useStore();

  const formatterHours = props.textHours < 10 ? '0' + props.textHours + ':' : props.textHours + ':';
  const formatterMinutes = props.textMinutes < 10 ? '0' + props.textMinutes : props.textMinutes;
  return (
    <div className={styles.container}>
      <div className={styles.hours}>{formatterHours}</div>
      <div className={styles.minutes}>{formatterMinutes}</div>
      <div className={styles.ampm}>{props.ampm}</div>
    </div>
  );
});

export default Time;
