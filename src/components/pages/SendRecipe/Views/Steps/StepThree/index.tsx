import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { useToast } from '@/hooks/Toast';
import * as Yup from 'yup';
import getValidationErrors from '@/utils/getValidationErrors';

import { MdLibraryAdd, MdModeEdit } from 'react-icons/md';

import Input from '@/components/common/DefaultInput';
import TextArea from '@/components/common/DefaultTextArea';
import Select from '@/components/common/DefaultSelect';
import DropImage from '@/components/common/DefaultDropImage';

import {
  useSendRecipeForm,
  RecipeInstructionProps,
} from '../../../hooks/SendRecipeForm';

import {
  ButtonAddMore,
  ButtonAddMoreMessage,
  RecipeInstruction,
  RecipeInstructionContainer,
  RecipeInstructionHeader,
  RecipeInstructionList,
} from './styles';

import {
  Container,
  ContainerScroll,
  ButtonSubmit,
  StepHeader,
} from '../styles';

import FormRecipeInstructionsModal, {
  Option,
} from '../../../Components/FormRecipeInstructionsModal';

const StepThree: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const {
    currentStep,
    changeCurrentStep,
    changesIsModalRecipeInstructionOpen,
    isModalRecipeInstructionOpen,
    formData,
    changeFormData,
  } = useSendRecipeForm();

  const [modalTitle, setModalTitle] = useState<string | undefined>();

  const [modalDefaultFormValue, setModalDefaultFormValue] =
    useState<RecipeInstructionProps>({} as RecipeInstructionProps);

  const [modalOptions, setModalOptions] = useState([
    { value: 'blues', label: 'test 1' },
    { value: 'rock', label: 'test 2' },
    { value: 'jazz', label: 'test 3' },
    { value: 'orchestra', label: 'test 4' },
    { value: 'massa', label: 'Massa' },
    { value: 'recheio', label: 'Recheio' },
  ]);

  const { addToast } = useToast();

  const [recipeInstructions, setRecipeInstructions] = useState<
    RecipeInstructionProps[]
  >([
    {
      type: { value: 'massa', label: 'Massa' },
      rules: `Cortar\nMoer\nasdasdasd`,
      id: 123123123123,
    },
    {
      type: { value: 'recheio', label: 'Recheio' },
      rules: `Cortar\nMoer\nasdasdasd`,
      id: 222222222222,
    },
  ]);

  const editModal = useCallback(
    (stepTypeValue: string) => {
      const filteredInstruction = recipeInstructions.filter(
        item => item.type.value === stepTypeValue
      );

      if (filteredInstruction.length) {
        const parsedInstruction: RecipeInstructionProps = {
          rules: filteredInstruction[0].rules,
          type: filteredInstruction[0].type,
          id: filteredInstruction[0].id,
        };
        setModalDefaultFormValue(parsedInstruction);
        changesIsModalRecipeInstructionOpen(true);
        setModalTitle(filteredInstruction[0].type.label);
      }
    },
    [recipeInstructions, changesIsModalRecipeInstructionOpen]
  );
  const addInstruction = useCallback(() => {
    const title = `Seção ${recipeInstructions.length + 1}`;
    setModalDefaultFormValue({} as RecipeInstructionProps);
    changesIsModalRecipeInstructionOpen(true);
    setModalTitle(title);
  }, [recipeInstructions, changesIsModalRecipeInstructionOpen]);

  const changeRecipeInstructions = useCallback(
    (data: RecipeInstructionProps) => {
      setRecipeInstructions((oldValues: RecipeInstructionProps[]) => {
        const isEditValueIndex = oldValues.findIndex(
          item => item.id === data.id
        );
        if (isEditValueIndex >= 0) {
          const newRecipeInstruction = oldValues;
          newRecipeInstruction[isEditValueIndex] = data;
          return [...newRecipeInstruction];
        }
        return [...oldValues, data];
      });
      changesIsModalRecipeInstructionOpen(false);
    },
    [changesIsModalRecipeInstructionOpen]
  );

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

  useEffect(() => {
    console.log('aaaaaaaaa', recipeInstructions);
  }, [recipeInstructions]);

  return (
    <>
      {isModalRecipeInstructionOpen && (
        <FormRecipeInstructionsModal
          title={modalTitle}
          defaultFormValue={modalDefaultFormValue}
          modalOptions={modalOptions}
          modalSteps={recipeInstructions}
          changeRecipeInstructions={changeRecipeInstructions}
        />
      )}
      <ContainerScroll>
        <Container>
          <StepHeader>
            <h1>Modo de preparo</h1>
            <p>Adicione quantas seções precisar</p>
          </StepHeader>
          <RecipeInstructionList>
            {recipeInstructions.map((item: RecipeInstructionProps) => (
              <RecipeInstructionContainer key={item.type.value}>
                <RecipeInstructionHeader>
                  <h3>{item.type.label}</h3>
                  <button
                    type="button"
                    onClick={() => {
                      editModal(item.type.value);
                    }}
                  >
                    <MdModeEdit size={24} />
                  </button>
                </RecipeInstructionHeader>
                <RecipeInstruction>
                  <ol>
                    {item.rules.split(/\n/).map(rule => (
                      <li>{rule}</li>
                    ))}
                  </ol>
                </RecipeInstruction>
              </RecipeInstructionContainer>
            ))}
          </RecipeInstructionList>

          <ButtonAddMore type="button" onClick={addInstruction}>
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
    </>
  );
};

export default StepThree;
