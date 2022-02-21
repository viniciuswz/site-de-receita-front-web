import { useMediaQuery } from 'react-responsive';

import HeaderMobile from './components/HeaderMobile';
import Header from './components/Header';

const HeaderResponsive: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });
  return (
    <>
      {isDesktopOrLaptop && <Header />}
      {isTabletOrMobile && <HeaderMobile />}
    </>
  );
};

export default HeaderResponsive;
