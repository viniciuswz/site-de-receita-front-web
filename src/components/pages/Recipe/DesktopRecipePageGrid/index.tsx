import { Container, ContentLeft, ContentRight } from './styles';

import {
  RecipePhotos,
  RecipeInfo,
  RecipeIngredientsChecklist,
  RecipeSteps,
  RecipeRating,
  RecipeDoubts,
} from '../Common';

const DesktopRecipePageGrid: React.FC = () => {
  return (
    <Container>
      <ContentLeft>
        <RecipePhotos />
        <RecipeSteps />
        <RecipeRating />
        <RecipeDoubts />
      </ContentLeft>
      <ContentRight>
        <RecipeInfo />
        <RecipeIngredientsChecklist />
      </ContentRight>
    </Container>
  );
};

export default DesktopRecipePageGrid;
