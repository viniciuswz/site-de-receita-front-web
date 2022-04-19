import { useSendRecipeForm } from '../../../hooks/SendRecipeForm';

const StepThree: React.FC = () => {
  const { currentStep, changeCurrentStep } = useSendRecipeForm();
  return (
    <div>
      <h1>Etapa 3</h1>
      <button
        type="button"
        onClick={() => {
          changeCurrentStep('two');
        }}
      >
        voltar
      </button>
      <button
        type="button"
        onClick={() => {
          alert('fim');
        }}
      >
        Avançar a etapa
      </button>
    </div>
  );
};

export default StepThree;
