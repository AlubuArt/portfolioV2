import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Gallery.module.css";
import classNames from "classNames";
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
import { Container } from "../../4-Layouts/Container";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export interface GalleryProps {
  className?: string;
  slides: any[];
}

export const Gallery: React.FC<GalleryProps> = ({ className, slides }) => {
  return (
    <Container width={"full"} spacing={'lg'}>
      <div className={styles.Gallery}>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
      >
        {slides.map((slide, index) => {
          return (
            <SwiperSlide key={index} className={styles.SwiperSlide_slide}>
              <Image
                alt=""
                width={16}
                height={9}
                layout="responsive"
                objectFit="fill"
                className={styles.SwiperSlide_slide}
                src={slide}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </Container>
  );
};
