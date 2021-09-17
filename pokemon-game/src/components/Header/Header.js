import React from "react";
import h from './header.module.css';

function Header ({ title, descr }) {
  return (
    <>
    <header className={ h.root }>
      <div className={ h.forest }></div>
      <div className={ h.container }>
        <h1>This is title</h1>
        <p>This is Description!</p>
      </div>
    </header>
    </>
  )
}

export default Header;