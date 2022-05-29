import Head from 'next/head';
// import FirstFoldImage from '@/assets/images/home_first_folk_image.svg';
import FirstFoldBackgroundImage from '@/assets/images/home_first_folk_background-image.svg';
import FirstFoldBackgroundDetail from '@/assets/images/home_first_folk_background-detail.svg';
import { BiSearch } from 'react-icons/bi';

import TopRecipeItemHome from '@/components/pages/Home/TopRecipeItemHome';
import SkeletonScreen from '@/components/common/SkeletonScreen';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  HomeBackground,
  FirstFold,
  FirstFoldContainer,
  FirstFoldDetails,
  InputContainer,
  TopReciperSection,
  TopReciperSectionContainer,
  TopReciperSectionGridContainer,
  CategorySection,
  CategorySectionContainer,
  CategorySectionGrid,
} from '../styles/pages/Home';

const Home: React.FC = () => {
  const [existTopRecipeItem, setExistTopRecipeItem] = useState<Boolean>();

  setTimeout(() => {
    setExistTopRecipeItem(true);
  }, 5000);

  return (
    <>
      <Head>
        <title>Início | Site de receitas</title>
      </Head>
      <HomeBackground>
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
          <TopReciperSectionContainer>
            <h2>Top receitas da semana</h2>
            {existTopRecipeItem ? (
              <TopReciperSectionGridContainer>
                <TopRecipeItemHome position={1} href="/receita/strogonoff" />
                <TopRecipeItemHome position={2} href="/receita/strogonoff" />
                <TopRecipeItemHome position={3} href="/receita/strogonoff" />
                <TopRecipeItemHome position={4} href="/receita/strogonoff" />
                <TopRecipeItemHome position={5} href="/receita/strogonoff" />
                <TopRecipeItemHome position={6} href="/receita/strogonoff" />
              </TopReciperSectionGridContainer>
            ) : (
              <TopReciperSectionGridContainer>
                <SkeletonScreen type="reciperHome" />
              </TopReciperSectionGridContainer>
            )}
          </TopReciperSectionContainer>
        </TopReciperSection>
        <CategorySection>
          <CategorySectionContainer>
            <h2>Não encontrou o que precisa ? </h2>
            <p>Olhe nossas categorias</p>
            <CategorySectionGrid>
              <Link href="/category">
                <a>
                  <img
                    src="/images/home_category-default.png"
                    alt="default category"
                  />
                  <div>
                    <span>Comida saudável</span>
                  </div>
                </a>
              </Link>
              <Link href="/category">
                <a>
                  <img
                    src="/images/home_category-default.png"
                    alt="default category"
                  />
                  <div>
                    <span>Comida saudável</span>
                  </div>
                </a>
              </Link>
              <Link href="/category">
                <a>
                  <img
                    src="/images/home_category-default.png"
                    alt="default category"
                  />
                  <div>
                    <span>Comida saudável</span>
                  </div>
                </a>
              </Link>
              <Link href="/category">
                <a>
                  <img
                    src="/images/home_category-default.png"
                    alt="default category"
                  />
                  <div>
                    <span>Comida saudável</span>
                  </div>
                </a>
              </Link>
            </CategorySectionGrid>
          </CategorySectionContainer>
        </CategorySection>
      </HomeBackground>
    </>
  );
};

export default Home;
