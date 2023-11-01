import { createStyles } from 'antd-style';
import { FC, PropsWithChildren } from 'react';
import { Center } from 'react-layout-kit';

const useStyles = createStyles(({ token, isDarkMode }) => {
  const shadowColor = `hsla(210, 30%, 86%, 1)`;

  return {
    root: {
      background: token.colorBgElevated,
      border: isDarkMode ? `1px solid ${token.colorBorder}` : undefined,
      borderRadius: '50%',
      boxShadow: isDarkMode
        ? `box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px`
        : `-6px -6px 16px ${token.colorBgContainer}, 6px 6px 16px ${shadowColor}, inset 6px 6px 16px ${shadowColor}, inset -6px -6px 16px ${token.colorBgContainer}`,
      height: '200px',
      position: 'relative',
      width: '200px',
    },
  };
});

export const Circle: FC<PropsWithChildren> = (props) => {
  const { styles } = useStyles();
  return <Center className={styles.root}>{props.children}</Center>;
};
