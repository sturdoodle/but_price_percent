import React from 'react'
import "./cmpt.css";


export default function Header() {
  return (
    <> 
     <header className="navbar navbar-light bg-light shadow-lg bg-body rounded sticky-top " id="header-1">
        <div className="container-fluid">
        <a className="navbar-brand logo" title="Price Percent" href="/">
            {/* <img src="/assets/book-svg.svg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>  MCQ-QPKendra</a> */}
            <p alt="" width="30" height="24" className="d-inline-block align-text-top"/>  Price-Percent | QPKendra</a>

        </div>
        {/* <div id="progress-bar"></div> */}
    </header>
    </>
  )
}
