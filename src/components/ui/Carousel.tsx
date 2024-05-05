import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import c1 from "@/assets/carousel/c1.jpg";
import c2 from "@/assets/carousel/c2.jpg";
import c3 from "@/assets/carousel/c3.jpg";
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
          <img src={c1.src} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={c2.src} />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src={c3.src} />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
