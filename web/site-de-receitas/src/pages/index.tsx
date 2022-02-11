import Head from 'next/head';
import FirstFoldImage from '@/assets/images/home_first_folk_image.svg';
import FirstFoldBackgroundImage from '@/assets/images/home_first_folk_background-image.svg';
import FirstFoldBackgroundDetail from '@/assets/images/home_first_folk_background-detail.svg';
import { BiSearch } from 'react-icons/bi';

import TopRecipeItemHome from '@/components/TopRecipeItemHome';

import {
  FirstFold,
  FirstFoldContainer,
  FirstFoldDetails,
  InputContainer,
  TopReciperSection,
  TopReciperSectionContainer,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Início | Site de receitas</title>
      </Head>
      <FirstFold>
        <FirstFoldContainer>
          <img
            src="/images/home_first_folk_image.svg"
            className="main-image"
            alt="fold main"
          />
          <h1>O que vamos cozinhar hoje ?</h1>

          <InputContainer>
            <BiSearch size={30} color="#707070" />
            <input type="text" placeholder="procure por alguma receita" />
          </InputContainer>
        </FirstFoldContainer>
        <FirstFoldDetails>
          <FirstFoldBackgroundImage className="left-icons" />
          <FirstFoldBackgroundDetail className="left-detail" />

          <FirstFoldBackgroundDetail className="right-detail" />
          <FirstFoldBackgroundImage className="right-icons" />
        </FirstFoldDetails>
      </FirstFold>
      <TopReciperSection>
        <h2>Top receitas da semana</h2>
        <TopReciperSectionContainer>
          <TopRecipeItemHome position={1} />
          <TopRecipeItemHome position={2} />
          <TopRecipeItemHome position={3} />
          <TopRecipeItemHome position={4} />
          <TopRecipeItemHome position={5} />
          <TopRecipeItemHome position={6} />
        </TopReciperSectionContainer>
      </TopReciperSection>
    </>
  );
};

export default Home;
