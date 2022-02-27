import { FiSearch } from 'react-icons/fi';
import Logo from '@/assets/images/logo.svg';

import { useHeaderMobileNavigation } from '@/hooks/HeaderMobileNavigation';
import { useCallback } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { Container, ButtonMenu, ButtonSearch } from './styles';
import MenuLeft from './components/MenuLeft';
import MenuCategory from './components/MenuCategory';
import Search from './components/Search';

const HeaderMobile: React.FC = () => {
  const { openMenuLeft, toggleIsSearchOpen, isSearchOpen } =
    useHeaderMobileNavigation();

  const handleOpenSearch = useCallback(() => {
    toggleIsSearchOpen();
  }, [toggleIsSearchOpen]);
  return (
    <>
      <Container>
        <ButtonMenu onClick={openMenuLeft}>
          <span />
          <span />
          <span />
        </ButtonMenu>
        <Logo />
        <ButtonSearch onClick={handleOpenSearch}>
          {isSearchOpen ? <MdOutlineClose size={24} /> : <FiSearch size={24} />}
        </ButtonSearch>
      </Container>
      <MenuLeft />
      <Search />
    </>
  );
};

export default HeaderMobile;
