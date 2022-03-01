import { Container, BannerLeft, BannerRight } from './styles';

const CategoryBanner: React.FC = () => {
  return (
    <Container>
      <BannerLeft>
        <img src="/images/receitas/default_image.png" alt="receita daora" />
      </BannerLeft>
      <BannerRight>
        <h1>Título da categoria</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos vero
          error possimus placeat minima aperiam exercitationem sequi impedit
          neque voluptatibus deleniti accusamus, illum id sit corrupti tempora
          aspernatur praesentium rerum.
        </p>
      </BannerRight>
    </Container>
  );
};

export default CategoryBanner;
