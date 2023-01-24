import React, { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import icon from '../../../../assets/icon.svg';

const SlideNextButton = () => {
  const swiper = useSwiper();

  return (
    <button type="button" onClick={() => swiper.slideNext()}>
      <FontAwesomeIcon icon={faChevronRight} />
    </button>
  );
};

const SlidePrevButton = () => {
  const swiper = useSwiper();

  return (
    <button type="button" onClick={() => swiper.slidePrev()}>
      <FontAwesomeIcon icon={faChevronLeft} />
    </button>
  );
};

const Slider = () => {
  const [activePhoto, setActivePhoto] = useState(0);
  console.log(activePhoto);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSwiper={(swiper) => {
        const index = swiper.activeIndex;

        setActivePhoto(index);
      }}
      onSlideChange={(swiper) => {
        const index = swiper.activeIndex;

        setActivePhoto(index);
      }}
    >
      {[0, 1, 2, 3, 4].map((index) => (
        <SwiperSlide tabIndex={index} key={index}>
          <img width="200" alt="icon" src={icon} />
        </SwiperSlide>
      ))}
      <div className="commands">
        <SlidePrevButton />
        <SlideNextButton />
      </div>
    </Swiper>
  );
};

export default Slider;
