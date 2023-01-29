import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from 'renderer/state';
import SlideNextButton from './SlideNextButton';
import SlidePrevButton from './SlidePrevButton';

type SlideContentProps = {
  children: JSX.Element;
};

type SliderProps = {
  images: string[];
};

const SlideContent: React.FC<SlideContentProps> = ({ children }) => {
  return <>{children}</>;
};

const Slider: React.FC<SliderProps> = ({ images }) => {
  // const [activePhoto, setActivePhoto] = useState<string>();
  const dispatch = useDispatch();
  const { setActivePhoto } = bindActionCreators(actionCreators, dispatch);
  const activePhoto = useSelector((state: State) => state.activePhoto);

  // eslint-disable-next-line no-console
  console.log(activePhoto);
  return (
    <>
      <>La foto attiva è {activePhoto}</>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onUpdate={(swiper) => {
          const index = swiper.realIndex;
          const activeSlide = swiper.slides[index];
          const imagePath = activeSlide?.querySelector('img')?.src;

          setActivePhoto(imagePath);
        }}
        onSlideChange={(swiper) => {
          const index = swiper.realIndex;
          const activeSlide = swiper.slides[index];
          const imagePath = activeSlide?.querySelector('img')?.src;

          setActivePhoto(imagePath);
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide tabIndex={index} key={image}>
            <SlideContent>
              <img
                key={image}
                src={`${image}`}
                alt={image}
                style={{ width: '300px', height: 'auto' }}
              />
            </SlideContent>
          </SwiperSlide>
        ))}
        <div className="commands">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
