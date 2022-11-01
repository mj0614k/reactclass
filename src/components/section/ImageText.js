import React from "react";

const imageTextTitle = {
  subTitle: "고양이 영역",
  title: "고양이가 빠지면 섭하다",
  desc: "고양이가 성격은 나쁘다지만, 강아지들도 다 좋은 녀석들만은 아니잖아요.",
  li1: "Persian",
  li2: "Siamese",
  li3: "Sphynx",
  li4: "ragdoll",
  li5: "Scottish Fold",
  li6: "Turkish angora",
};

const imageTextText = [
  {
    imgClass: "img1",
    btnTitle: "옷자락 물어뜯기기",
    btnLink: "/",
    btnClass: "",
  },
  {
    imgClass: "img2",
    btnTitle: "냥냥펀치 후드려 맞기",
    btnLink: "/",
    btnClass: "blue",
  },
];

const ImageTextText = ({ imgClass, btnTitle, btnLink, btnClass }) => {
  return (
    <div className={`imgText__img ${imgClass}`}>
      <a className={`${btnClass}`} href={`${btnLink}`}>
        {btnTitle}
      </a>
    </div>
  );
};

function ImageText(props) {
  return (
    <section
      id="imgTextType"
      className={`image__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <h2 className="blind">고양이가 빠지면 섭하다</h2>
      <div className={`imgText__inner ${props.attr[2]}`}>
        <div className="imgText__txt">
          <span>{imageTextTitle.subTitle}</span>
          <h3>{imageTextTitle.title}</h3>
          <p></p>
          <ul>
            <li>
              <a href="/">{imageTextTitle.li1}</a>
            </li>
            <li>
              <a href="/">{imageTextTitle.li2}</a>
            </li>
            <li>
              <a href="/">{imageTextTitle.li3}</a>
            </li>
            <li>
              <a href="/">{imageTextTitle.li4}</a>
            </li>
            <li>
              <a href="/">{imageTextTitle.li5}</a>
            </li>
            <li>
              <a href="/">{imageTextTitle.li6}</a>
            </li>
          </ul>
        </div>
        {imageTextText.map((info, index) => (
          <ImageTextText
            key={index}
            btnTitle={info.btnTitle}
            imgClass={info.imgClass}
            btnLink={info.btnLink}
            btnClass={info.btnClass}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageText;
