import { useCallback, useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import Input from '@/components/common/DefaultInput';
import TextArea from '@/components/common/DefaultTextArea';
import Select from '@/components/common/DefaultSelect';
import DropImage from '@/components/common/DefaultDropImage';

import { useSendRecipeForm } from '../../../hooks/SendRecipeForm';

import { ButtonSubmit } from './styles';

const StepOne: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { currentStep, changeCurrentStep } = useSendRecipeForm();

  const { addToast } = useToast();

  const handleFormSubmit = useCallback(
    async data => {
      console.log('data', data);
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          titulo_da_receita: Yup.string().required('O campo é obrigatorio'),
          descricao: Yup.string().required('O campo é obrigatorio'),
          categoria: Yup.array().min(1, 'Selecione uma categoria'),
          imagens: Yup.array().min(1, 'Envie pelo menos uma imagem'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          title: 'ae carai',
          description: 'deu certo',
          type: 'success',
        });
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
    [addToast]
  );

  return (
    <div>
      <h1>Etapa 1</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <Input name="titulo_da_receita" labelName="Título da receita" />
        <TextArea name="descricao" labelName="Descrição" />
        <Select name="categoria" label="Catregoria" />
        <DropImage name="imagens" label="Fotos" />

        <ButtonSubmit type="submit"> enviar</ButtonSubmit>
      </Form>
    </div>
  );
};

export default StepOne;
