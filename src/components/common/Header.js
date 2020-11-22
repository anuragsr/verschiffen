/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { l, cl } from '../helpers/Log'

let listener = null, homeSection

export default function Header({ ref0, ref1, ref2 , ref3 }){
  const history = useHistory()
  , loc = useLocation()
  , [scrollState, setScrollState] = useState("top")
  , [isNavToggled, setIsNavToggled] = useState(false)
  , navigate = (e, ref, section) => {
    switch (loc.pathname) {
      case '/': homeSection = null; goToSection(e, ref); break
      default : homeSection = section; goHome(); break
    }
  }
  , goToSection = (e, ref) => {
    e && e.preventDefault()
    const scrollTop = window.pageYOffset + ref.current.getBoundingClientRect().top - 60
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })    
  }
  , goHome = () => {
    // l("Old Route:", loc.pathname)
    history.push('/')
  }
  , setNavClass = path => {
    let className = `navbar navbar-expand-lg fixed-top ${(scrollState === "scrolled" || isNavToggled)? "scrolled":""}`
    if(path === "/faq" || path === "/impressum") className = `${className} nav-light`
    return className
  }

  // For nav bg on scroll
  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 100) {
        if (scrollState !== "scrolled") setScrollState("scrolled")
      } else {
        if (scrollState !== "top") setScrollState("top")
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  
  // For section scroll on route change
  useEffect(() => {
    // l("New Route:", loc.pathname, "Section:", homeSection)
    (loc.pathname === '/') && 
    setTimeout(() => {
      switch(homeSection){
        case 'funktion': goToSection(null, ref1); break
        case 'partner': goToSection(null, ref2); break
        case 'kontakt': goToSection(null, ref3); break
        default: break
      }
    }, 500)    
  }, [loc])

  return (
    <nav className={setNavClass(loc.pathname)}>
      <div className="container">
        <a onClick={() => { homeSection = null; goHome() }} href={void(0)} className="navbar-brand">
          <span className="acc">Verschiffen</span>.com
        </a>

        <button 
          onClick={() => setIsNavToggled(!isNavToggled)}
          className="navbar-toggler" 
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarTogglerDemo02" 
          aria-controls="navbarTogglerDemo02" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          >
          <div className="navbar-toggler-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href={void(0)} onClick={e => navigate(e, ref1, "funktion")}>Funktion</a>
              <a className="mobile-only nav-link acc mr-2" href={void(0)}>+49 (175) 91234</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href={void(0)} onClick={e => navigate(e, ref2, "partner")}>Partner</a>
            </li>
            <li className="nav-item mr-2">
              <a className="nav-link" href={void(0)} onClick={e => navigate(e, ref3, "kontakt")}>Hilfe</a>
            </li>
            <li className="nav-item mr-4">
              <button className="btn btn-acc" onClick={e => {}}>Deutschland EUR €</button>
            </li>
            <li className="desktop-only nav-item ph">
              <a className="nav-link" href="#">+49 (175) 91234</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}