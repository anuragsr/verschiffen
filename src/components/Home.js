/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hooks-helper'
// import { Link, NavLink } from 'react-router-dom'
// import HttpService from '../services/HttpService'
import Carousel from 'react-img-carousel'
import { Modal, useModal } from './Modal'

import '../scss/home.scss'
import 'react-img-carousel/lib/carousel.css'

const l = console.log.bind(window.console)

export default function Main({ ref1, ref2 , ref3, ref4 }){

  const { 
    isShowing, toggle, 
    showMoreInfo, toggleMoreInfo,
  } = useModal()
  , initFormData = { vonStadt: 'Berlin', nachStadt: 'Shanghai' }
  , [{ vonStadt, nachStadt }, setValue] = useForm(initFormData)
  , onFormSubmit = e => {
    l("Submit")
    l({ vonStadt, nachStadt })
    e.preventDefault()
    toggle()
    // toggle({ 
    //   eventStr: info.event.extendedProps.dateTime, 
    //   eventDate: mySqlDate(info.event.start),
    //   startStr: info.event.startStr, 
    //   endStr: info.event.endStr 
    // })
  }  
  , goToSection = (e, ref) => {
    e.preventDefault()
    const scrollTop = window.pageYOffset + ref.current.getBoundingClientRect().top - 60
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })
  }

  return (
    <>  
      <main className="home">
        <section className="section0">
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h1 className="desktop-only">Wohin wollen Sie <span className="acc">verschiffen</span>?</h1>
                {/* <h1 className="mobile-only">AWS Kosteneinsparung</h1> */}
                <h4 className="desktop-only">
                  In wenigen Schritten zum Angebot.<br/>
                  100% kostenfrei. Einfach. Unverbindlich.
                </h4>
              </div>
              <div className="col-5">
                <div className="ctn-search">
                  <div className="title">Finden Sie das beste Angebot</div>
                  <div className="subtitle">Vergleichen Sie eine Vielzahl von Angeboten und finden Sie den für Sie optimalenAngebot.</div>
                  <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                      <label htmlFor="">VON</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        value={vonStadt}
                        onChange={setValue}
                        name="vonStadt"
                        placeholder="von Stadt"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="">NACH</label>
                      <input 
                        className="form-control" 
                        type="text" 
                        value={nachStadt}
                        onChange={setValue}
                        name="nachStadt"
                        placeholder="nach Stadt"/>
                    </div>
                    <button className="btn btn-acc btn-block" type="submit">Suche</button>
                  </form>
                </div>
              </div>            
            </div>
            {/* <h4 className="mobile-only">On-demand Experten für Sie jederzeit verfügbar.</h4> */}
          </div>
        </section>
        
        <section className="ctn-rating text-center">
          <div className="title">
            <span>Kunden bewerten Verschiffen.com mit 4.8 / 5 </span>
            <span className="ml-2">
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
            </span>
          </div>
          <div className="subtitle">
            durchschnittlich von <span className="acc">453,123 Bewertungen</span>
          </div>
        </section>

        <section className="section1" ref={ref2}>
          <div className="container text-center">
            <h2 className="acc">Funktionsweise</h2>
            <h1 className="desktop-only">So funktioniert es</h1>
            <h1 className="mobile-only">So funktioniert es</h1>
            <div className="points">
              <div className="ctn-point row">
                <div className="col-3">
                  <img src="assets/func1.jpg" alt=""/>
                </div>
                <div className="col-1 num dashed">1</div>
                <div className="col-8 text-left">
                  <h4>Erstellen Sie einen Projektauftrag</h4>
                  <p>
                    Einfaches Einfügen nur von Schlüsselinformationen. Fordern Sie Angebote 
                    für Sendungen aller Größen an - von 1 kg bis zu 10 Tonnen
                  </p>
                </div>
              </div>
              <div className="ctn-point row">
                <div className="col-3">
                  <img src="assets/func2.jpg" alt=""/>
                </div>
                <div className="col-1 num dashed">2</div>
                <div className="col-8 text-left">
                  <h4>Echtzeit-Kurse vergleichen</h4>
                  <p>
                    Erhalten Sie einen Überblick über alle buchbaren Kapazitäten mehrerer 
                    Frachtgesellschaften (inkl. Hauptdeck und Frachter) Echtzeit-Preise direkt 
                    von der Fluggesellschaft erhalten, wie am Telefon.
                  </p>
                </div>
              </div>
              <div className="ctn-point row">
                <div className="col-3">
                  <img src="assets/func3.jpg" alt=""/>
                </div>
                <div className="col-1 num">3</div>
                <div className="col-8 text-left">
                  <h4>Direkt über die Plattform buchen</h4>
                  <p>
                    Alle Angebote mit nur zwei Klicks buchen. Nutzen Sie Ihren vorhandenen 
                    AWB-Bestand und wickeln Sie Zahlungen wie gewohnt über CASS ab
                  </p>
                </div>
              </div>
            </div>
            <button className="btn btn-acc" onClick={e => {}}>Jetz beginnen</button>
          </div>        
        </section>

        <section className="section2" ref={ref1}>
          <div className="container text-center">
            <h2 className="acc">Vorteile</h2>
            <h1 className="desktop-only">Ein Paket ein Preis</h1>
            <h1 className="mobile-only">Ein Paket ein Preis</h1>
            <div className="ctn-boxes">
              <div className="box">
                <img src="assets/th1.png" alt=""/>
                <span>Verzollung</span>
                <p>Wir helfen Dir dabei die benötigten Unterlagen auszufüllem</p>
              </div>
              <div className="box">
                <img src="assets/th2.png" alt=""/>
                <span>Transport</span>
                <p>Wir helfen Dir dabei die benötigten Unterlagen auszufüllem</p>
              </div>
              <div className="box">
                <img src="assets/th3.png" alt=""/>
                <span>Anmeldung</span>
                <p>Wir helfen Dir dabei die benötigten Unterlagen auszufüllem</p>
              </div>
            </div>
            <div className="ctn-boxes">
              <div className="box">
                <img src="assets/th4.png" alt=""/>
                <span>Versicherung</span>
                <p>Wir helfen Dir dabei die benötigten Unterlagen auszufüllem</p>
              </div>
              <div className="box">
                <img src="assets/th5.png" alt=""/>
                <span>Sicherheit </span>
                <p>Wir helfen Dir dabei die benötigten Unterlagen auszufüllem</p>
              </div>
              <div className="box">
                <img src="assets/th6.png" alt=""/>
                <span>Support</span>
                <p>Wir helfen Dir dabei die benötigten Unterlagen auszufüllem</p>
              </div>
            </div>
            <div className="info-box">
              <div className="row">
                <div className="col-7">
                  <h4>Erhalte direkten Zugang zu den führenden Anbietern auf einer Plattform.</h4>
                  <p>Erhalten Sie Echtzeitpreise für verfügbare Kapazitäten und buchen Sie direkt in die Systeme der Fluggesellschaften.</p>
                  <button className="btn btn-acc" onClick={e => {}}>Jetz beginnen</button>
                </div>
                <div className="col-5 row">
                  <div className="col-6 pr-0">
                    <div className="ctn-cargo"><img src="assets/cargo.png" alt=""/></div>
                    <div className="ctn-cargo"><img src="assets/cargo.png" alt=""/></div>
                    <div className="ctn-cargo"><img src="assets/cargo.png" alt=""/></div>
                  </div>
                  <div className="col-6 pr-0 mt-4">
                    <div className="ctn-cargo"><img src="assets/cargo.png" alt=""/></div>
                    <div className="ctn-cargo"><img src="assets/cargo.png" alt=""/></div>
                    <div className="ctn-cargo"><img src="assets/cargo.png" alt=""/></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section3">
          <div className="container text-center">
            <h2 className="desktop-only acc">Angebot auswählen</h2>
            <h1 className="desktop-only">Wählen Sie ihr passendes<br/> Angebot</h1>
            <h2 className="mobile-only acc">Angebot auswählen</h2>
            <h1 className="mobile-only">Wählen Sie ihr passendes<br/> Angebot</h1>
            <div className="ctn-bm-outer">
              <div className="ctn-layer0">
                <div className="row">
                  <div className="col-2"><div></div></div>
                  <div className="col-8"><div></div></div>
                  <div className="col-2"><div></div></div>
                </div><hr/>
                <div className="row">
                  <div className="col-2"><div></div></div>
                  <div className="col-8"><div></div></div>
                  <div className="col-2"><div></div></div>
                </div><hr/>
                <div className="row">
                  <div className="col-2"><div></div></div>
                  <div className="col-8"><div></div></div>
                  <div className="col-2"><div></div></div>
                </div><hr/>
                <div className="row">
                  <div className="col-2"><div></div></div>
                  <div className="col-8"><div></div></div>
                  <div className="col-2"><div></div></div>
                </div><hr/>
                <div className="row">
                  <div className="col-2"><div></div></div>
                  <div className="col-8"><div></div></div>
                  <div className="col-2"><div></div></div>
                </div>
                <div className="site-title">Verschiffen.com</div>
              </div>
              <div className="ctn-layer1">
                <div className="bm">Best Match</div>
                <img src="assets/lufthansa.png" alt=""/>
                <div className="ctn-ship-info">
                  <div>
                    <span className="date">Mon. 11.09.20</span>
                    <div>9:00</div>
                    <span className="stadt">BER</span>
                  </div>
                  <div className="ctn-ship-graphic">
                    <div>
                      <img src="assets/container.png" alt=""/>
                      <img src="assets/ship.png" alt=""/>
                      <img src="assets/container.png" alt=""/>
                    </div>
                    <div className="bar"></div>
                    <span className="stadt">SHA</span>
                  </div>
                  <div>
                    <span className="date">Fri. 15.09.20</span>
                    <div>9:00</div>
                    <span className="stadt">SHA</span>
                  </div>
                </div>
                <div className="ctn-price">
                  <div>Gesamtbetrag</div>
                  <div>239 €</div>
                  <button className="btn btn-sm btn-acc">Buchen</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section4" ref={ref3}>
          <div className="container text-center">
            <h2 className="desktop-only acc">Bewertungen</h2>
            <h1 className="desktop-only">Zufriedene Unternehmen</h1>
            <h2 className="mobile-only acc">Bewertungen</h2>
            <h1 className="mobile-only">Zufriedene Unternehmen</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="ctn-stars">
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                  </div>
                  <div className="r-title">Thank You</div>
                  <p className="r-content">
                    “Send shareable cloud tests and get feedback immediately.
                    Send shareable bug tests and get feedback immediately.
                    Send shareable bug tests and get feedback immediately."
                  </p>
                  <div className="r-ft">
                    <div>12x <img src="assets/cargo 2.png" alt=""/></div>
                    Berlin <span>to</span> Shanghai
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="ctn-stars">
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                  </div>
                  <div className="r-title">All Perfect</div>
                  <p className="r-content">
                    “Send shareable cloud tests and get feedback immediately.
                    Send shareable bug tests and get feedback immediately.
                    Send shareable bug tests and get feedback immediately."
                  </p>
                  <div className="r-ft">
                    <div>12x <img src="assets/cargo 2.png" alt=""/></div>
                    Berlin <span>to</span> Shanghai
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="ctn-stars">
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                    <img src="assets/star2.png" alt=""/>
                  </div>
                  <div className="r-title">Best Experience</div>
                  <p className="r-content">
                    “Send shareable cloud tests and get feedback immediately.
                    Send shareable bug tests and get feedback immediately.
                    Send shareable bug tests and get feedback immediately."
                  </p>
                  <div className="r-ft">
                    <div>12x <img src="assets/cargo 2.png" alt=""/></div>
                    Berlin <span>to</span> Shanghai
                  </div>
                </div>
              </div>
            </div>
            <img src="assets/trustpilot.jpg" alt=""/>
          </div>
        </section>
        
        <section className="section5">
          <div className="container">
            <div className="ctn-carousel">
              <Carousel 
                lazyLoad={false}
                dots={false}
                infinite={false}
                clickToNavigate={false}
              >
                <div className="ctn-carousel-single">
                  <div className="row">
                    <div className="col-6 h-100 ctn-video"></div>
                    <div className="col-6 h-100 ctn-testi">
                      <p>
                        “Maschinendokumentation und Smart Guide bieten detaillierte 
                        Anleitungen zur Lösung von aktuell anstehenden Problemen bzw. 
                        zur Durchführung von Wartungsaufgaben.”
                      </p> 
                      <p>
                        Tim und Dan Joo, Co-founder<br/>
                        <img src="assets/testi-un.png" alt=""/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="ctn-carousel-single">
                  <div className="row">
                    <div className="col-6 h-100 ctn-video"></div>
                    <div className="col-6 h-100 ctn-testi">
                      <p>
                        “Maschinendokumentation und Smart Guide bieten detaillierte 
                        Anleitungen zur Lösung von aktuell anstehenden Problemen bzw. 
                        zur Durchführung von Wartungsaufgaben.”
                      </p> 
                      <p>
                        Tim und Dan Joo, Co-founder<br/>
                        <img src="assets/testi-un.png" alt=""/>
                      </p>
                    </div>
                  </div>
                </div>
              
              </Carousel>
            </div>
          </div>
        </section>

        <section className="section6">
          <div className="container text-center">
            <div className="row" ref={ref4}>
              <div className="desktop-only col-md-6">
                <div className="act act1 text-left">
                  <span className="acc">Benotigst du weitere Hilfe?</span>
                  <p>Kontakiere uns</p>
                  <button className="btn btn-sec">Hilfe erhalten</button>
                </div>
              </div>
              <div className="desktop-only col-md-6">
                <div className="act act2 text-left">
                  <span className="acc">Benötigst du sofortige Hilfe?</span>
                  <p>Frag nach Antworten</p>
                  <button className="btn btn-acc">Chat starten</button>
                </div>
              </div>
              <div className="mobile-only col-md-12 kontakt">
                <p>Do you have any questions? We are<br/>happy to help you.</p>
                <div className="block">
                  <span className="acc">Telefon</span><br/>
                  030 320 049 332
                </div>
                <div className="block">
                  <span className="acc">Email</span><br/>
                  info@cloudbasiert.com
                </div>
                <div className="block">
                  <span className="acc">Chat</span><br/>
                  Live-support
                </div>
              </div>
            </div>
            <div className="desktop-only row info">
              <div className="ctn-img">
                <img src="assets/cargo-dark.png" alt=""/>
                <img src="assets/cargo-dark.png" alt=""/>
                <img src="assets/cargo-dark.png" alt=""/>
              </div>
              <h1>Sie benötigen Unterstützung bei <br/>der Reisebuchung?</h1>
              <p>Unser Experten unterstützen Sie bei der Flugbuchung</p>
              <p className="acc"><img height="20" src="assets/phone.png" alt=""/>&nbsp;+49 (175) 91234</p>
              <p>
                Telefonisch erreichbar Montag bis Freitag von 8:00 bis 20:00 Uhr (UTC -5). 
                Sie können auch einen <a href="#" className="acc">Rückruf anfordern.</a>
              </p>
            </div>
          </div>
        </section>
        
        <section className="section7">
          <div className="container text-center">
            <img src="assets/starten.png" alt=""/>
            <p className="desktop-only">Verschiffen Sie Ihre Ware weltweit</p>
            <p className="mobile-only">Verschiffen Sie Ihre Ware weltweit</p>
            <button className="btn btn-acc mr-3" onClick={e => {}}>Angebot ansehen</button>
            <button className="btn btn-sec" onClick={e => {}}>Jetzt vergleichen</button>
          </div>
        </section>

        <section className="prefooter">
          <div className="container text-center">
            Sie suchen nach Hilfe für die Planung  einer Reise mit einer größeren Gruppe an Personen? Schreiben Sie uns einfach an. 
            <hr/>
          </div>
        </section>
      </main>
      <Modal 
        isShowing={isShowing}
        toggle={toggle}
        showMoreInfo={showMoreInfo}
        toggleMoreInfo={toggleMoreInfo}
      />
    </>
  )
}
