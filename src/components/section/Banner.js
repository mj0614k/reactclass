import React from "react";

function Banner({ fonts }) {
  return (
    <section id="bannerType" className={`banner__wrap ${fonts}`}>
      <h2 className="blind">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="title">잘 보셨나요?</h3>
        <p className="desc">
          이제 현실을 직시하시고, 아래의 주소를 눌러 깃허브로 이동하세요.
          <a href="https://github.com/" title="깃허브 페이지로 이동">
            github.com
          </a>
        </p>
        <span className="small">Get out and do homework!</span>
      </div>
    </section>
  );
}

export default Banner;
