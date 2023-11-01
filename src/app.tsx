import { FC, useEffect } from 'react';
import { Center } from 'react-layout-kit';

import Clock from './components/clock';
import Time from './components/time';
import { useStore } from './store';

export const App: FC = () => {
  const { updateTimeAction } = useStore();

  useEffect(() => {
    const id = setInterval(() => {
      updateTimeAction();
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <Center padding={32}>
        <Clock />
      </Center>
      <Time />
    </div>
  );
};
