import { useMemo } from 'react';
import { useSendRecipeForm } from '../../hooks/SendRecipeForm';
import {
  StepFormOne,
  StepFormTwo,
  StepFormThree,
  StepStepFour,
} from '../Steps';

const ControllerSteps: React.FC = () => {
  const { currentStep } = useSendRecipeForm();

  const allFormSteps = useMemo(() => {
    return {
      one: <StepFormOne />,
      two: <StepFormTwo />,
      three: <StepFormThree />,
      four: <StepStepFour />,
    };
  }, []);

  const ComponentCurrentStep = useMemo(() => {
    return allFormSteps[currentStep] || <StepFormOne />;
  }, [allFormSteps, currentStep]);

  return ComponentCurrentStep;
};

export default ControllerSteps;
