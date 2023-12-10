import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Scrollbar, A11y,Autoplay } from 'swiper/modules';
import {SwiperImage1,SwiperImage2,SwiperImage3,SwiperImage4} from '../../assets/index'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperTool() {
  const SwiperImages=[SwiperImage1,SwiperImage2,SwiperImage3,SwiperImage4];

  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        className="h-[40rem] w-[29rem] object-cover"
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}

        pagination={{ clickable: true }}
        loop={true}
      >
        {SwiperImages.map((images) => {
          return (
            <SwiperSlide>
              <img
                className="h-[40rem] object-cover"
                src={images}
                alt="hero-image"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default SwiperTool;