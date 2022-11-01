import React from "react";

function ImageText({ attr }) {
  return (
    <section id="imgTextType" className={`image__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">고양이가 빠지면 섭하다</h2>
      <div className={`imgText__inner ${attr[2]}`}>
        <div className="imgText__txt">
          <span>고양이 영역</span>
          <h3>고양이가 빠지면 섭하다</h3>
          <p>
            고양이가 성격은 나쁘다지만, <br />
            강아지들도 다 좋은 녀석들만은 아니잖아요.
          </p>
          <ul>
            <li>
              <a href="/">Persian</a>
            </li>
            <li>
              <a href="/">Siamese</a>
            </li>
            <li>
              <a href="/">Sphynx</a>
            </li>
            <li>
              <a href="/">ragdoll</a>
            </li>
            <li>
              <a href="/">Scottish Fold</a>
            </li>
            <li>
              <a href="/">Turkish angora</a>
            </li>
          </ul>
        </div>
        <div className="imgText__img img1">
          <a href="/">옷자락 물어뜯기기</a>
        </div>
        <div className="imgText__img img2">
          <a className="blue" href="/">
            냥냥펀치 후드려 맞기
          </a>
        </div>
      </div>
    </section>
  );
}

export default ImageText;
