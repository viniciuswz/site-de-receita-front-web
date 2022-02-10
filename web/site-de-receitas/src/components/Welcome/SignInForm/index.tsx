import { useState } from 'react';

import StepOne from './Steps/StepOne';
import StepTwo from './Steps/StepTwo';

export type StepType = 'one' | 'two';

const LoginForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<StepType>('one');

  const allSteps = {
    one: <StepOne changeStep={setCurrentStep} />,
    two: <StepTwo changeStep={setCurrentStep} />,
  };

  return allSteps[currentStep] || <StepOne changeStep={setCurrentStep} />;
};

export default LoginForm;
