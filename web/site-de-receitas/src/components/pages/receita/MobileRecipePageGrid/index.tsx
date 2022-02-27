import {
  RecipePhotos,
  RecipeInfo,
  RecipeIngredientsChecklist,
  RecipeSteps,
  RecipeRating,
  RecipeDoubts,
} from '../commom';

import { Container } from './styles';

const MobileRecipePageGrid: React.FC = () => {
  return (
    <Container>
      <RecipeInfo />
      <RecipePhotos />
      <RecipeIngredientsChecklist />
      <RecipeSteps />
      <RecipeRating />
      <RecipeDoubts />
    </Container>
  );
};

export default MobileRecipePageGrid;
