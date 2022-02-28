/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper';

import { Container } from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const CategorySubcategorySlide: React.FC = () => {
  return (
    <Container>
      <h2>Conheça as nossas subcategorias</h2>
      <Swiper
        loop
        slidesPerView={2}
        spaceBetween={10}
        navigation
        freeMode
        modules={[Navigation, FreeMode]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,

            spaceBetween: 8,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 2,

            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 8,
            slidesPerGroup: 4,
            spaceBetween: 24,
          },
        }}
        className="subcategories-slide"
      >
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/home_category-default.png" alt="" />
          <p>Categoria</p>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default CategorySubcategorySlide;
