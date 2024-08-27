import { useSwiper } from "swiper/react";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex items-center my-5">
      <button onClick={() => swiper.slidePrev()}>
        <TbPlayerTrackPrevFilled />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <TbPlayerTrackNextFilled />
      </button>
    </div>
  );
};
