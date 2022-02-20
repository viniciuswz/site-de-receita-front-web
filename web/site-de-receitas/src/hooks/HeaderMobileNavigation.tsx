import { createContext, useContext, useCallback, useState } from 'react';

export type StepsAvailable = 'initial' | 'category' | 'empty';

interface HeaderMobileNavigationContextData {
  changeStep(location: StepsAvailable): void;
  changeTransition(location: StepsAvailable): void;
  currentStep: StepsAvailable;
  currentTransition: StepsAvailable[];
  closeMenuLeft(): void;
  openMenuLeft(): void;
  isMenuLeftOpen: boolean;
}

const HeaderMobileNavigationContext =
  createContext<HeaderMobileNavigationContextData>(
    {} as HeaderMobileNavigationContextData
  );

const HeaderMobileNavigationProvider: React.FC = ({ children }) => {
  const [isMenuLeftOpen, setIsMenuLeftOpen] = useState(false);

  const [currentStep, setCurrentStep] = useState<StepsAvailable>('initial');
  const [currentTransition, setCurrentTransition] = useState<StepsAvailable[]>(
    []
  );

  const changeStep = useCallback((location: StepsAvailable) => {
    // setCurrentStep('empty');
    // setTimeout(() => {
    setCurrentStep(location);
    // }, 5000);
  }, []);
  const changeTransition = useCallback((location: StepsAvailable) => {
    // setCurrentStep('empty');
    setCurrentTransition([]);
    setTimeout(() => {
      setCurrentTransition([location]);
    }, 200);
  }, []);

  const openMenuLeft = useCallback(() => {
    changeStep('initial');
    setTimeout(() => {
      setIsMenuLeftOpen(true);
    }, 200);
  }, [changeStep]);

  const closeMenuLeft = useCallback(() => {
    changeStep('empty');
    setTimeout(() => {
      setIsMenuLeftOpen(false);
    }, 200);
  }, [changeStep]);

  return (
    <HeaderMobileNavigationContext.Provider
      value={{
        currentStep,
        changeStep,
        changeTransition,
        currentTransition,
        closeMenuLeft,
        openMenuLeft,
        isMenuLeftOpen,
      }}
    >
      {children}
    </HeaderMobileNavigationContext.Provider>
  );
};

function useHeaderMobileNavigation(): HeaderMobileNavigationContextData {
  const context = useContext(HeaderMobileNavigationContext);

  if (!context) {
    throw new Error(
      'useHeaderMobileNavigationContext must be use within a HeaderMobileNavigationContextProvider'
    );
  }
  return context;
}

export { HeaderMobileNavigationProvider, useHeaderMobileNavigation };
