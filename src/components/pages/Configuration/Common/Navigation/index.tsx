import { FaUser } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';

import { Menu } from './styles';

interface NavigationProps {
  currentStep: 'profile' | 'password';
}

const Navigation: React.FC<NavigationProps> = ({ currentStep }) => {
  return (
    <Menu>
      <li className={currentStep === 'profile' ? 'active' : ''}>
        <FaUser />
        Informações da conta
      </li>
      <li className={currentStep === 'password' ? 'active' : ''}>
        <FiShield />
        Senha
      </li>
    </Menu>
  );
};

export default Navigation;
