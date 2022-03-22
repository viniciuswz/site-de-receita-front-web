import { FaUser } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';

import { Menu } from './styles';

const Navigation: React.FC = (pageSelected, setPageSelected) => {
  console.log('page: ', pageSelected);

  return (
    <Menu>
      <li>
        <FaUser />
        Informações da conta
      </li>
      <li>
        <FiShield />
        Senha
      </li>
    </Menu>
  );
};

export default Navigation;
