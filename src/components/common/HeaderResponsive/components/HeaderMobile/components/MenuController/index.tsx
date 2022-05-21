import {
  StepsAvailable,
  useHeaderMobileNavigation,
} from '@/hooks/HeaderMobileNavigation';
import { useEffect, useState } from 'react';

import { useTransition } from 'react-spring';
import MenuCategory from '../MenuCategory';
import MenuNavigation from '../MenuNavigation';

import { Container } from './styles';

const MenuController: React.FC = () => {
  const { currentStep, currentTransition, changeTransition } =
    useHeaderMobileNavigation();

  const transitions = useTransition(currentTransition, {
    from: { left: '-120%', opacity: '0' },
    enter: { left: '0%', opacity: '1' },
    leave: { left: '-120%', opacity: '0' },
    config: {
      duration: 200,
    },
  });

  const StepsComponent = {
    initial: <MenuNavigation />,
    category: <MenuCategory />,
    empty: <></>,
  };

  useEffect(() => {
    changeTransition(currentStep);
  }, [currentStep, changeTransition]);
  return transitions((styles, item) => {
    return (
      <Container style={{ ...styles }}>
        {StepsComponent[item] || <></>}
      </Container>
    );
  });
};

export default MenuController;
