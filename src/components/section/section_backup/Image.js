import React from "react";

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>귀여운 댕댕이</h2>
      <p>뭐니뭐니해도 귀여운 동물 하면 강아지죠. 우선 강아지들을 보세요.</p>
      <div className={`image__inner ${props.attr[2]}`}>
        <div className="image img1">
          <h3 className="image__title">Shih Tzu</h3>
          <p className="image__desc">
            표정이 약간 멍청해 보이는 게 정말 귀엽습니다.
            <br />
            실제로도 멍청할 것 같습니다.
          </p>
          <a className="image__btn" href="/" title="자세히 보기">
            <div className="more">자세히 보기</div>
          </a>
        </div>
        <div className="image img2">
          <h3 className="image__title">French Bulldog</h3>
          <p className="image__desc">
            볼수록 매력있는 견종입니다.
            <br />
            침을 아주 줄줄 흘린다고 합니다.
          </p>
          <a className="image__btn blue" href="/" title="자세히 보기">
            <div className="more">자세히 보기</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Image;
