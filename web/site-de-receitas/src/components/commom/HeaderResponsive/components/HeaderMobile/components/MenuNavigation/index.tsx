import { useHeaderMobileNavigation } from '@/hooks/HeaderMobileNavigation';
import Link from 'next/link';
import { FaUser } from 'react-icons/fa';
import { MdEdit, MdArticle, MdFastfood, MdOutlineClose } from 'react-icons/md';
import { useSpring, useTransition } from 'react-spring';
// import { IoCloseSharp } from 'react-icons/io';

import {
  Container,
  Content,
  Navigation,
  UserInfo,
  ButtonClose,
} from './styles';

const MenuNavigation: React.FC = () => {
  const { currentStep, changeStep } = useHeaderMobileNavigation();
  const transitions = useTransition(currentStep, {
    from: { left: '-120%', opacity: '0' },
    enter: { left: '0%', opacity: '1' },
    leave: { left: '-120%', opacity: '0' },
  });
  return (
    <>
      <Container>
        <Content>
          <UserInfo>
            <div>
              <img src="/images/default-profile.png" alt="" />
            </div>
            <p>
              Olá,<span>Visitante</span>
            </p>
          </UserInfo>
          <Navigation>
            <h3>Menu</h3>
            <ul>
              <li>
                <Link href="/login">
                  <a>
                    <FaUser />
                    <span>Login</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cadastro">
                  <a>
                    <MdEdit />
                    <span>Cadastro</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>
                    <MdArticle />
                    <span>Enviar Receita</span>
                  </a>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    changeStep('category');
                  }}
                >
                  <MdFastfood />
                  <span>Categorias</span>
                </button>
              </li>
            </ul>
          </Navigation>
        </Content>
      </Container>
    </>
  );
};

export default MenuNavigation;
