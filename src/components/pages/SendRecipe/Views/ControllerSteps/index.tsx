import { useMemo } from 'react';
import { useSendRecipeForm } from '../../hooks/SendRecipeForm';
import { StepFormOne, StepFormTwo, StepFormThree } from '../Steps';

const ControllerSteps = () => {
  const { currentStep, changeCurrentStep } = useSendRecipeForm();

  const allFormSteps = useMemo(() => {
    return {
      one: <StepFormOne />,
      two: <StepFormTwo />,
      three: <StepFormThree />,
    };
  }, []);

  const ComponentCurrentStep = useMemo(() => {
    console.log('HERE', currentStep);
    return allFormSteps[currentStep] || <StepFormOne />;
  }, [allFormSteps, currentStep]);

  return ComponentCurrentStep;
};

export default ControllerSteps;
