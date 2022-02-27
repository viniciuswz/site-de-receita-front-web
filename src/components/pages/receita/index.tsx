import { useMediaQuery } from 'react-responsive';

import DesktopRecipePageGrid from './DesktopRecipePageGrid';
import MobileRecipePageGrid from './MobileRecipePageGrid';
import { Content } from './styles';

const RecipePage: React.FC = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });
  return (
    <Content>
      {isDesktopOrLaptop && <DesktopRecipePageGrid />}
      {isTabletOrMobile && <MobileRecipePageGrid />}
    </Content>
  );
};

export default RecipePage;
