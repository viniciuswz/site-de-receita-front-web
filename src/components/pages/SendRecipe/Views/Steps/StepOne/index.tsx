import { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import Input from '@/components/common/DefaultInput';
import TextArea from '@/components/common/DefaultTextArea';
import Select from '@/components/common/DefaultSelect';
import DropImage from '@/components/common/DefaultDropImage';

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

const StepOne: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { changeCurrentStep, changeFormData, formData } = useSendRecipeForm();
  const [options] = useState([
    { value: 'blues', label: 'test 1' },
    { value: 'rock', label: 'test 2' },
    { value: 'jazz', label: 'test 3' },
    { value: 'orchestra', label: 'test 4' },
  ]);

  const { addToast } = useToast();

  const handleFormSubmit = useCallback(
    async data => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          title: Yup.string().required('O campo é obrigatorio'),
          description: Yup.string().required('O campo é obrigatorio'),
          category: Yup.array().min(1, 'Selecione uma categoria'),
          images: Yup.array()
            .min(1, 'Envie pelo menos uma imagem')
            .max(4, 'você passou do limite de 4 imagens'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const formDataDto: StepsFormData = {
          baseInfo: {
            ...data,
          },
        };

        changeFormData(formDataDto);
        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });
        changeCurrentStep('two');
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

  return (
    <ContainerScroll>
      <Container>
        <StepHeader>
          <h1>Informações básicas</h1>
        </StepHeader>
        <Form
          ref={formRef}
          onSubmit={handleFormSubmit}
          initialData={formData.baseInfo}
        >
          <Input name="title" labelName="Título da receita" />
          <TextArea name="description" labelName="Descrição" />
          <Select
            name="category"
            label="Categoria"
            propOptions={options}
            placeholder="Selecione uma categoria..."
          />
          <DropImage name="images" label="Fotos" />

          <ContainerButton>
            <button type="submit">Próxima etapa</button>
          </ContainerButton>
        </Form>
      </Container>
    </ContainerScroll>
  );
};

export default StepOne;
