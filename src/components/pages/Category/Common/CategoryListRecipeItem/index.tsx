import { FiStar, FiHeart } from 'react-icons/fi';
import { BiDish } from 'react-icons/bi';
import { MdTimer } from 'react-icons/md';
import {
  Container,
  Image,
  ImageFlagsBottom,
  ImageFlagsTop,
  Info,
} from './styles';

const CategoryListRecipeItem: React.FC = () => {
  return (
    <Container>
      <Image>
        <ImageFlagsTop>
          <div className="rating">
            <FiStar /> <p>4.5</p>
          </div>
          <div className="favorite">
            <button type="button">
              <FiHeart />
            </button>
          </div>
        </ImageFlagsTop>
        <img src="/images/receitas/default_image.png" alt="" />
        <ImageFlagsBottom>
          <li>
            <MdTimer />
            <p>25 min</p>
          </li>
          <li>
            <BiDish />
            <p>2 porções</p>
          </li>
        </ImageFlagsBottom>
      </Image>
      <Info>
        <h3>Strogonoff de Frango</h3>
        <p>Enviado por Vinícius Araújo</p>
      </Info>
    </Container>
  );
};

export default CategoryListRecipeItem;
