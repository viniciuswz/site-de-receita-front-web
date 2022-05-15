import { createContext, useCallback, useContext, useState } from 'react';

export type StepFormType = 'one' | 'two' | 'three' | 'four';

export interface Option {
  value: string;
  label: string;
}

export interface RecipeInstructionProps {
  type: Option;
  rules: string;
  id: number;
}

export interface RecipeInstructionFormProps
  extends Omit<RecipeInstructionProps, 'type'> {
  type: Option[];
}

export interface StepsFormData {
  baseInfo?: {
    title: string;
    description: string;
    image: File[];
    category: Option[];
  };
  howToMake?: {
    isStages: boolean;
    instructions: RecipeInstructionProps[];
  };
  ingredients?: string;
}

interface SendRecipeFormContextData {
  currentStep: StepFormType;
  changeCurrentStep(value: StepFormType): void;

  isModalRecipeInstructionOpen: boolean;
  changesIsModalRecipeInstructionOpen(value: boolean): void;

  formData: StepsFormData;
  changeFormData(value: StepsFormData): void;
}

export const SendRecipeFormContext = createContext(
  {} as SendRecipeFormContextData
);

export const SendRecipeFormProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<StepFormType>('one');
  const [isModalRecipeInstructionOpen, setIsModalRecipeInstructionOpen] =
    useState(false);
  const [formData, setFormData] = useState<StepsFormData>({} as StepsFormData);

  const changeCurrentStep = useCallback((value: StepFormType) => {
    setCurrentStep(value);
  }, []);

  const changesIsModalRecipeInstructionOpen = useCallback((value: boolean) => {
    setIsModalRecipeInstructionOpen(value);
  }, []);

  const changeFormData = useCallback((value: StepsFormData) => {
    setFormData(oldValue => {
      return {
        ...oldValue,
        ...value,
      };
    });
  }, []);

  return (
    <SendRecipeFormContext.Provider
      value={{
        currentStep,
        changeCurrentStep,
        isModalRecipeInstructionOpen,
        changesIsModalRecipeInstructionOpen,
        formData,
        changeFormData,
      }}
    >
      {children}
    </SendRecipeFormContext.Provider>
  );
};

export function useSendRecipeForm(): SendRecipeFormContextData {
  const context = useContext(SendRecipeFormContext);

  if (!context) {
    throw new Error(
      'useSendRecipeForm must be used within an SendRecipeProvider'
    );
  }

  return context;
}
