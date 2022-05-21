/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper';
import RecipeItem from '../RecipeItem';
import { ShelfContent, ShelfScroll } from './styles';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

const Shelf: React.FC = () => {
  return (
    <ShelfContent>
      <h3>Vitrine</h3>
      <ShelfScroll>
        <Swiper
          spaceBetween={10}
          navigation
          modules={[FreeMode, Navigation]}
          freeMode
          className="mySwiper"
          slidesPerView="auto"
        >
          <SwiperSlide>
            <RecipeItem />
          </SwiperSlide>
          <SwiperSlide>
            <RecipeItem />
          </SwiperSlide>
        </Swiper>
      </ShelfScroll>
    </ShelfContent>
  );
};

export default Shelf;
