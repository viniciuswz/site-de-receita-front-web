import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';
import { HeaderMobileNavigationProvider } from './HeaderMobileNavigation';

const AppProvider: React.FC = ({ children }) => {
  return (
    <HeaderMobileNavigationProvider>
      <ToastProvider>{children}</ToastProvider>
    </HeaderMobileNavigationProvider>
  );
};

export default AppProvider;
