import SendRecipeHookProvider from './hooks';

import ControllerSteps from './Views/ControllerSteps';

import { Container, ContentLeft, ContentRight } from './styles';

import { Navigation } from './Components';

const SendRecipe: React.FC = () => {
  return (
    <SendRecipeHookProvider>
      <Container>
        <ContentLeft>
          <Navigation />
        </ContentLeft>
        <ContentRight>
          <ControllerSteps />
        </ContentRight>
      </Container>
    </SendRecipeHookProvider>
  );
};

export default SendRecipe;
