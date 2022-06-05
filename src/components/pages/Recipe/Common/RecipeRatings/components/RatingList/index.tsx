/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import SkeletonScreen from '@/components/common/SkeletonScreen';

import { BiChevronDown } from 'react-icons/bi';
import { AiFillStar } from 'react-icons/ai';

import { IoMdThumbsDown, IoMdThumbsUp } from 'react-icons/io';
import { useState } from 'react';
import {
  Container,
  Header,
  RatingListFilterButton,
  RatingListFilterDropdow,
  RatingListItem,
  RatingListItemHeader,
  RatingListItemHeaderInfo,
  RatingListItemHeaderPhoto,
  RatingListItemContent,
  RatingListItemText,
  RatingListPhotosUploaded,
  RatingListOpinion,
  RatingListLoadMore,
} from './styles';

const RatingList: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return loading ? (
    <>
      <Container>
        <Header>
          <h3>Filtrando por</h3>
          <RatingListFilterButton type="button">
            <span>Todas as avaliações</span>
            <BiChevronDown />
          </RatingListFilterButton>
        </Header>
        <RatingListItem>
          <RatingListItemHeaderPhoto>
            <img src="/images/default-profile.png" alt="profile" />
          </RatingListItemHeaderPhoto>
          <RatingListItemContent>
            <RatingListItemHeader>
              <RatingListItemHeaderInfo>
                <p>Vinícius Araújo da Silva</p>
                <div>
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <span> Há x meses</span>
                </div>
              </RatingListItemHeaderInfo>
            </RatingListItemHeader>
            <RatingListItemText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sapiente dolore optio distinctio dolorum reprehenderit, aut
              placeat cum unde voluptatum ullam sequi, illum accusantium sit
              itaque nisi aperiam nemo eos?
            </RatingListItemText>
            <RatingListPhotosUploaded>
              <Swiper
                spaceBetween={16}
                slidesPerView={2}
                className="photosUploaded"
              >
                <SwiperSlide>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </SwiperSlide>
              </Swiper>
              <button type="button">+2fotos</button>
            </RatingListPhotosUploaded>
            <RatingListOpinion>
              <p>Esta avaliação foi útil ?</p>
              <div>
                <button className="rating" type="button">
                  <IoMdThumbsUp />
                </button>
                <button className="rating" type="button">
                  <IoMdThumbsDown />
                </button>
                <button className="delate" type="button">
                  Denunciar
                </button>
              </div>
            </RatingListOpinion>
          </RatingListItemContent>
        </RatingListItem>
        <RatingListItem>
          <RatingListItemHeaderPhoto>
            <img src="/images/default-profile.png" alt="profile" />
          </RatingListItemHeaderPhoto>
          <RatingListItemContent>
            <RatingListItemHeader>
              <RatingListItemHeaderInfo>
                <p>Vinícius Araújo da Silva</p>
                <div>
                  <div>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
                  <span> Há x meses</span>
                </div>
              </RatingListItemHeaderInfo>
            </RatingListItemHeader>
            <RatingListItemText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              sapiente dolore optio distinctio dolorum reprehenderit, aut
              placeat cum unde voluptatum ullam sequi, illum accusantium sit
              itaque nisi aperiam nemo eos?
            </RatingListItemText>
            <RatingListPhotosUploaded>
              <Swiper
                spaceBetween={16}
                slidesPerView={2}
                className="photosUploaded"
              >
                <SwiperSlide>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/images/receitas/default_image.png" alt="recipe" />
                </SwiperSlide>
              </Swiper>
              <button type="button">+2fotos</button>
            </RatingListPhotosUploaded>
            <RatingListOpinion>
              <p>Esta avaliação foi útil ?</p>
              <div>
                <button className="rating" type="button">
                  <IoMdThumbsUp />
                </button>
                <button className="rating" type="button">
                  <IoMdThumbsDown />
                </button>
                <button className="delate" type="button">
                  Denunciar
                </button>
              </div>
            </RatingListOpinion>
          </RatingListItemContent>
        </RatingListItem>
        <RatingListLoadMore type="button">
          Carregar mais avaliações
        </RatingListLoadMore>
      </Container>
    </>
  ) : (
    <>
      <Container>
        <Header>
          <SkeletonScreen type="titleH3" />
          <SkeletonScreen type="BtnSelect" />
        </Header>
        <RatingListItem>
          <RatingListItemHeaderPhoto>
            <SkeletonScreen type="perfil" />
          </RatingListItemHeaderPhoto>
          <RatingListItemContent>
            <RatingListItemHeader>
              <RatingListItemHeaderInfo>
                <SkeletonScreen type="text" />
                <div>
                  <div>
                    <SkeletonScreen type="star" />
                  </div>
                  <SkeletonScreen type="span" />
                </div>
              </RatingListItemHeaderInfo>
            </RatingListItemHeader>
            <RatingListItemText>
              <SkeletonScreen type="text" />
              <SkeletonScreen type="text" />
              <SkeletonScreen type="text" />
            </RatingListItemText>
            <RatingListPhotosUploaded>
              <Swiper
                spaceBetween={16}
                slidesPerView={2}
                className="photosUploaded"
              >
                <SwiperSlide>
                  <SkeletonScreen type="comentsImg" />
                </SwiperSlide>
              </Swiper>
            </RatingListPhotosUploaded>
            <RatingListOpinion>
              <SkeletonScreen type="title" />
              <div>
                <SkeletonScreen type="social_share" />
                <SkeletonScreen type="social_share" />
                <SkeletonScreen type="titleH4" />
              </div>
            </RatingListOpinion>
          </RatingListItemContent>
        </RatingListItem>
        <RatingListItem>
          <RatingListItemHeaderPhoto>
            <SkeletonScreen type="perfil" />
          </RatingListItemHeaderPhoto>
          <RatingListItemContent>
            <RatingListItemHeader>
              <RatingListItemHeaderInfo>
                <SkeletonScreen type="text" />
                <div>
                  <div>
                    <SkeletonScreen type="star" />
                  </div>
                  <SkeletonScreen type="span" />
                </div>
              </RatingListItemHeaderInfo>
            </RatingListItemHeader>
            <RatingListItemText>
              <SkeletonScreen type="text" />
              <SkeletonScreen type="text" />
              <SkeletonScreen type="text" />
            </RatingListItemText>
            <RatingListPhotosUploaded>
              <Swiper
                spaceBetween={16}
                slidesPerView={2}
                className="photosUploaded"
              >
                <SwiperSlide>
                  <SkeletonScreen type="comentsImg" />
                </SwiperSlide>
              </Swiper>
            </RatingListPhotosUploaded>
            <RatingListOpinion>
              <SkeletonScreen type="title" />
              <div>
                <SkeletonScreen type="social_share" />
                <SkeletonScreen type="social_share" />
                <SkeletonScreen type="titleH4" />
              </div>
            </RatingListOpinion>
          </RatingListItemContent>
        </RatingListItem>
      </Container>
    </>
  );
};

export default RatingList;
