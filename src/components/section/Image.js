import React from "react";

const imageTitle = {
  title: "귀여운 댕댕이",
  desc: "뭐니뭐니해도 귀여운 동물 하면 강아지죠. 우선 강아지들을 보세요.",
};

const imageText = [
  {
    title: "Shih Tzu",
    desc: "표정이 약간 멍청해 보이는 게 정말 귀엽습니다. 실제로도 멍청할 것 같습니다.",
    imgClass: "img1",
    btnClass: "",
    btnLink: "/",
  },
  {
    title: "French Bulldog",
    desc: "볼수록 매력있는 견종입니다. 침을 아주 줄줄 흘린다고 합니다. 그래도 귀엽습니다.",
    imgClass: "img2",
    btnClass: "blue",
    btnLink: "/",
  },
];

const ImageText = ({ title, desc, imgClass, btnClass, btnLink }) => {
  return (
    <div className={`image ${imgClass}`}>
      <h3 className="image__title">{title}</h3>
      <p className="image__desc">{desc}</p>
      <a
        className={`image__btn ${btnClass}`}
        href={`${btnLink}`}
        title="자세히 보기"
      >
        <div className="more">자세히 보기</div>
      </a>
    </div>
  );
};

function Image(props) {
  return (
    <section
      id="imageType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2>{imageTitle.title}</h2>
      <p>{imageTitle.desc}</p>
      <div className={`image__inner ${props.attr[2]}`}>
        {imageText.map((info, index) => (
          <ImageText
            key={index}
            title={info.title}
            desc={info.desc}
            imgClass={info.imgClass}
            btnClass={info.btnClass}
            btnLink={info.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Image;
