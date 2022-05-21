import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { MdClose } from 'react-icons/md';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import Input from '@/components/common/DefaultInput';
import TextArea from '@/components/common/DefaultTextArea';
import Select from '@/components/common/DefaultSelect';
import DropImage from '@/components/common/DefaultDropImage';

import {
  useSendRecipeForm,
  RecipeInstructionProps,
  RecipeInstructionFormProps,
} from '../../hooks/SendRecipeForm';

import {
  Container,
  ContainerButton,
  Modal,
  ModalBackground,
  ModalContent,
  ModalHeader,
} from './styles';

export interface Option {
  value: string;
  label: string;
}

interface FormRecipeInstructionsModalProps {
  title?: string;
  defaultFormValue?: RecipeInstructionProps;
  modalOptions: Option[];
  modalSteps: RecipeInstructionProps[];
  changeRecipeInstructions(data: RecipeInstructionProps): void;
}

const FormRecipeInstructionsModal: React.FC<FormRecipeInstructionsModalProps> =
  ({
    title,
    defaultFormValue,
    modalOptions,
    modalSteps,
    changeRecipeInstructions,
  }) => {
    const formRef = useRef<FormHandles>(null);
    const [options, setOptions] = useState(() => {
      return modalOptions.filter(item => {
        const isDuplicated = !modalSteps.some(
          step => step.type.value === item.value
        );
        const isDefault = item.value === defaultFormValue?.type?.value;

        if (isDefault) {
          return true;
        }
        return isDuplicated;
      });
    });
    const {
      currentStep,
      changeCurrentStep,
      changesIsModalRecipeInstructionOpen,
    } = useSendRecipeForm();

    const { addToast } = useToast();

    const handleFormSubmit = useCallback(
      async (data: RecipeInstructionFormProps) => {
        console.log('data', data);
        try {
          formRef.current?.setErrors({});
          const schema = Yup.object({
            rules: Yup.string().required('O campo é obrigatorio'),
            type: Yup.array().min(
              1,
              'Selecione que tipo de etapa vamos contar'
            ),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          addToast({
            title: 'ae carai',
            description: 'deu certo',
            type: 'success',
          });
          const firstOption = data.type[0];
          const payload: RecipeInstructionProps = {
            ...data,
            type: firstOption,
            id: defaultFormValue?.id || Date.now(),
          };

          changeRecipeInstructions(payload);
          // changeCurrentStep('two');
          console.log(payload);
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
      [addToast, changeRecipeInstructions]
    );

    const modalTitle = useMemo(() => {
      return title || 'modal';
    }, [title]);

    return (
      <Modal>
        <ModalBackground />
        <ModalContent>
          <ModalHeader>
            <h3>{modalTitle}</h3>
            <button
              type="button"
              onClick={() => {
                changesIsModalRecipeInstructionOpen(false);
              }}
            >
              <MdClose size={24} />
            </button>
          </ModalHeader>
          <Container>
            <Form
              ref={formRef}
              onSubmit={handleFormSubmit}
              initialData={defaultFormValue}
            >
              <Select
                name="type"
                label="Qual etapa da receita vamos detalhar ?"
                propOptions={options}
                placeholder="Selecione..."
              />
              <TextArea name="rules" labelName="Como preparar essa etapa ?" />
              <ContainerButton>
                <button type="submit">Concluir</button>
              </ContainerButton>
            </Form>
          </Container>
        </ModalContent>
      </Modal>
    );
  };

export default FormRecipeInstructionsModal;
