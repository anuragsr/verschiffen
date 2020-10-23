import React, { useRef } from 'react'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Home from './components/Home'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Impressum from './components/Impressum'
import ScrollToTop from './helpers/ScrollToTop'

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  
  const refs = {
    ref0: useRef(null)
    , ref1: useRef(null)
    , ref2: useRef(null)
    , ref3: useRef(null)
  }

  return (
    <BrowserRouter basename="/">
      <div className="ctn-link">
        <Link to="/">Home</Link>
        <Link to="/team">Team</Link>
        <Link to="/faq">FAQ</Link>                
        <Link to="/impressum">Impressum</Link>  
      </div>
      <ScrollToTop />
      <Header {...refs}/>
      <Switch>
        <Route exact path="/"><Home {...refs}/></Route>
        <Route path="/team"><Team /></Route>
        <Route path="/faq"><FAQ /></Route>
        <Route path="/impressum"><Impressum /></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}