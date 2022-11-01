import React from "react";

const bannerText = {
  title: "잘 보셨나요?",
  desc: "이제 현실을 직시하시고, 아래의 주소를 눌러 깃허브로 이동하세요.",
  subDesc: "Get out and do homework!",
};

function Banner(props) {
  return (
    <section id="bannerType" className={`banner__wrap ${props.fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">{bannerText.title}</h3>
        <p className="desc">
          {bannerText.desc}
          <a href="https://github.com/" title="깃허브 페이지로 이동">
            github.com
          </a>
        </p>
        <span className="small">{bannerText.subDesc}</span>
      </div>
    </section>
  );
}

export default Banner;
