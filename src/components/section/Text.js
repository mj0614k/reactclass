import React from "react";

const textTitle = {
  title: "글로는 표현하기 힘든 귀여움",
  desc: "네 발 달린 동물들은 다 귀엽다",
};

const textText = [
  {
    textClass: "t1",
    title: "Sloth",
    desc: "남아메리카, 중앙 아메리카의 열대림에 서식하는 동물입니다. 생애의 대부분을 나무에 매달려 보낸다고 합니다. 주*피아가 생각납니다. 못생긴 녀석...",
    btnLink: "/",
  },
  {
    textClass: "t2",
    title: "Chameleon",
    desc: "변화하는 몸의 색이 특징인 동물입니다. 세계 개체 수의 절반이 마다가스카르 섬에 산다고 합니다. 세계 개체 수는 어떻게 측정했을까요? 괜히 이런 게 궁금합니다.",
    btnLink: "/",
  },
  {
    textClass: "t3",
    title: "Meerkat",
    desc: "남아프리카 공화국과 앙골라 사막에 서식합니다. 두 손을 모으고 태양열을 흡수한다고 합니다. 미어캣 울음소리 들어보셨나요? 약간 충격적입니다.",
    btnLink: "/",
  },
  {
    textClass: "t4",
    title: "Koala",
    desc: "호주에 서식하는 유대류입니다. 무리를 만들지 않고 혼자 생활한다고 합니다. 그냥 친구가 없는 건 아닐까요? 이건 어쩌면... 제 이야기일지도 모릅니다.",
    btnLink: "/",
  },
  {
    textClass: "t5",
    title: "Penguin",
    desc: "펭귄은 펭귄목 펭귄과에 속하는 날지 못하는 새의 총칭입니다. 무리에서 생활하는 사회성있는 동물로 유명합니다. 코알라와는 아주 정반대네요. 인싸 동물.",
    btnLink: "/",
  },
  {
    textClass: "t6",
    title: "Alpaca",
    desc: "알파카는 본래 집단 생활을 하는 동물이라 키울 때는 반드시 두마리 짝을 만들어서 키워야 한다고 합니다. 얘가 그 침 뱉는 애 맞죠? 더럽게 침을...",
    btnLink: "/",
  },
];

const TextText = ({ textClass, title, desc, btnLink }) => {
  return (
    <div className={`text ${textClass}`}>
      <h3 className="text__title">{title}</h3>
      <p className="text__desc">{desc}</p>
      <a className="text__btn" href={`${btnLink}`}>
        더보기
      </a>
    </div>
  );
};
function Text(props) {
  return (
    <section
      id="textType"
      className={`text__wrap ${props.attr[0]} ${props.attr[1]}`}
    >
      <span>{textTitle.title}</span>
      <h2>{textTitle.desc}</h2>
      <div className={`text__inner ${props.attr[2]}`}>
        {textText.map((info, index) => (
          <TextText
            key={index}
            textClass={info.textClass}
            title={info.title}
            desc={info.desc}
            btnLink={info.btnLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Text;
