import React from "react";

function Card({ attr }) {
  return (
    <section id="cardType" className={`card__wrap ${attr[0]} ${attr[1]}`}>
      <h2>More Cute Animal</h2>
      <p>더 다양한 동물을 원하시나요? 어떤 동물을 좋아하세요?</p>
      <div className={`card__inner ${attr[2]}`}>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg01.jpg" alt="돌고래" />
          </figure>
          <div className="card__body">
            <h3 className="tit">Dolphin</h3>
            <p className="desc">
              돌고래가 그렇게 영악한 동물이라고 하죠. 근데 사실 그 커다란
              바닷속에 멍청한 물고기들 사이에서 저만 똑똑한 돌고래라면 저라도
              다른 물고기들을 장난감으로 생각할 것 같습니다. 지가 바다의 왕이야
              뭐야... 좋은 동물인지 나쁜 동물인지 헷갈리네요.
            </p>
            <a className="brn" href="/">
              더보기
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg02.jpg" alt="라쿤" />
          </figure>
          <div className="card__body">
            <h3 className="tit">Raccoon</h3>
            <p className="desc">
              라쿤인지 너구리인지 구별 방법은 있다지만 굳이 따지고 싶지는
              않네요. 라쿤의 매력포인트는 역시 발바닥이죠. 라쿤 카페에서
              악수하다가 팔찌를 빼앗겼던 안 좋은 기억이 떠오르네요. 저는 팔찌를
              끼면 안 되나 봅니다.
            </p>
            <a className="brn" href="/">
              더보기
            </a>
          </div>
        </article>
        <article className="card">
          <figure className="card__header">
            <img src="assets/img/card_bg03.jpg" alt="돼지" />
          </figure>
          <div className="card__body">
            <h3 className="tit">Pig</h3>
            <p className="desc">
              아기 돼지는 참 귀엽네요. 제가 최근에 혐오스러운 돼지 머리 사진을
              보고, 환장하던 순댓국을 몇 달째 끊고 있습니다. 제가 비위가 나쁜
              편은 아닌데 진짜... 궁금하시면, 아래 더보기를 클릭하시면 아무것도
              안 나옵니다.
            </p>
            <a className="brn" href="/">
              더보기
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Card;
