import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Options } from 'react-select';

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

interface StepsFormData {
  baseInfo?: {
    title: string;
    description: string;
    image: File[];
    category: Option[];
  };
  HowToMake?: {
    isStages: true;
    instructions: RecipeInstructionProps;
  };
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
  const [currentStep, setCurrentStep] = useState<StepFormType>('three');
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
    setFormData(value);
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
