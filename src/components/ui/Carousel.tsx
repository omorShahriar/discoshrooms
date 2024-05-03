import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
      }}
      loop={true}
    >
      <SwiperSlide>
        <div>
          <img src="/src/assets/carousel/c1.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/src/assets/carousel/c2.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/src/assets/carousel/c3.jpg" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
