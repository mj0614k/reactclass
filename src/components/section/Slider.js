import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const sliderText = {
  subTitle: "ANIMAL",
  title: "CUTE ANIMAL",
  desc1: "숙제에 지친 이들을 위한 힐링 공간입니다.",
  desc2: "귀여운 동물들을 보며 잠시나마 현실도피를 합시다.",
  btnLink: "/",
  siteLink: "/",
};

function Slider(props) {
  return (
    <section id="sliderType" class="slider__inner nexon">
      <div className="slider__inner">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="desc">
              <span>{sliderText.subTitle}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br></br>
                {sliderText.desc2}
              </p>
              <div class="btn">
                <a href={`${sliderText.btnLink}`}>자세히 보기</a>
                <a href={`${sliderText.siteLink}`} class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{sliderText.subTitle}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br></br>
                {sliderText.desc2}
              </p>
              <div class="btn">
                <a href={`${sliderText.btnLink}`}>자세히 보기</a>
                <a href={`${sliderText.siteLink}`} class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>{sliderText.subTitle}</span>
              <h3>{sliderText.title}</h3>
              <p>
                {sliderText.desc1}
                <br></br>
                {sliderText.desc2}
              </p>
              <div class="btn">
                <a href={`${sliderText.btnLink}`}>자세히 보기</a>
                <a href={`${sliderText.siteLink}`} class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Slider;
