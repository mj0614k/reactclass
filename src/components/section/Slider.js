import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Slider() {
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
              <span>ANIMAL</span>
              <h3>CUTE ANIMAL</h3>
              <p>
                숙제에 지친 이들을 위한 힐링 공간입니다.
                <br />
                귀여운 동물들을 보며 잠시나마 현실도피를 합시다.
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>ANIMAL</span>
              <h3>CUTE ANIMAL</h3>
              <p>
                숙제에 지친 이들을 위한 힐링 공간입니다.
                <br />
                귀여운 동물들을 보며 잠시나마 현실도피를 합시다.
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
                  사이트 보기
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="desc">
              <span>ANIMAL</span>
              <h3>CUTE ANIMAL</h3>
              <p>
                숙제에 지친 이들을 위한 힐링 공간입니다.
                <br />
                귀여운 동물들을 보며 잠시나마 현실도피를 합시다.
              </p>
              <div class="btn">
                <a href="/">자세히 보기</a>
                <a href="/" class="black">
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
