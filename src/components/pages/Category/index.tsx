import {
  CategoryBanner,
  CategorySubcategorySlide,
  CategoryListRecipes,
} from './Common';
import { Container } from './styles';

const Categoria: React.FC = () => {
  return (
    <Container>
      <CategoryBanner />
      <CategorySubcategorySlide />
      <CategoryListRecipes />
    </Container>
  );
};

export default Categoria;
