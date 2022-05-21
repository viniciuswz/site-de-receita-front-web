import CategoryListRecipeItem from '../CategoryListRecipeItem';
import { Container } from './styles';

const CategoryListRecipes: React.FC = () => {
  return (
    <Container>
      <CategoryListRecipeItem />
      <CategoryListRecipeItem />
      <CategoryListRecipeItem />

      <CategoryListRecipeItem />
      <CategoryListRecipeItem />
      <CategoryListRecipeItem />
    </Container>
  );
};

export default CategoryListRecipes;
