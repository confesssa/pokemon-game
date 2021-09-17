import React from "react";

import FirstBg from './assets/bg1.jpg';
import SecondBg from './assets/bg3.jpg';

import Header from './components/Header/Header.js';
import Layout from './components/Layout/Layout.js';

const App = () => {
  return (
    <>
      <Header
        title="This is title"
        descr="This is Description!"
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        urlBg = { FirstBg }
      />
      <Layout
        title="This is title"
        descr="This is Description!"
      />
      <Layout
        title="This is title"
        descr="This is Description!"
        urlBg={ SecondBg }
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;
