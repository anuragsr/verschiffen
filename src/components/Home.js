/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hooks-helper'
// import { Link, NavLink } from 'react-router-dom'
// import HttpService from '../services/HttpService'

import { Modal, useModal } from './Modal'
import '../scss/home.scss'

const l = console.log.bind(window.console)

export default function Main({ 
  workshopRef, ref1, ref2 , ref3, ref4 
}){

  const { 
    isShowing, toggle, 
    // currStep, setStep,
    // opts, setOpt, 
    // showMoreInfo, toggleMoreInfo,
    // firstName, lastName, phone, email, setValue,
    // isFormValid, currEvent
  } = useModal()
  , calendarDesktopRef = useRef(null)
  , calendarRef = useRef(null)
  , mySqlDate = function(date) {
    const twoDigits = d => {
      if(0 <= d && d < 10) return "0" + d.toString()
      if(-10 < d && d < 0) return "-0" + (-1*d).toString()
      return d.toString()
    }
    return date.getUTCFullYear() + "-" + twoDigits(1 + date.getUTCMonth()) + "-" + twoDigits(date.getUTCDate())
  }
  , getStartEnd = time => {
    let hr = parseInt(time.split(":")[0]) + 2
    if(hr < 10) hr = "0" + hr
    return `${time} - ${hr}:00`
  }
  , initFormData = { vonStadt: 'Berlin', nachStadt: 'Shanghai' }
  , [{ vonStadt, nachStadt }, setValue] = useForm(initFormData)
  , onFormSubmit = e => {
    l("Submit")
    l({ vonStadt, nachStadt })
    e.preventDefault()
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
  // useEffect(() => { getEvents() }, [])

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
                <div className="col-4">
                  <img src="assets/func1.jpg" alt=""/>
                </div>
                <div className="col-2 num dashed">1</div>
                <div className="col-6 text-left">
                  <h4>Finden Sie ein Termin</h4>
                  <p>
                    Reservieren Sie einen Termin, um mit unseren Experten über ihr Anliegen zu sprechen.
                  </p>
                </div>
              </div>
              <div className="ctn-point row">
                <div className="col-4">
                  <img src="assets/func2.jpg" alt=""/>
                </div>
                <div className="col-2 num dashed">2</div>
                <div className="col-6 text-left">
                  <h4>Wir melden uns bei Ihnen</h4>
                  <p>
                    Ein Experte von Cloudbasiert wird sich in weniger als 24 Stunden mit Ihnen in Verbindung setzen
                  </p>
                </div>
              </div>
              <div className="ctn-point row">
                <div className="col-4">
                  <img src="assets/func3.jpg" alt=""/>
                </div>
                <div className="col-2 num">3</div>
                <div className="col-6 text-left">
                  <h4>Kostenfreier Workshop</h4>
                  <p>
                    Ein Experte von Cloudbasiert führt für ihr Unternehmen einen Workshop durch
                  </p>
                </div>
              </div>
            </div>
            <button className="mobile-only btn btn-acc" onClick={e => goToSection(e, workshopRef)}>Workshop buchen</button>
          </div>        
        </section>

        <section className="section1-1" ref={ref1}>
          <div className="container text-center">
            <h2 className="acc">Vorteile</h2>
            <h1 className="desktop-only">Sie wollen Ihre AWS kosten<br/>senken?</h1>
            <h1 className="mobile-only">Sie wollen Ihre AWS<br/> kosten senken?</h1>
            <div className="points">
              <div className="ctn-point">
                <h1>&lt;1 Woche</h1>
                <div className="line"></div>
                <p>
                  Innerhalb von einer Woche können Sie Ihre Kostenstruktur von AWS komplett erneuern und monatlich Geld einsparen.
                </p>
              </div>
              <div className="ctn-point">
                <h1>2x schneller</h1>
                <div className="line"></div>
                <p>
                  Durch den Workshop lässt sich eine Effizienzsteigerung von 2x erreichen. 
                </p>
              </div>
              <div className="ctn-point">
                <h1>50% sparen</h1>
                <div className="line"></div>
                <p>
                  Unsere Expertern helfen Ihnen dabei Ihre AWS Kosten um bis zu 50% zu reduzieren. 
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="container text-center">            
            
          </div>
        </section>

        <section className="section4">
          <div className="container text-center">
            <h2 className="desktop-only acc">AWS Kostenoptimierung</h2>
            <h1 className="desktop-only">Ausgaben verstehen und senken</h1>
            <h2 className="mobile-only acc">AWS Kostenoptimierung</h2>
            <h1 className="mobile-only">Ausgaben verstehen und senken</h1>
            <p>
              Wir analysieren Ihre AWS Kosten, identifizieren mögliche Einsparpotenziale
              und setzen diese mit Ihnen direkt in die Tat um. Wir starten mit einer 
              Discovery-Phase in der wir Ihre Workloads und Herausforderungen verstehen lernen.
              <br/><br/><br/><br/>
              Danach gehen wir die Analyse und stellen Ihnen konkrete Einsparung vor; 
              diese priorisieren wir danach mit Ihnen. 
              <br/><br/>
              Zum Abschluss sorgen wir unmittelbar für die ersten Einsparungen, so dass sich 
              <br/>Ihr Investment in dieses Paket direkt anfängt zu rentieren.
            </p>
            <button className="btn btn-acc" onClick={e => goToSection(e, workshopRef)}>Workshop planen</button>
          </div>
        </section>

        <section className="section5" ref={ref3}>
          <div className="container text-center">
            <h2 className="desktop-only acc">Weitere Workshopthemen</h2>
            <h1 className="desktop-only">Sie sind an anderen Themen interessiert?</h1>
            <h2 className="mobile-only acc">Weitere Workshopthemen</h2>
            <h1 className="mobile-only">Sie sind an anderen Themen interessiert?</h1>
            <div className="ctn-boxes">
              <div className="box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th1.png" alt=""/>
                <span>Security</span>
                <p>Uberprüfen und optimieren Sie ihre Sicherheit in der Cloud</p>
              </div>
              <div className="box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th2.png" alt=""/>
                <span>Anbieterauswahl</span>
                <p>Unsere Experten helfen den besten Cloudanbieter zu finden</p>
              </div>
              <div className="box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th3.png" alt=""/>
                <span>Kapitalkosten<br/>reduzieren</span>
                <p>Ein Workshop der hilft die Kapitalkosten zu reduzieren</p>
              </div>
              <div className="box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th4.png" alt=""/>
                <span>Skalierbarkiet<br/>erhonen</span>
                <p>Bis zu 58% Effizienzseigerung erzielen</p>
              </div>
              <div className="box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th5.png" alt=""/>
                <span>Big Data</span>
                <p>Wir helfen das managen großer Datenmengen</p>
              </div>
              <div className="box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th6.png" alt=""/>
                <span>Betriebskosten<br/>reduzieren</span>
                <p>Mithilfe des Workshops Betriebskosten minimieren</p>
              </div>
              <div className="desktop-only box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th7.png" alt=""/>
                <span>Disaster Recovery<br/>verbessern</span>
                <p>Redudanz und Disaster Recovery bis zu 35% verbessern</p>
              </div>
              <div className="desktop-only box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th8.png" alt=""/>
                <span>Effizienz<br/>steigern</span>
                <p>Kosteneinsparungen von bis zu 50% sind möglich</p>
              </div>
              <div className="desktop-only box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th9.png" alt=""/>
                <span>Microsoft in der Cloud</span>
                <p>Wir beraten Sie welche Moglichkeiten mit MS am besten fur Sie passen</p>
              </div>
              <div className="desktop-only box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th10.png" alt=""/>
                <span>Migration</span>
                <p>Ein Workshop auf Ihre Bedurfnisse von Smart Data zugeschnitten</p>
              </div>
              <div className="desktop-only box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th10.png" alt=""/>
                <span>Migration</span>
                <p>Ein Workshop auf Ihre Bedurfnisse von Smart Data zugeschnitten</p>
              </div>
              <div className="desktop-only box" onClick={e => goToSection(e, workshopRef)}>
                <img src="assets/th10.png" alt=""/>
                <span>Migration</span>
                <p>Ein Workshop auf Ihre Bedurfnisse von Smart Data zugeschnitten</p>
              </div>
            </div>
            <button className="btn btn-acc" onClick={e => goToSection(e, workshopRef)}>Termin verinbaren</button>          
          </div>
        </section>

        <section className="section6">
          <div className="container text-center">
            <div className="desktop-only">
              <h2 className="acc">Unser Leistungsumfang</h2>
              <h1>Flexibel und für alle Cloudanbieter</h1>
              <div className="ctn-table">
                <div className="ctn-table-inner">
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Leistungsspektrum</div>
                    <div className="col-md-3">Beratunghauser</div>
                    <div className="col-md-3">Cloudanbieter</div>
                    <div className="col-md-3"><img src="assets/logo.svg" alt=""/></div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Dienstleistung</div>
                    <div className="col-md-3">Strategie und Implementierung</div>
                    <div className="col-md-3">Freelancer fur<br/> Anbieter</div>
                    <div className="col-md-3">Passende<br/> Cloudexperten</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Cloud Expertise</div>
                    <div className="col-md-3">Mittel</div>
                    <div className="col-md-3">Hoch</div>
                    <div className="col-md-3">Hoch</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Projektlange</div>
                    <div className="col-md-3">Langere<br/>Einsatze</div>
                    <div className="col-md-3">Flexibel</div>
                    <div className="col-md-3">Flexibel</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Abdeckung<br/>Cloudanbieter</div>
                    <div className="col-md-3">Hoch</div>
                    <div className="col-md-3">Nur ein Anbiter</div>
                    <div className="col-md-3">Alle</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3">Kosten</div>
                    <div className="col-md-3">Hoch</div>
                    <div className="col-md-3">Mittel</div>
                    <div className="col-md-3">Mittel</div>
                  </div>
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3">
                      <button className="btn btn-acc" onClick={e => goToSection(e, workshopRef)}>Workshop planen</button>
                    </div>
                  </div>              
                </div>
              </div>
            </div>
            <div className="mobile-only">
              <div className="ctn-vor-outer">
                <div className="block">
                  <span className="acc">Cloud</span>basiert
                </div>
                <div className="block">
                  <h4>Vorteile gegenüber<br/>anderen Anbieter</h4>
                </div>
                <div className="block reg">
                  <img src="assets/tick.png" alt=""/><br/>
                  <p>Passenden Cloudexperten</p>
                </div>
                <div className="block reg">
                  <img src="assets/tick.png" alt=""/><br/>
                  <p>Sehr hohe Cloud Expertise</p>
                </div>
                <div className="block reg">
                  <img src="assets/tick.png" alt=""/><br/>
                  <p>Flexible Projektlänge</p>
                </div>
                <div className="block reg">
                  <img src="assets/tick.png" alt=""/><br/>
                  <p>Alle Cloudanbieter werden abgedeckt</p>
                </div>
                <div className="block reg">
                  <img src="assets/tick.png" alt=""/><br/>
                  <p>Keine Versteckte Kosten</p>
                </div>
                <div className="block reg">
                  <img src="assets/tick.png" alt=""/><br/>
                  <p>Medication prescribed by a physician</p>
                </div>
                <div className="block">
                  <button className="btn btn-acc" onClick={e => goToSection(e, workshopRef)}>Start now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section7">
          <div className="container text-center">
            <h2 className="desktop-only acc">USP</h2>
            <h1 className="desktop-only">Warum Cloudbasiert</h1>
            <h2 className="mobile-only acc">USP</h2>
            <h1 className="mobile-only">Innovation mit Cloud</h1>
            <div className="row usp">
              <div className="col-md-6">
                <img src="assets/usp1.png" alt=""/>
                <span>Top Experten</span>
                <p>Wir prüfen jeden unserer Cloudexperten genau. Die Experten auf Cloudbasiert sind die besten 5%</p>
              </div>
              <div className="col-md-6">
                <img src="assets/usp2.png" alt=""/>
                <span>Schnelle Hilfe</span>
                <p>In nur 48 Stunden finden Sie über Cloudbasiert den geeigneten Experten für Ihr Anliegen</p>
              </div>
            </div>
            <div className="row usp last">
              <div className="col-md-6">
                <img src="assets/usp3.png" alt=""/>
                <span>Personliche<br/> Beratung</span>
                <p>Cloudbasiert ist jederzeit an ihrer Seite und stellt sicher, dass ihr Projekt erfolgreich abläuft</p>
              </div>
              <div className="desktop-only col-md-6">
                <img src="assets/usp4.png" alt=""/>
                <span>100% Erfolgreich<br/>&nbsp;</span>
                <p>Cloudbasiert stellt sicher, dass Sie den geeigneten Experten bekommen. Sollten sie unzufrieden sein, vermittlen wir kostenlos einen neuen Experten.</p>
              </div>
            </div>
            <div className="info-box row">
              <div className="col-md-8">
                <h2>Warum <span className="acc">Cloud</span>basiert?</h2>
                <p>
                  Mit Cloudbasiert finden Sie immer die richtige Expertise für Ihr 
                  Digitalisierungsvorhaben in der Cloud. Innerhalb von 48 Stunden 
                  erhalten Sie Ihren Experten, für Ihre Cloud-Projekte.<br/><br/>
                  Die Experten von Cloudbasiert unterstützen Sie bei der strategischen 
                  Zieldefinition und helfen Ihnen operative bei der Realisierung.<br/><br/>
                  Egal was Sie in der Cloud umsetzen möchten, unsere Experten wählen mit 
                  Ihnen die passenden Technologiepartner aus.<br/><br/>
                  <span className="acc">Ihr Erfolg ist unsere Aufgabe!</span>
                </p>
              </div>
              <div className="col-md-4 bg">
                <h1 className="acc">&lt;1 Wochen</h1>
                <p>bis das Projekt begonnen hat</p>
                <h1 className="acc">2x schneller</h1>
                <p>konnen nun Daten abgerufen werden</p>
                <h1 className="acc">50% gesparen</h1>
                <p>im Vergleich zum Onpremis</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section8">
          <div className="container text-center">
            <h2 className="desktop-only acc">Zertifizierte Unterstützer</h2>
            <h1 className="desktop-only">Höchste Auszeichnungen unser Experten</h1>
            <h2 className="mobile-only acc">Zertifizierte<br/>Unterstützer</h2>
            <h1 className="mobile-only">Höchste Auszeichnungen unser Experten</h1>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <img src="assets/aws.png" alt=""/>
                  <span className="acc">PREMIER</span>
                  <p>Consulting Partner</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src="assets/azure.png" alt=""/>
                  <span className="acc">GOLD</span>
                  <p>Consulting Partner</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <img src="assets/gcp.png" alt=""/>
                  <span className="acc">ADVANCED</span>
                  <p>Consulting Partner</p>
                </div>
              </div>
            </div>
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
                <img src="assets/aws.png" alt=""/>
                <img src="assets/azure.png" alt=""/>
                <img src="assets/gcp.png" alt=""/>
                <img src="assets/alib.png" alt=""/>
              </div>
              <h1>Sie möchten die Vorteile der Cloud <br/>nutzen?</h1>
              <p>Unser Experten unterstützen Sie bei der Projekt Erstellung</p>
              <p className="acc"><img height="20" src="assets/phone.png" alt=""/>&nbsp;+49 (175) 91234</p>
              <p>
                Telefonisch erreichbar Montag bis Freitag von 8:00 bis 20:00 Uhr (UTC -5). 
                Sie können auch einen <a href="#" className="acc">Rückruf anfordern.</a>
              </p>
            </div>
          </div>
        </section>
        
        <section className="section9">
          <div className="container text-center">
            <p className="desktop-only">Jetzt kostenfreien individual Workshop beantragen</p>
            <p className="mobile-only">Finden Sie on-demand Experten für Ihre Cloud Projekte</p>
            <button className="desktop-only btn btn-acc" onClick={e => goToSection(e, workshopRef)}>Workshop planen</button>
            <button className="mobile-only btn btn-acc" onClick={e => goToSection(e, workshopRef)}>Jetzt starten</button>
          </div>
        </section>

        <section className="prefooter">
          <div className="container text-center">
            Sind Sie auf der Suche nach einer größeren Cloud Projekt interessiert? Kommen Sie gern auf uns zu.
            <hr/>
          </div>
        </section>
      </main>
      <Modal 
        isShowing={isShowing}
        toggle={toggle}
        // currStep={currStep}
        // setStep={setStep}
        // opts={opts}
        // setOpt={setOpt}
        // showMoreInfo={showMoreInfo}
        // toggleMoreInfo={toggleMoreInfo}
        // firstName={firstName}
        // lastName={lastName}
        // phone={phone}
        // email={email}
        // setValue={setValue}
        // isFormValid={isFormValid}
        // currEvent={currEvent}
        // getEvents={getEvents}
      />
    </>
  )
}
