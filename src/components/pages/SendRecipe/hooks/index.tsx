import { SendRecipeFormProvider } from './SendRecipeForm';

const SendRecipeHookProvider: React.FC = ({ children }) => {
  return <SendRecipeFormProvider>{children}</SendRecipeFormProvider>;
};

export default SendRecipeHookProvider;
