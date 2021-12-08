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

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export interface GalleryProps {
  className?: string;
  slides: any[];
}

export const Gallery: React.FC<GalleryProps> = ({ className, slides }) => {
  return (
    <div className={classNames(styles.Gallery, className)}>
      <div>
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
                  width="800"
                  height="600"
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
    </div>
  );
};
