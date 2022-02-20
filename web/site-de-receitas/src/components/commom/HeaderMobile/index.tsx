import { FiSearch } from 'react-icons/fi';
import Logo from '@/assets/images/logo.svg';

import { useHeaderMobileNavigation } from '@/hooks/HeaderMobileNavigation';
import { Container, ButtonMenu, ButtonSearch } from './styles';
import MenuLeft from './components/MenuLeft';
import MenuCategory from './components/MenuCategory';

const HeaderMobile: React.FC = () => {
  const { openMenuLeft } = useHeaderMobileNavigation();
  return (
    <>
      <Container>
        <ButtonMenu onClick={openMenuLeft}>
          <span />
          <span />
          <span />
        </ButtonMenu>
        <Logo />
        <ButtonSearch>
          <FiSearch size={24} />
        </ButtonSearch>
      </Container>
      <MenuLeft />
    </>
  );
};

export default HeaderMobile;
