import { Container, ContentLeft, ContentRight } from './styles';

import {
  RecipePhotos,
  RecipeInfo,
  RecipeIngredientsChecklist,
  RecipeSteps,
  RecipeRating,
} from '../commom';

const DesktopRecipePageGrid: React.FC = () => {
  return (
    <Container>
      <ContentLeft>
        <RecipePhotos />
        <RecipeSteps />
        <RecipeRating />
      </ContentLeft>
      <ContentRight>
        <RecipeInfo />
        <RecipeIngredientsChecklist />
      </ContentRight>
    </Container>
  );
};

export default DesktopRecipePageGrid;
