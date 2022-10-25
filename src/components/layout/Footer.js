import React from "react";

function Footer({ attr }) {
  return (
    <section id="footerType" className={`footer__wrap ${attr[0]} ${attr[1]}`}>
      <h2 className="blind">푸터 영역</h2>
      <div className={`footer__inner ${attr[2]}`}>
        <div className="footer__menu">
          <div>
            <h3>CUTE</h3>
            <ul>
              <li>
                <a href="/">MAIN</a>
              </li>
              <li>
                <a href="/">DOG</a>
              </li>
              <li>
                <a href="/">CAT</a>
              </li>
              <li>
                <a href="/">BANNER</a>
              </li>
              <li>
                <a href="/">ETC</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>DOG</h3>
            <ul>
              <li>
                <a href="/">Shih Tzu</a>
              </li>
              <li>
                <a href="/">French Bulldog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>CAT</h3>
            <ul>
              <li>
                <a href="/">Bite</a>
              </li>
              <li>
                <a href="/">Punch</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>MORE</h3>
            <ul>
              <li>
                <a href="/">Dolphin</a>
              </li>
              <li>
                <a href="/">Raccoon</a>
              </li>
              <li>
                <a href="/">Pig</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>ETC</h3>
            <ul>
              <li>
                <a href="/">Sloth</a>
              </li>
              <li>
                <a href="/">Chameleon</a>
              </li>
              <li>
                <a href="/">Meerkat</a>
              </li>
              <li>
                <a href="/">Koala</a>
              </li>
              <li>
                <a href="/">Penguin</a>
              </li>
              <li>
                <a href="/">Alpaca</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          2022 mo0647. Portfolio is Power
          <br />
          All rights reserved.
        </div>
      </div>
    </section>
  );
}

export default Footer;
