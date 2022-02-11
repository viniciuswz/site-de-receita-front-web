import { TopReciperSectionItem } from './styles';

interface TopRecipeItemHomeProps {
  position: number;
}

const TopRecipeItemHome: React.FC<TopRecipeItemHomeProps> = ({ position }) => {
  return (
    <TopReciperSectionItem className={`grid-${position}`}>
      <img src="images/receitas/default_image.png" alt="" />
    </TopReciperSectionItem>
  );
};

export default TopRecipeItemHome;
