import Logo from '@/assets/images/logo.svg';

import { BiSearch, BiChevronDown } from 'react-icons/bi';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegBell } from 'react-icons/fa';

import {
  Container,
  Content,
  ButtonMenu,
  SearchContainer,
  MyAccountHeaderContainer,
  MyAccountProfile,
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
    </Content>
  );
};

export default Header;
