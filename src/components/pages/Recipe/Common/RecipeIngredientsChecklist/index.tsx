import { MdAddShoppingCart } from 'react-icons/md';
import { Container, ButtonShoppingList } from './styles';

const RecipeIngredientsChecklist: React.FC = () => {
  return (
    <Container>
      <h2>Ingredientes</h2>
      <ul>
        <li>
          <button type="button">
            <div />
            <p>1 kg Lorem ipsum dolor sit</p>
          </button>
        </li>
        <li>
          <button type="button">
            <div />
            <p>1 kg Lorem ipsum dolor sit</p>
          </button>
        </li>
      </ul>

      <ButtonShoppingList>
        <MdAddShoppingCart />
        <span>Adicionar a lista de compras</span>
      </ButtonShoppingList>
    </Container>
  );
};

export default RecipeIngredientsChecklist;
