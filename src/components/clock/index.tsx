import { memo } from 'react';

import { useStore } from '../../store';
import { Circle } from './circle/Circle';
import { NeedleHours, NeedleMinutes, NeedleSeconds } from './needles/Needles';
import { Axis, StickNine, StickSix, StickThree, StickTwelve } from './sticks/Sticks';

const Clock = memo(() => {
  const { hours, minutes, seconds } = useStore();

  return (
    <Circle>
      <StickTwelve />
      <StickThree />
      <StickSix />
      <StickNine />
      <Axis />
      <NeedleHours value={hours} />
      <NeedleMinutes value={minutes} />
      <NeedleSeconds value={seconds} />
    </Circle>
  );
});

export default Clock;
