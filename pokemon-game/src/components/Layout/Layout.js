import React from "react";

import l from './layout.module.css';

const Layout = ({ id, title, descr, urlBg, colorBg='#e2e2e2', children}) => {
  const rootBg = {
        background: `${colorBg}${urlBg
            ? ` url(${urlBg}) no-repeat fixed left bottom / cover`
            : ''}`,
    };
  return (
    <>
      <section className={ l.root } style={ rootBg }>
        <div className={ l.wrapper }>
            <article>
              <div className={ l.title }>
                <h3>{ title }</h3>
                <span className={ l.separator }></span>
              </div>
              <div className={l.desc+ ' ' + l.full}>
                <p>{ children ? children : descr }</p>
              </div>
            </article>
        </div>
      </section>
    </>
  )
}

export default Layout;