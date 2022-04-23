import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import Input from '@/components/common/DefaultInput';
import TextArea from '@/components/common/DefaultTextArea';
import Select from '@/components/common/DefaultSelect';
import DropImage from '@/components/common/DefaultDropImage';

import MultiStepIcon from '@/assets/images/sendRecipe_icon_choice_multi_step.svg';
import OneStepIcon from '@/assets/images/sendRecipe_icon_choice_one_step.svg';
import DoubtStepIcon from '@/assets/images/sendRecipe_icon_choice_doubt.svg';

import { useSendRecipeForm } from '../../../hooks/SendRecipeForm';

import { ContainerButton, Container, StepHeader } from '../styles';
import {
  ChoicesContainer,
  ChoiceButton,
  NextStepButton,
  ChoiceTipParagraph,
} from './styles';

const StepTwo: React.FC = () => {
  const { currentStep, changeCurrentStep } = useSendRecipeForm();

  const { addToast } = useToast();

  const [choices] = useState([
    {
      value: true,
      label: 'Sim',
      icon: <MultiStepIcon />,
    },
    {
      value: false,
      label: 'Não',
      icon: <OneStepIcon />,
    },
    {
      value: null,
      label: 'Não sei',
      icon: <DoubtStepIcon />,
    },
  ]);

  const [selectedChoice, setSelectedChoice] = useState<
    boolean | null | undefined
  >(undefined);

  const handleChoice = useCallback((value: boolean | null) => {
    setSelectedChoice(value);
  }, []);

  const handleNextStep = useCallback(() => {
    if (selectedChoice === false || selectedChoice === true) {
      addToast({ title: 'Bora', description: 'estamos quase lá meu chapa' });
      changeCurrentStep('three');
      return;
    }

    if (selectedChoice === null) {
      addToast({ title: 'Burro', description: 'seu burro', type: 'info' });

      setTimeout(() => {
        window.location.href = 'https://www.youtube.com/watch?v=jK50H3HOMRE';
      }, 3000);

      return;
    }
    addToast({
      title: 'selecione algo ai',
      description: 'sei nem o que colocar aqui',
      type: 'error',
    });
  }, [selectedChoice, changeCurrentStep, addToast]);

  return (
    <Container>
      <StepHeader>
        <h1 className="fz-32">Dividir o preparo em etapas ?</h1>
      </StepHeader>
      <ChoicesContainer>
        {choices.map(item => (
          <ChoiceButton
            type="button"
            key={item.label}
            className={(selectedChoice === item.value && 'active') || ''}
            onClick={() => {
              handleChoice(item.value);
            }}
          >
            <div>{item.icon}</div>
            <p>{item.label}</p>
          </ChoiceButton>
        ))}
      </ChoicesContainer>

      <ChoiceTipParagraph>
        Uma boa divisão das etapas do preparo pode facilitar a vida dos
        leitores, e também o seu cadastro, mas entendemos que isso seja novo
        para você, então é sua decisão.
      </ChoiceTipParagraph>

      <ContainerButton>
        <button type="button" onClick={handleNextStep}>
          Próximo passo
        </button>
      </ContainerButton>
    </Container>
  );
};

export default StepTwo;
