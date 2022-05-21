import { BsCartCheckFill } from 'react-icons/bs';

import { Container, Image, ImageFlagsTop, ImageInfoBottom } from './styles';

interface ListItemProps {
  handleToggleModal(): void;
}

const ListItem: React.FC<ListItemProps> = ({ handleToggleModal }) => {
  return (
    <Container onClick={handleToggleModal}>
      <Image>
        <ImageFlagsTop>
          <div className="shopping">
            <BsCartCheckFill />
            <span>1/10</span>
          </div>
        </ImageFlagsTop>
        <img src="/images/receitas/default_image.png" alt="" />
        <ImageInfoBottom>
          <h3>Strogonoff de Frango</h3>
        </ImageInfoBottom>
      </Image>
    </Container>
  );
};

export default ListItem;
