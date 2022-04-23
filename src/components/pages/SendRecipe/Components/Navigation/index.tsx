import { useCallback, useEffect, useState } from 'react';

import { FiChevronLeft } from 'react-icons/fi';
import { string } from 'yup';

import { useSendRecipeForm, StepFormType } from '../../hooks/SendRecipeForm';

import {
  Container,
  NavHead,
  NavigatorSteps,
  NavigatorStepsItemContent,
  NavigatorStepsSeparator,
} from './styles';

interface Steps {
  name: string;
  description: string;
  step: StepFormType;
  isCompleted: boolean;
}

const Navigation: React.FC = () => {
  const { currentStep, changeCurrentStep } = useSendRecipeForm();
  const [steps, setSteps] = useState<Steps[]>([
    {
      name: 'Informações básicas',
      description: 'Um pouco sobre a receita',
      step: 'one',
      isCompleted: false,
    },
    {
      name: 'Organização',
      description: 'Como contar a receita ?',
      step: 'two',
      isCompleted: false,
    },
    {
      name: 'Preparo',
      description: 'Conte como fazer seu prato',
      step: 'three',
      isCompleted: false,
    },
    {
      name: 'Ingredientes',
      description: 'Quase lá',
      step: 'four',
      isCompleted: false,
    },
  ]);

  const goBack = useCallback(() => {
    const currentIndex = steps.findIndex(item => item.step === currentStep);
    if (currentIndex === 0) {
      changeCurrentStep('one');
      return;
    }

    changeCurrentStep(steps[currentIndex - 1].step);
  }, [currentStep, steps, changeCurrentStep]);

  useEffect(() => {
    setSteps(oldSteps => {
      const currentIndex = oldSteps.findIndex(
        item => item.step === currentStep
      );
      return oldSteps.map((step, index) => {
        return {
          ...step,
          isCompleted: index <= currentIndex,
        };
      });
    });
  }, [currentStep]);
  return (
    <>
      <Container>
        <NavHead>
          <button type="button" onClick={goBack}>
            <FiChevronLeft /> <span>Voltar</span>
          </button>
          <h2>Envie uma receita</h2>
          <p>São só alguns passos simples</p>
        </NavHead>
        <NavigatorSteps>
          <ul>
            {steps.map((item, index) => (
              <li className={item.isCompleted ? 'active' : ''} key={item.step}>
                <NavigatorStepsSeparator>
                  <span />
                </NavigatorStepsSeparator>
                <NavigatorStepsItemContent>
                  <span>{index + 1}</span>
                  <div>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                  </div>
                </NavigatorStepsItemContent>
              </li>
            ))}
          </ul>
        </NavigatorSteps>
      </Container>
    </>
  );
};

export default Navigation;
