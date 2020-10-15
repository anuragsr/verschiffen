import React, { useState } from 'react'
import { useForm } from 'react-hooks-helper'
import ReactDOM from 'react-dom'
import HttpService from '../services/HttpService'

const l = console.log.bind(window.console)
, initFormData = { firstName: '', lastName: '', phone: '', email: '' }
, useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  , [currStep, setCurrStep] = useState(1)
  , [currEvent, setCurrEvent] = useState(null)
  , [opts, setOpts] = useState([
    { name: "Cloud Strategie", img: "assets/th6.png", selected: true },
    { name: "Betriebskosten<br/>reduzieren", img: "assets/th8.png", selected: false },
    { name: "DevOps", img: "assets/devops.png", selected: false },
    { name: "Skalierbarkeit<br/>erhöhen", img: "assets/th4.png", selected: false },
    { name: "Effizienzsteigerung", img: "assets/th2.png", selected: false },
    { name: "Security", img: "assets/th1.png", selected: false },
    { name: "Migration", img: "assets/th10.png", selected: false },
  ])
  , [showMoreInfo, setShowMoreInfo] = useState(false)
  , [{ firstName, lastName, phone, email }, setValue] = useForm(initFormData)
  , toggle = (event) => { 
    setCurrEvent(event)
    setCurrStep(1)
    setIsShowing(!isShowing)
  }
  , setStep = num => { setCurrStep(num) }
  , setOpt = idx => { 
    // To select just one
    // opts.forEach((opt, i) => {
    //   i !== idx && (opt.selected = false)
    //   i === idx && (opt.selected = true)
    // })
    
    // To select multiple
    opts.forEach((opt, i) => (i === idx) && (opt.selected = !opt.selected))
    
    setOpts([...opts]) 
  }
  , toggleMoreInfo = () => { setShowMoreInfo(!showMoreInfo) }
  , isFormValid = () => {
    return (
      firstName.length > 0
      && lastName.length > 0
      && isEmailValid(email)
    )
  }

  return { 
    isShowing, toggle, 
    currStep, setStep, 
    opts, setOpt, 
    showMoreInfo, toggleMoreInfo,
    firstName, lastName, phone, email, setValue,
    isFormValid, currEvent
  }
}
, isEmailValid = emailStr => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(emailStr).toLowerCase())
}
, submit = ({ formData, setStep, getEvents }) => {
  // l(formData)
  new HttpService()
  .post('/process.php', { type: 'addEvent', formData })
  .then(res => {
    const { data } = res
    // l(data)
    if(data.result) {
      setStep(3)
      getEvents()
    }
    else alert(data.message)
  })
}
, outlook = (toggleFn) => {
  // l("Outlook")
  toggleFn()
}
, sendMail = (toggleFn, formData) => {
  toggleFn()
  new HttpService()
  .post('/process.php', { type: 'sendMailToUser', formData })
  .then(res => {
    const { data } = res
    // l(data)
    if(!data.result) alert(data.message)
  })
}
, Modal = ({ 
  isShowing, toggle, 
  currStep, setStep, 
  opts, setOpt, 
  showMoreInfo, toggleMoreInfo,
  firstName, lastName, phone, email, setValue,
  isFormValid, currEvent, getEvents
}) => ReactDOM.createPortal(
  <>
    <div className={`modal-outer${isShowing ? " show":""}`}>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">      
        <div className="desktop-only logo text-center">
          <span className="acc">Cloud</span>basiert.com
        </div>
        <div className="modal-inner">
          <div className="modal-header">
            <div className="logo">
              <span className="acc">Cloud</span>basiert.com
            </div>
            <button 
              type="button" 
              className="close-button" 
              data-dismiss="modal" 
              aria-label="Close" 
              onClick={toggle}
              >
              <span className="acc" aria-hidden="true">&times;</span>
            </button>
          </div>
          {currStep === 1 && <div className="step step1">
            <div className="text-center">
              <img className="desktop-only main" src="assets/search.png" alt=""/><br/>
              <h4>Themenschwerpunkte<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            </div>
            <div className="opts">
              <h5>Welchen Themen sollten im Workshop besprochen werden?</h5>
              <div className="ctn-box">
                {
                  opts.map((opt, idx) => (
                    <div 
                      key={idx}
                      className={`box text-center${opt.selected ? " selected":""}`}
                      onClick={() => {setOpt(idx)}}
                    >
                      <img src={opt.img} alt=""/>
                      <span dangerouslySetInnerHTML={{__html: opt.name}}/>
                      <div className="check-ind">
                        <div className="check-ind-inner"></div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="ctn-btn">
              <button className="btn btn-sec mr-2" onClick={toggle}>Zurück</button>
              <button className="btn btn-acc" onClick={() => setStep(2)}>Fortfahren</button>
            </div>
          </div>}
          {currStep === 2 && <div className="step step2">
            <div className="text-center">
              <img className="desktop-only" src="assets/meeting.png" alt=""/><br/>
              <h4>Workshop bestätigen<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
              <p>Die Veranstaltung wird über Zoom durchgeführt. Ein Link wird 24h vorher versendet.</p>
            </div>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <input onChange={setValue} type="text" value={firstName} name="firstName" className="form-control" placeholder="Vorname" />
                </div>
                <div className="form-group col-md-6">
                  <input onChange={setValue} type="text" value={lastName} name="lastName" className="form-control" placeholder="Nachname" />
                </div>
              </div>
              <div className="form-group">
                <input onChange={setValue} type="text" value={phone} name="phone"className="form-control" placeholder="Tragen Sie Ihre Telfonnummer ein" />
              </div>
              <div className="form-group">
                <input onChange={setValue} type="email" value={email} name="email" className="form-control" placeholder="Tragen hier Ihre E-Mail ein" />
              </div>
              <div className="ctn-btn">
                <button type="button" className="btn btn-sec mr-2" onClick={() => setStep(1)}>Zurück</button>
                <button 
                  className="btn btn-acc" 
                  type="button"
                  disabled={!isFormValid()}
                  onClick={
                    () => {
                      const selOpts = opts
                      .filter(opt => opt.selected)
                      .reduce((a, b) => { 
                        return { 
                          name: (a.name.length ? (a.name + ', ') : '') + b.name.replace(/<br\s*\/?>/gi, ' ')
                        } 
                      }, { name: '' }).name
                      , formData = { selOpts, currEvent, firstName, lastName, phone, email }
                      
                      submit({ formData, setStep, getEvents })
                    }
                  }
                >
                  Bestätigen</button>
              </div>
            </form>
          </div>}
          {currStep === 3 && <div className="step step3">
            <div className="text-center">
              <img className="desktop-only" src="assets/done.png" alt=""/><br/>
              <div className="message">
                <h1>Bestätigt!</h1><br/>
                Dien Termin:
                <h1>{currEvent.eventStr}</h1>
                Zoom meeting
              </div>
              {/* <button className="btn btn-acc mb-2 btn-outlook" onClick={() => outlook(toggle)}> */}
              <button className="btn btn-sec mb-2" onClick={() => outlook(toggle)}>
                <div className="row">
                  <div className="col-4">
                    <img src="assets/Outlook.com_icon.svg" alt=""/>
                  </div>
                  <div className="col-8 pl-0 text-left">
                    In Outlook hinzufügen
                  </div>
                </div>
              </button><br/>
              <button 
                className="btn btn-sec" 
                onClick={() => {
                  const selOpts = opts
                    .filter(opt => opt.selected)
                    .reduce((a, b) => { 
                      return { 
                        name: (a.name.length ? (a.name + ', ') : '') + b.name.replace(/<br\s*\/?>/gi, ' ')
                      } 
                    }, { name: '' }).name
                    , formData = { selOpts, currEvent, firstName, lastName, phone, email }

                  sendMail(toggle, formData)
                }}
                >
                <div className="row">
                  <div className="col-4">
                    <img src="assets/email.svg" alt=""/>
                  </div>
                  <div className="col-8 pl-0 text-left">
                    Termin an Email senden
                  </div>
                </div>
              </button>
            </div>
          </div>}
        </div>
      </div>
    </div>

    <div className={`modal-outer sec${showMoreInfo ? " show":""}`}>
      <div className="modal-overlay"/>
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">          
        <div className="modal-inner">
          <div className="modal-header">
            <div className="logo">
              <span className="acc">Cloud</span>basiert.com
            </div>
            <button 
              type="button" 
              className="close-button" 
              data-dismiss="modal" 
              aria-label="Close" 
              onClick={toggleMoreInfo}
              >
              <span className="acc" aria-hidden="true">&times;</span>
            </button>
          </div>
          <h4>Category more Info</h4>
          <p>
            Wenn im Steuerjahr 2019 ausländische Einkünfte erhalten wurden, 
            die nicht der deutschen Einkommensteuer unterliegen, 
            muss diese Frage mit "Ja" beantwortet werden. Andernfalls mit "Nein".<br/><br/>
            Beispiele für ausländische Einkünfte:<br/><br/>
            Lohneinkünfte für eine Tätigkeit im Ausland
          </p>
          <ul>
            <li>Einkünfte aus selbstständigen Tätigkeiten, die im Ausland ausgeübt werden</li>
            <li>Einkünfte aus Land- und Forstwirtschaft, deren bewirtschaftete Flächen im Ausland liegen</li>
            <li>Zinsen, Dividenden und Erträge für Einlagen bei ausländischen Finanzinstituten</li>
          </ul>
          <p>
            <span>VERSTEUERUNG</span><br/>
            Diese stehen unter dem so genannten Progressionsvorbehalt. Sie 
            werden nicht selbst versteuert, beeinflussen aber die Höhe 
            des persönlichen Steuersatzes, mit dem das Einkommen versteuert wird.
          </p>
        </div>
      </div>
    </div>
  </>, document.body
) 

export { Modal, useModal }
