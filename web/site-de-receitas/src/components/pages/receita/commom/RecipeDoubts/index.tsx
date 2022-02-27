import {
  Container,
  DoubtFormButton,
  DoubtFormInput,
  DoubtFormUser,
  DoubtHeader,
} from './styles';

import DoubtList from './components/DoubtList';

const RecipeDoubts: React.FC = () => {
  return (
    <Container>
      <h2>Dúvidas</h2>

      <DoubtHeader>
        <DoubtFormUser>
          <img src="/images/default-profile.png" alt="profile" />
        </DoubtFormUser>
        <DoubtFormInput placeholder="Faça uma avaliação" />
        <DoubtFormButton>Enviar</DoubtFormButton>
      </DoubtHeader>
      <DoubtList />
    </Container>
  );
};

export default RecipeDoubts;
