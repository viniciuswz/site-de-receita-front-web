import { useSendRecipeForm } from '../../../hooks/SendRecipeForm';

import MultipleStepInstructions from './components/MultipleStepsInstructions';
import SingleStepInstructions from './components/SingleStepInstruction';

const StepThree: React.FC = () => {
  const { formData } = useSendRecipeForm();

  return (
    <>
      {formData.howToMake?.isStages ? (
        <MultipleStepInstructions />
      ) : (
        <SingleStepInstructions />
      )}
    </>
  );
};

export default StepThree;
