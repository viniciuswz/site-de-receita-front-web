import { useCallback, useState } from 'react';

import { useToast } from '@/hooks/Toast';

import { MdLibraryAdd, MdModeEdit } from 'react-icons/md';

import {
  useSendRecipeForm,
  RecipeInstructionProps,
  StepsFormData,
} from '../../../../../hooks/SendRecipeForm';

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
  StepHeader,
  ContainerButton,
} from '../../../styles';

import FormRecipeInstructionsModal from '../../../../../Components/FormRecipeInstructionsModal';

const MultipleStepsInstructions: React.FC = () => {
  const {
    changeCurrentStep,
    changesIsModalRecipeInstructionOpen,
    isModalRecipeInstructionOpen,
    formData,
    changeFormData,
  } = useSendRecipeForm();

  const [modalTitle, setModalTitle] = useState<string | undefined>();

  const [modalDefaultFormValue, setModalDefaultFormValue] =
    useState<RecipeInstructionProps>({} as RecipeInstructionProps);

  const [modalOptions] = useState([
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
  >(() => {
    return formData.howToMake?.instructions || [];
  });

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

  const validateGoToNextStep = useCallback(() => {
    const formDataDto: StepsFormData = {
      howToMake: {
        instructions: recipeInstructions,
        isStages: true,
      },
    };
    addToast({ title: 'boa', description: 'ultima etapa' });
    changeFormData(formDataDto);
    changeCurrentStep('four');
  }, [changeCurrentStep, changeFormData, recipeInstructions, addToast]);

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

          <ContainerButton>
            <button
              type="button"
              onClick={() => {
                validateGoToNextStep();
              }}
            >
              Proxima etapa
            </button>
          </ContainerButton>
        </Container>
      </ContainerScroll>
    </>
  );
};

export default MultipleStepsInstructions;
