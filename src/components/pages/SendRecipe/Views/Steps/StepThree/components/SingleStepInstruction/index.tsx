import { useCallback, useEffect, useMemo, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import TextArea from '@/components/common/DefaultTextArea';

import {
  StepsFormData,
  useSendRecipeForm,
} from '../../../../../hooks/SendRecipeForm';

import {
  ContainerButton,
  Container,
  ContainerScroll,
  StepHeader,
} from '../../../styles';

const StepFour: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { changeCurrentStep, changeFormData, formData } = useSendRecipeForm();

  const { addToast } = useToast();

  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          rules: Yup.string().required('O campo é obrigatorio'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formDataDto: StepsFormData = {
          howToMake: {
            isStages: false,
            instructions: [{ id: 123, ...data, type: 'default' }],
          },
        };

        changeFormData(formDataDto);

        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });

        changeCurrentStep('four');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          // Validation failed

          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [addToast, changeCurrentStep, changeFormData]
  );

  useEffect(() => {
    // formData.howToMake?.instructions.map()
  }, [formData]);

  const defaultValue = useMemo(() => {
    if (formData?.howToMake?.instructions.length) {
      return { rules: formData.howToMake?.instructions[0].rules };
    }
    return {};
  }, [formData]);

  return (
    <ContainerScroll>
      <Container>
        <StepHeader>
          <h1>Modo de preparo</h1>
          <p>
            Coloque uma isntrução por linha, não adicione hífem ou numeração
          </p>
        </StepHeader>
        <Form
          ref={formRef}
          onSubmit={handleFormSubmit}
          initialData={defaultValue}
        >
          <TextArea name="rules" labelName="Como fazer essa receita?" />

          <ContainerButton>
            <button type="submit">Próxima etapa</button>
          </ContainerButton>
        </Form>
      </Container>
    </ContainerScroll>
  );
};

export default StepFour;
