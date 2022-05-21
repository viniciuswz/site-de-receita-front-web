import { useHeaderMobileNavigation } from '@/hooks/HeaderMobileNavigation';
import { useCallback } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import MenuController from '../MenuController';

import { BackgroundOverlay, Container, ButtonClose } from './styles';

const MenuLeft: React.FC = () => {
  const { closeMenuLeft, isMenuLeftOpen } = useHeaderMobileNavigation();

  const handleCloseMenu = useCallback(() => {
    closeMenuLeft();
  }, [closeMenuLeft]);

  return (
    (isMenuLeftOpen && (
      <>
        <Container>
          <BackgroundOverlay />
          <ButtonClose onClick={handleCloseMenu}>
            <MdOutlineClose size={32} />
          </ButtonClose>
          <MenuController />
        </Container>
      </>
    )) || <></>
  );
};

export default MenuLeft;
