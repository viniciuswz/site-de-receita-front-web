import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import { MdLibraryAdd } from 'react-icons/md';

import Input from '@/components/common/DefaultInput';
import TextArea from '@/components/common/DefaultTextArea';
import Select from '@/components/common/DefaultSelect';
import DropImage from '@/components/common/DefaultDropImage';

import { useSendRecipeForm } from '../../../hooks/SendRecipeForm';

import { ButtonAddMore, ButtonAddMoreMessage } from './styles';

import {
  Container,
  ContainerScroll,
  ButtonSubmit,
  StepHeader,
} from '../styles';

const StepTwo: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { currentStep, changeCurrentStep } = useSendRecipeForm();
  const { addToast } = useToast();

  const { recipeInstructions, setRecipeInstructions } = useState([
    {
      name: 'Massa',
      instructions: ['cortar', 'moer', 'cozinhar'],
    },
  ]);
  const handleFormSubmit = useCallback(
    async data => {
      console.log('data', data);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          titulo_da_receita: Yup.string().required('O campo é obrigatorio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });
        changeCurrentStep('two');
        console.log(data);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          // Validation failed
          console.log(data);

          const errors = getValidationErrors(error);

          console.dir(errors);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [addToast, changeCurrentStep]
  );
  return (
    <ContainerScroll>
      <Container>
        <StepHeader>
          <h1>Modo de preparo</h1>
          <p>Adicione quantas seções precisar</p>
        </StepHeader>
        <ButtonAddMore>
          <ButtonAddMoreMessage>
            <div>
              <MdLibraryAdd />
              <p>Clique para adicionar uma nova seção de preparo</p>
              <span>Com cada etapa dividida os leitores</span>
              <span>agradecem</span>
            </div>
          </ButtonAddMoreMessage>
        </ButtonAddMore>
      </Container>
    </ContainerScroll>
  );
};

export default StepTwo;
