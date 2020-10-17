import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm, useStep } from 'react-hooks-helper'
import { Step1, Step2, 
  // Step3, Step4, Step5, Step6 
} from "./Steps"

const l = console.log.bind(window.console)
, steps = [ Step1, Step2, 
  // Step3, Step4, Step5, Step6 
]
, useModal = () => {
  const [isShowing, setIsShowing] = useState(true)
  , [showMoreInfo, setShowMoreInfo] = useState(false)
  , toggle = () => { setIsShowing(!isShowing) }
  , toggleMoreInfo = () => { setShowMoreInfo(!showMoreInfo) }

  return { 
    isShowing, toggle, 
    showMoreInfo, toggleMoreInfo,
  }
}
, Modal = ({ 
  isShowing, toggle, 
  showMoreInfo, toggleMoreInfo
}) => {

  // Form and Navigation
  const textData = {
    filled: "0",
    matter: "Beglaubigung",
    odate:"",
    details: "",
    city: "Berlin",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  }
  , objData = {
    date: new Date(),
    selOpts: "",
    isPacked: false
  }
  , [formTextData, setFormText] = useForm(textData)
  , [formObjData, setFormObj] = useState(objData)
  , { index, navigation } = useStep({ initialStep: 0, steps })
  , props = { 
    isShowing, toggle, 
    showMoreInfo, toggleMoreInfo,
    formTextData, setFormText, 
    formObjData, setFormObj, 
    navigation
  }

  return createPortal(
    <>
      <div className={`modal-outer${isShowing ? " show":""}`}>
        <div className="modal-overlay"/>
        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
          <div className="modal-inner">
            <div className="modal-header">
              <div className="logo">
                <span className="acc">Verschiffen</span>.com
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
            <div className="modal-body-custom">
              {
                steps.map((Component, idx) => (
                  <Component // Eg. Step1
                    key={idx}
                    indicators={{
                      isPrev: index === idx + 1 // 2
                      , isCurrent: index === idx  // 1
                      , isNext: index === idx - 1 // 0
                    }}
                    {...props}
                  />
                ))
              } 
            </div>
            <div className="modal-footer-custom">
              <div className="progress">
                <div className="bar" style={{ width: `${12.5*(index + 1)}%` }}></div>
              </div>
              <div className="content">
                <div className="btn-back" onClick={toggle}>
                  <img src="assets/arr-left-tr.png" alt=""/>
                  <span>Zurück</span>
                </div>
                <div className="footer-text">
                  <img src="assets/alarm.jpg" alt=""/>
                  <span className="acc">3 Minuten</span>&nbsp;um deinen Auftrag mehr als 10.000 Freelancern zu zeigen
                </div>
              </div>
            </div>
            {/* {currStep === 1 && <div className="step step1">
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
          */}
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
}

export { Modal, useModal }
