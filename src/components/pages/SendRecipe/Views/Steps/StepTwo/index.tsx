import { useSendRecipeForm } from '../../../hooks/SendRecipeForm';

const StepTwo: React.FC = () => {
  const { currentStep, changeCurrentStep } = useSendRecipeForm();
  return (
    <div>
      <h1>Etapa 2</h1>
      <button
        type="button"
        onClick={() => {
          changeCurrentStep('one');
        }}
      >
        voltar
      </button>
      <button
        type="button"
        onClick={() => {
          changeCurrentStep('three');
        }}
      >
        Avançar a etapa
      </button>
    </div>
  );
};

export default StepTwo;
