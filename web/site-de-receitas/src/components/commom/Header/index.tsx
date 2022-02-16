import Logo from '@/assets/images/logo.svg';

import { BiSearch, BiChevronDown } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';

import Link from 'next/link';
import {
  Container,
  Content,
  ButtonMenu,
  SearchContainer,
  MyAccountHeaderContainer,
  MyAccountProfile,
  MenuContainer,
  MenuContent,
  MenuContainerLeft,
  MenuContainerRight,
  MenuContainerRightItem,
  MenuContainerRightOverlay,
} from './styles';

const Header: React.FC = () => {
  return (
    <Content>
      <Container>
        <Logo />
        <ButtonMenu>
          <div>
            <span />
            <span />
            <span />
          </div>
          <span>Menu</span>
        </ButtonMenu>
        <SearchContainer>
          <input type="text" placeholder="O que você quer preparar hoje ?" />
          <button type="button">
            <BiSearch size={24} color="#707070" />
          </button>
        </SearchContainer>
        <MyAccountHeaderContainer>
          <div>
            <a href="#">
              <IoCartOutline color="#472e2e" size={26} />
            </a>
            <a href="#">
              <FaRegBell color="#472e2e" size={22} />
            </a>
          </div>
          <MyAccountProfile>
            <a href="#">
              <div>
                <img src="/images/default-profile.png" alt="" />
              </div>
              <span>Vinícius Araújo</span>
            </a>
            <BiChevronDown />
          </MyAccountProfile>
        </MyAccountHeaderContainer>
      </Container>
      <MenuContent>
        <MenuContainer>
          <MenuContainerLeft>
            <a href="#" className="category">
              Nome categoria
            </a>
            <a href="#" className="category">
              Nome categoria
            </a>
            <a href="#" className="category">
              Nome categoria
            </a>
            <a href="#" className="category">
              Nome categoria
            </a>
            <a href="#" className="category">
              Nome categoria
            </a>
            <a href="#" className="category">
              Nome categoria
            </a>

            <a href="#" className="all">
              Todas categorias
            </a>
          </MenuContainerLeft>
          <MenuContainerRight>
            <h3>Destaques</h3>
            <div>
              <Link href="#">
                <MenuContainerRightItem>
                  <img src="/images/receitas/default_image.png" alt="aaaa" />
                  <MenuContainerRightOverlay>
                    <div>
                      <h3>Strogonoff de frango</h3>
                    </div>
                  </MenuContainerRightOverlay>
                </MenuContainerRightItem>
              </Link>
              <Link href="#">
                <MenuContainerRightItem>
                  <img src="/images/receitas/default_image.png" alt="aaaa" />
                  <MenuContainerRightOverlay>
                    <div>
                      <h3>Strogonoff de frango</h3>
                    </div>
                  </MenuContainerRightOverlay>
                </MenuContainerRightItem>
              </Link>
            </div>
          </MenuContainerRight>
        </MenuContainer>
      </MenuContent>
    </Content>
  );
};

export default Header;
