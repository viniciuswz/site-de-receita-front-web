import { FiStar, FiHeart } from 'react-icons/fi';
import { BiDish } from 'react-icons/bi';
import { MdTimer } from 'react-icons/md';

import Link from 'next/link';
import {
  Container,
  Image,
  ImageFlagsBottom,
  ImageFlagsTop,
  Info,
  ImageInfoBottom,
} from './styles';

const RecipeItem: React.FC = () => {
  return (
    <Link href="/receita/strogonoff">
      <a>
        <Container>
          <Image>
            <ImageFlagsTop>
              <div className="favorite">
                <button type="button">
                  <FiHeart />
                </button>
              </div>
            </ImageFlagsTop>
            <img src="/images/receitas/default_image.png" alt="" />
            <ImageInfoBottom>
              <h3>Strogonoff de Frango</h3>
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
            </ImageInfoBottom>
          </Image>
        </Container>
      </a>
    </Link>
  );
};

export default RecipeItem;
