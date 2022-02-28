import { Container } from './styles';

const RecipeSteps: React.FC = () => {
  return (
    <Container>
      <h2>Modo de preparo</h2>
      <ul>
        <li>
          <button type="button">
            <div />
            <span>Passo X</span>
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, tenetur sunt porro omnis iure modi dolorum! Obcaecati
            saepe nisi fugit. Maiores similique beatae architecto delectus!
            Veniam ad vitae exercitationem eaque.
          </p>
        </li>
        <li>
          <button type="button">
            <div />
            <span>Passo X</span>
          </button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus, tenetur sunt porro omnis iure modi dolorum! Obcaecati
            saepe nisi fugit. Maiores similique beatae architecto delectus!
            Veniam ad vitae exercitationem eaque.
          </p>
        </li>
      </ul>
    </Container>
  );
};

export default RecipeSteps;
