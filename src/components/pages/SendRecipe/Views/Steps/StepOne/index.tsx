import { useEffect } from 'react';
import { useSendRecipeForm } from '../../../hooks/SendRecipeForm';

const StepOne: React.FC = () => {
  const { currentStep, changeCurrentStep } = useSendRecipeForm();

  useEffect(() => {
    console.log('asdasd', currentStep);
  }, [currentStep]);
  return (
    <div>
      <h1>Etapa 1</h1>
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
          changeCurrentStep('two');
        }}
      >
        Avançar a etapa
      </button>
    </div>
  );
};

export default StepOne;
