import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

export type StepFormType = 'one' | 'two' | 'three' | 'four';

interface SendRecipeFormContextData {
  currentStep: StepFormType;
  changeCurrentStep(value: StepFormType): void;
}

export const SendRecipeFormContext = createContext(
  {} as SendRecipeFormContextData
);

export const SendRecipeFormProvider: React.FC = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<StepFormType>('three');

  const changeCurrentStep = useCallback((value: StepFormType) => {
    setCurrentStep(value);
  }, []);

  return (
    <SendRecipeFormContext.Provider value={{ currentStep, changeCurrentStep }}>
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
