import SendRecipeHookProvider from './hooks';

import ControllerSteps from './Views/ControllerSteps';

const SendRecipe: React.FC = () => {
  return (
    <SendRecipeHookProvider>
      <ControllerSteps />
    </SendRecipeHookProvider>
  );
};

export default SendRecipe;
