import React from 'react';

import FirstBg from './assets/bg1.jpg';
import SecondBg from './assets/bg3.jpg';

import Header from './components/Header/Header.js';
import Layout from './components/Layout/Layout.js';
import Footer from './components/Footer/Footer.js';

const App = () => {
  return (
    <>
      <Header
        title="Pokemon game"
        descr="This is simple triple triad card game!"
      />
      <Layout
        id ='rules'
        title="This is First Layout"
        descr="Some text here.."
        urlBg = { FirstBg }
      >
        <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.</p>
        <p>Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead.</p>
      </Layout>
      <Layout
        id='cards'
        title="This is Second Layout"
        descr="Some text here.."
      />
      <Layout
        id='about'
        title="This is a Third Layout"
        descr="Some text here.."
        urlBg={ SecondBg }
      />
      <Footer />
    </>
  );
}

export default App;
