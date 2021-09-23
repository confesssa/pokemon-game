import React from "react";
import h from './header.module.css';

const Header = ({ title, children }) => {
  return (
    <>
    <header className={ h.root }>
      <div className={ h.forest }></div>
      <div className={ h.container }>
        <h1>{ title }</h1>
        { children }
      </div>
    </header>
    </>
  )
}

export default Header;