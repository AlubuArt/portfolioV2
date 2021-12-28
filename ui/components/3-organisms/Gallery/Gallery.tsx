import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Gallery.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Container } from "../../4-layouts/Container";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export interface GalleryProps {
  className?: string;
  slides: [];
}

export const Gallery: React.FC<GalleryProps> = ({ className, slides }) => {
  return (
    <Container width={"full"} spacing={'lg'}>
      <div className={styles.Gallery}>
      <Swiper
      className={styles.swiper}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        {slides.map((slide: {url: string}, index) => {
          return (
            <SwiperSlide key={index} className={styles.SwiperSlide_slide}>
              <Image
                alt=""
                width={16}
                height={9}
                layout="responsive"
                objectFit="fill"
                className={styles.SwiperSlide_slide}
                src={slide.url}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </Container>
  );
};

