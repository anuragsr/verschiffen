/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Footer(){
  return (
    <footer>
      <div className="container desktop-only">
        <div className="row ctn-footer">
          <div className="col-md-5 col-left">
            <h4 className="links">
              <Link to="/">Verschiffen.com</Link>
            </h4>
            <p>
              Mit unserem engagierten Kundenservice sind wir für dich da! 
              Du entscheidest die Sprache, egal ob Deutsch, Englisch, Französisch
            </p>
            <div className="ctn-icons">
              <a href="#"><img src="assets/facebook.png" alt=""/></a>
              <a href="#"><img src="assets/linkedin.png" alt=""/></a>
              <a href="#"><img src="assets/twitter.png" alt=""/></a>
              <a href="#"><img src="assets/youtube.png" alt=""/></a>
              <a href="#"><img src="assets/instagram.png" alt=""/></a>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 links">
                <h4>Features</h4>
                <Link to="/team">Freunde werben</Link>
                <Link to="/team">Projekte</Link>
                <Link to="/team">Gigs</Link>
                <Link to="/team">Lernen</Link>
              </div>
              <div className="col-md-4 links">
                <h4>Ressourcen</h4>
                <Link to="/team">Blog</Link>
                <Link to="/faq">Vertrauen & Sicherheit</Link>
                <Link to="/faq">Hilfe & Support</Link>
                <Link to="/team">Community</Link>
              </div>
              <div className="col-md-4 links">
                <h4>Unternehmen</h4>
                <Link to="/team">Team</Link>
                <Link to="/team">Karriere</Link>
                <Link to="/team">Presse & Neuigkeiten</Link>
                <Link to="/impressum">Impressum</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          Verschiffen.com 2020
        </div>
      </div>
      <div className="container mobile-only">
        <div className="row">
          <div className="col-6 links">
            <h4>Wissen</h4>
            <Link to="/faq">FAQs</Link>
            <Link to="/faq">Blog</Link>
            <a href="#">Ratgeber <img className="bald" src="assets/bald.png" alt=""/></a>
            <Link to="/faq">Wie funkitioniert es</Link>
          </div>
          <div className="col-6 links">
            <h4>Unternehmen</h4>
            <Link to="/team">Uber uns</Link>
            <Link to="/team">Sicherheit</Link>
            <Link to="/team">Jobs</Link>
            <Link to="/team">Sicherheit</Link>
          </div>
        </div>
        <div className="logo text-center">
          <NavLink to="/">          
            <span className="acc">Verschiffen</span>.com
          </NavLink>
        </div>
        <div className="ctn-icons text-center">
          <a href="#"><img src="assets/facebook.png" alt=""/></a>
          <a href="#"><img src="assets/linkedin.png" alt=""/></a>
          <a href="#"><img src="assets/twitter.png" alt=""/></a>
          <a href="#"><img src="assets/youtube.png" alt=""/></a>
          <a href="#"><img src="assets/instagram.png" alt=""/></a>
        </div>
        <div className="text-center">
          <p>Verschiffen.com ist ein Deutsches<br/> Unternehmen mit Firmensitz Berlin.</p>
          <p>Oranienburger Str. 103,<br/>10117 Berlin</p>
        </div>
      </div>
    </footer> 
  )
}   