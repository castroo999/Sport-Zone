
import "./Carossel.css";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import banner1 from "../assets/banner1.png";
import banner5 from "../assets/banner8.png";
import banner2 from "../assets/banner5.png";
import banner3 from "../assets/banner6.png";
import banner4 from "../assets/banner7.png";

export default function Carossel() {
  const banners = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
  ];

  return (
    <div className="container-banner">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectFade,
        ]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        loop={true}
        navigation
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {banners.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="banner">
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}