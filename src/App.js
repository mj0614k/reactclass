// 리액트 기본 문법 : rfce
// class도 작동되지만, className이라고 쓰기
// import할 js 첫글자는 대문자로 쓰기
// 태그는 일체형으로 써도 되고 닫아도 됨

import React from "react";
import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <>
      <Header fonts="nexon" />
      <Main>
        <Slider />
        <Image attr={["section", "nexon", "container"]} />
        <ImageText attr={["section", "nexon", "container"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Banner fonts="nexon" />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "container"]} />
    </>
  );
}

export default App;
