import { useCallback, useRef, useMemo } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import TextArea from '@/components/common/DefaultTextArea';

import {
  StepsFormData,
  useSendRecipeForm,
} from '../../../hooks/SendRecipeForm';

import {
  ContainerButton,
  Container,
  ContainerScroll,
  StepHeader,
} from '../styles';

const StepFour: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { changeFormData, formData } = useSendRecipeForm();

  const { addToast } = useToast();

  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          ingredients: Yup.string().required('O campo é obrigatorio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formDataDto: StepsFormData = {
          ...data,
        };

        changeFormData(formDataDto);

        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          // Validation failed

          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [addToast, changeFormData]
  );

  const defaultValue = useMemo(() => {
    return {
      ingredients: formData.ingredients,
    };
  }, [formData]);

  return (
    <ContainerScroll>
      <Container>
        <StepHeader>
          <h1>Ingredientes</h1>
          <p>
            Coloque um ingrediente por linha, não adicione hífem ou numeração
          </p>
        </StepHeader>
        <Form
          ref={formRef}
          onSubmit={handleFormSubmit}
          initialData={defaultValue}
        >
          <TextArea
            name="ingredients"
            labelName="O que vamos precisar para essa receita?"
          />

          <ContainerButton>
            <button type="submit">Próxima etapa</button>
          </ContainerButton>
        </Form>
      </Container>
    </ContainerScroll>
  );
};

export default StepFour;
