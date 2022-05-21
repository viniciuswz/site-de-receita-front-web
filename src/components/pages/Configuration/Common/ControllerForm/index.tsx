import PasswordForm from '../PasswordForm';
import GeneralInfoForm from '../GeneralInfoForm';

import { Steps } from '../../index';

interface ControllerFormProps {
  currentStep: Steps;
}

const ControllerForm: React.FC<ControllerFormProps> = ({ currentStep }) => {
  const CurrentComponent = {
    generalInfoForm: <GeneralInfoForm />,
    passwordForm: <PasswordForm />,
  };
  return CurrentComponent[currentStep] || <GeneralInfoForm />;
};

export default ControllerForm;
