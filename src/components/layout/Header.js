import React from "react";

function Header(props) {
  return (
    <header id="headerType" className={`header__wrap ${props.fonts}`}>
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">CUTE</a>
        </div>
        <nav className="header__menu">
          <ul>
            <li className="active">
              <a href="#sliderType">MAIN</a>
            </li>
            <li>
              <a href="#imageType">DOG</a>
            </li>
            <li>
              <a href="#imgTextType">CAT</a>
            </li>
            <li>
              <a href="#cardType">MORE</a>
            </li>
            <li>
              <a href="#bannerType">BANNER</a>
            </li>
            <li>
              <a href="#textType">ETC</a>
            </li>
            <li>
              <a href="#footerType">FOOTER</a>
            </li>
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">로그인</a>
        </div>
        <div className="header__ham">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;
