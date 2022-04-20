/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FaUser } from 'react-icons/fa';
import { FiShield } from 'react-icons/fi';

import { Menu } from './styles';

import { Steps } from '../../index';

interface NavigationProps {
  currentStep: Steps;
  chooseStep(step: Steps): any;
}

interface NavigationLink {
  name: string;
  componentStep: Steps;
}

const Navigation: React.FC<NavigationProps> = ({ currentStep, chooseStep }) => {
  const navigationLink: NavigationLink[] = [
    {
      name: 'Informações da conta',
      componentStep: 'generalInfoForm',
    },
    {
      name: 'Senha',
      componentStep: 'passwordForm',
    },
  ];

  const navigationLinkIcons = {
    generalInfoForm: <FaUser />,
    passwordForm: <FiShield />,
  };
  return (
    <Menu>
      {navigationLink.map(({ componentStep, name }) => (
        <li
          className={componentStep === currentStep ? 'active' : ''}
          onClick={() => {
            chooseStep(componentStep);
          }}
        >
          {navigationLinkIcons[componentStep]}
          {name}
        </li>
      ))}
    </Menu>
  );
};

export default Navigation;
