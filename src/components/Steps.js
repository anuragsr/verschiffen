/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Slider from 'react-rangeslider'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import deLocale from '@fullcalendar/core/locales/de'
import moment from 'moment'
import 'moment/locale/de'
import Dropzone from 'react-dropzone'

import HttpService from '../helpers/HttpService'
import Dots from '../helpers/Dots'
import { l, cl } from '../helpers/Log'

import 'react-rangeslider/lib/index.css'

const createFormData = (type, formObjData, formTextData) => {
  l(formObjData, formTextData)

  const formData = new FormData()
  , { files } = formObjData
  , mySqlDate = function(date) {
    const twoDigits = d => {
      if(0 <= d && d < 10) return "0" + d.toString()
      if(-10 < d && d < 0) return "-0" + (-1*d).toString()
      return d.toString()
    }
    return date.getUTCFullYear() + "-" + twoDigits(1 + date.getUTCMonth()) + "-" + twoDigits(date.getUTCDate())
  }
  
  formData.append("type", type)

  for(const key in formTextData){ formData.append(key, formTextData[key]) }
  for(const key in formObjData){
    switch(key){
      case "files": files.forEach(x => formData.append("files[]", x)); break;
      case "filled": formData.append(key, formObjData[key]["text"]); break;
      case "conWeights": formData.append(key, formObjData[key].map(w => w+" kg").join(", ")); break;
      case "date": formData.append(key, mySqlDate(formObjData[key])); break;
      default: formData.append(key, formObjData[key]);
    }
  }

  return formData
}

, Step1 = ({ indicators, formObjData, setFormObj, navigation, toggle, toggleMoreInfo }) => {
  const { next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , [isPacked, setIsPacked] = useState(false)
  , [opts, setOpts] = useState([
    { name: "Verpackte<br/>Materialien", img: "assets/opt1.png", selected: true },
    { name: "Sonder-<br/>gepack", img: "assets/opt2.png", selected: false },
    { name: "Gasförmige<br/>Materialien", img: "assets/opt3.png", selected: false },
    { name: "Fluide", img: "assets/opt4.png", selected: false },
    { name: "Schüttgut", img: "assets/opt5.png", selected: false },
    { name: "Hier nicht aufgeführt", img: "assets/opt6.png", selected: false },
  ])
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
  , doNext = () => {
    l(formObjData)
    next()
  }

  useEffect(() => {
    setFormObj(prev => ({
      ...prev, 
      selOpts: opts
        .filter(opt => opt.selected)
        .reduce((a, b) => ({
          name: (a.name.length ? (a.name + ', ') : '') + b.name.replace(/<br\s*\/?>/gi, ' ').replace(/-/g, '')
        }), { name: '' }).name,
      isPacked
    }))
  }, [opts, isPacked, setFormObj])

  return (
    <div className={`step step1${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">
        
        <div className="container">
          <div className="ctn-heading">
            <h4>Art der Versendung<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <div className="subtitle">Schritt 1 von 7</div>
          </div>
          <div className="ctn-content">
            <h5>Welche Art von Ware wollen Sie verschiffen?</h5>
            <div className="ctn-box desktop-only">{
              opts.slice(0, opts.length / 2).map((opt, idx) => (
                <div key={idx}
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
            }</div>
            <div className="ctn-box desktop-only">{
              opts.slice(opts.length / 2, opts.length).map((opt, idx) => (
                <div key={idx}
                  className={`box text-center${opt.selected ? " selected":""}`}
                  onClick={() => {setOpt(idx + opts.length / 2)}}
                >
                  <img src={opt.img} alt=""/>
                  <span dangerouslySetInnerHTML={{__html: opt.name}}/>
                  <div className="check-ind">
                    <div className="check-ind-inner"></div>
                  </div>
                </div>
              ))
            }</div>
            <div className="ctn-box mobile-only">{
              opts.map((opt, idx) => (
                <div key={idx}
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
            }</div>
            <div 
              className={`ctn-check${isPacked? " selected" : ""}`}
              onClick={() => setIsPacked(!isPacked)} 
              >
              <div className="check-ind">
                <div className="check-ind-inner"></div>
              </div>
              <span>Die Sendung ist bereits verpackt.</span>
            </div>
          </div>
          <div className="ctn-btn">
            <button className="btn btn-sec mr-2" onClick={toggle}>Zurück</button>
            <button className="btn btn-acc" onClick={doNext}>Fortfahren</button>
          </div>
        </div>

      </div>
    </div>
  )
}

, Step2 = ({ indicators, formObjData, setFormObj, formTextData, setFormText, navigation, toggleMoreInfo }) => {
  const { numCon } = formTextData
  , { previous, next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , labels = [
    { text: '0',   waterLevel: -75 },
    { text: '1/3', waterLevel: -60 },
    { text: '1/2', waterLevel: -50 },
    { text: '2/3', waterLevel: -40 },
    { text: '1',   waterLevel: -20 },    
  ]
  , [sliderValue, setSliderValue] = useState(1)
  , numConArr = [ 
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "5+", value: 5 },
  ]
  , [conWeights, setConWeights] = useState([])
  , doNext = () => {
    l(formObjData, formTextData)
    next()
  }

  useEffect(() => {
    setFormObj(prev => ({
      ...prev,
      filled: labels[sliderValue]
    }))
  }, [sliderValue])

  useEffect(() => {
    setConWeights([...[...Array(parseInt(numCon)).keys()].map(el => "")])
  }, [numCon])
  
  useEffect(() => {
    // l(conWeights)
    setFormObj(prev => ({ ...prev, conWeights }))
  }, [conWeights])

  return (
    <div className={`step step2${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="ctn-heading">
            <h4>Warenangabe<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <div className="subtitle">Schritt 2 von 7</div>
          </div>
          <div className="ctn-content">
            <h5>Wie viel der Ware wollen Sie verschiffen?</h5>
            <div className="ctn-cargo-ind">
              <img src="assets/container-empty.png" alt=""/>
              <img 
                className="water" 
                src="assets/water.png" alt=""
                style={{ bottom: labels[sliderValue].waterLevel }}
                />
            </div>
            <div className="ctn-slider">
              <Slider
                min={0}
                max={labels.length - 1}
                step={1}
                value={sliderValue}
                format={() => labels[sliderValue].text}
                onChange={setSliderValue}
              />
              <div className="ctn-label">
                <span>leer</span>
                <span>voll</span>
              </div>
            </div>

            <h5>Wie viele Kontainer wollen Sie versenden?</h5>
            <div className="ctn-num">
              <select 
                className="select form-control"
                name="numCon" 
                value={numCon} 
                onChange={setFormText}>
                  <option value="0">Anzahl auswählen</option>
                  {numConArr.map((obj, idx) => (
                    <option key={idx} value={obj.value}>{obj.label}</option>
                  ))}
              </select>
            </div>
          </div>
          <div className="ctn-btn">
            <button className="btn btn-sec mr-2" onClick={previous}>Zurück</button>
            <button className="btn btn-acc" disabled={numCon === "0"} onClick={doNext}>Fortfahren</button>
          </div>
        </div>
      </div>
    </div>
  )
}

, Step3 = ({ indicators, formObjData, setFormObj, formTextData, navigation, toggleMoreInfo }) => {
  const { conWeights } = formObjData
  , { previous, next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , handleChange = (e, idx) => {
    conWeights[idx] = e.target.value
    setFormObj(prev => ({ ...prev, conWeights }))
  }
  , doNext = () => {
    l(formObjData, formTextData)
    next()
  }

  return (
    <div className={`step step3${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="ctn-heading">
            <h4>Quantität<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <div className="subtitle">Schritt 3 von 7</div>
          </div>
          <div className="ctn-content">
            <h5>Wie viel kg oder l wird die gesamte Versendung wiegen?</h5>
            {/* <pre>{JSON.stringify(conWeights)}</pre> */}
            {
              conWeights && conWeights.map((el, i) => (
                <div className="row mb-4" key={i}>
                  <div className="col-6">
                    <div>Gesamtgewicht pro Container</div>
                    <span>Container der versendet wird</span>
                  </div>
                  <div className="col-6 right pl-0">
                    <div className="unit">kg</div>                
                    <input 
                      className="form-control" 
                      type="text"                       
                      value={conWeights[i]}
                      onChange={e => handleChange(e, i)}
                      placeholder="0.00"/> / Container
                  </div>
                </div>
              ))
            }
          </div>
          <div className="ctn-btn">
            <button className="btn btn-sec mr-2" onClick={previous}>Zurück</button>
            <button className="btn btn-acc" onClick={doNext}>Fortfahren</button>
          </div>
        </div>
      </div>
    </div>
  )
}

, Step4 = ({ indicators, formObjData, setFormObj, formTextData, navigation, toggleMoreInfo }) => {  
  const { previous, next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , [isDateCommit, setIsDateCommit] = useState(false)
  , onDateClick = info => {
    const { date, dayEl, jsEvent } = info

    jsEvent.preventDefault() // don't let the browser navigate
    
    document
    .querySelectorAll(".fc-daygrid-day.active")
    .forEach(el => el.classList.remove("active"))
    dayEl.classList.add("active")

    setFormObj(prev => ({ ...prev, date }))
  }
  , doNext = () => {
    l(formObjData, formTextData)
    next()
  }

  useEffect(() => {
    setFormObj(prev => ({ ...prev, isDateCommit }))
  }, [isDateCommit, setFormObj])

  return (
    <div className={`step step4${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="ctn-heading">
            <h4>Datum<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <div className="subtitle">Schritt 4 von 7</div>
          </div>
          <div className="ctn-content">            
            <h5>Wann wollen Sie ihre Ware verschiffen?</h5>
            <div className="ctn-calendar">
              <FullCalendar
                locale={deLocale}
                plugins={[ dayGridPlugin, interactionPlugin ]}
                initialView="dayGridMonth"
                selectAllow={info => !info.start.isBefore(moment())}
                dateClick={onDateClick}
                headerToolbar={{
                  start: null, // will normally be on the left. if RTL, will be on the right
                  center: 'prev title next',
                  end: null // will normally be on the right. if RTL, will be on the left
                }}
                height="100%"
                contentHeight={"auto"}
                // selectable={true}
                // unselectAuto={false}
              />
            </div>
            <div 
              className={`ctn-check${isDateCommit? " selected" : ""}`}
              onClick={() => setIsDateCommit(!isDateCommit)} 
              >
              <div className="check-ind">
                <div className="check-ind-inner"></div>
              </div>
              <span>Ich will mich nicht festlegen.</span>
            </div>
          </div>
          <div className="ctn-btn">
            <button className="btn btn-sec mr-2" onClick={previous}>Zurück</button>
            <button className="btn btn-acc" onClick={doNext}>Fortfahren</button>
          </div>
        </div>

      </div>
    </div>
  )
}

, Step5 = ({ indicators, formObjData, setFormObj, formTextData, setFormText, navigation, toggleMoreInfo }) => {  
  const { details } = formTextData
  , { files } = formObjData
  , { previous, next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , doNext = () => {
    l(formObjData, formTextData)
    next()
  }

  return (
    <div className={`step step5${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="ctn-heading">
            <h4>Beschreibung<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <div className="subtitle">Schritt 5 von 7</div>
          </div>
          <div className="ctn-content">            
            <h5>Möchsten Sie uns noch Dokumente zusenden?</h5>
            <textarea
              className="textarea form-control"
              name="details" 
              value={details} 
              placeholder={"* Lorem ipsum dolo iris\x0a* Lorem ipsum dolo iris\x0a* Lorem ipsum dolo iris"}
              onChange={setFormText}
              >
            </textarea>
            <h5>Zusätzliche  Unterlagen, Referenzen, o.ä. (optional)</h5>
            <Dropzone 
              noClick={true}
              noKeyboard={true}
              onDrop={acceptedFiles => 
                setFormObj(prev => ({...prev, files: acceptedFiles}))
              }
              >
              {({getRootProps, getInputProps, open}) => (
                <section>
                  <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()} />
                    <p>Datei in dieses Feld ziehen oder <a href={void(0)} onClick={open}>hier clicken</a></p>
                  </div>
                  <div className="up-info">Du kannst bis zu 5 Datein unter <b>100 MB</b> hochladen</div>
                  {
                    files && (files.length !== 0) && <>
                      <aside>Uploaded Files:</aside>
                      <ul>{
                        files.map(file => (
                          <li key={file.path}>
                            {file.path} - {Math.round(file.size/1000)} Kb
                          </li>
                        ))
                      }</ul>
                    </>
                  }
                </section>
              )}
            </Dropzone>
          </div>
          <div className="ctn-btn">
            <button className="btn btn-sec mr-2" onClick={previous}>Zurück</button>
            <button className="btn btn-acc" onClick={doNext}>Fortfahren</button>
          </div>          
        </div>

      </div>
    </div>
  )
}

, Step6 = ({ indicators, formObjData, formTextData, setFormText, navigation, toggleMoreInfo }) => {  
  const { email, phone } = formTextData
  , { previous, next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , isEmailValid = emailStr => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(emailStr).toLowerCase())
  }
  , isFormValid = () => phone.length > 0 && isEmailValid(email)
  , doNext = () => {
    l(formObjData, formTextData)
    next()
  }

  return (
    <div className={`step step6${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="ctn-heading">
            <img src="assets/received.jpg" alt=""/><br/>            
            <h4>Angebot erhalten<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <div className="subtitle">
              Nachdem Sie ihre Kontaktdaten eingetragen haben, werden wir uns mit einem personalisierten Angebot melden.
            </div>
          </div>
          <div className="ctn-content row">
            <div className="col-md-3"></div>
            <div className="form col-md-6">
              <div className="input-group">
                <input
                  placeholder="Tragen Sie Ihre Telfonnummer ein"
                  className="form-control"
                  name="phone"
                  type="text"
                  value={phone} 
                  onChange={setFormText}/>
              </div>

              <div className="input-group">
                <input
                  placeholder="Tragen hier Ihre E-Mail ein "
                  className="form-control"
                  name="email"
                  type="email"
                  value={email} 
                  onChange={setFormText}/>
              </div>
              
              <div className="ctn-btn">
                <button className="btn btn-sec mr-2" onClick={previous}>Zurück</button>
                <button className="btn btn-acc" disabled={!isFormValid()} onClick={doNext}>Bestätigen</button>
              </div>          
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

, Step7 = ({ indicators, formObjData, formTextData, setFormText, navigation, toggleMoreInfo }) => {  
  const { fname, lname, street, postcode, place } = formTextData
  , { previous, next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , [submitted, setSubmitted] = useState(false)
  , isFormValid = () => (
    fname.length > 0
    && lname.length > 0
    && street.length > 0
    && postcode.length > 0
    && place.length > 0
  )
  , submitForm = e => {
    setSubmitted(true)
    
    new HttpService()    
    .post('/process.php', createFormData("addShipment", formObjData, formTextData))
    .then(res => {
      const { data } = res
      l(data)
      if(data.result) next(e)
      else alert(data.message)
      // setTimeout(() => {
      // }, 1000)
    })
  }

  return (
    <div className={`step step7${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

        <div className="container">
          <div className="ctn-heading">
            <h4>Beschreibung<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <div className="subtitle">Schritt 7 von 7</div>
          </div>
          <div className="ctn-content">
            <h5>Möchsten Sie uns noch Dokumente zusenden?</h5>
            <div className="row">
              <div className="form col-md-8">
                <div className="row">
                  <div className="col-12">                  
                    <div className="input-group">
                      <input
                        placeholder="Vorname"
                        className="input form-control"
                        name="fname"
                        type="text"
                        value={fname} 
                        onChange={setFormText}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">                  
                    <div className="input-group">
                      <input
                        placeholder="Nachname"
                        className="input form-control"
                        name="lname"
                        type="text"
                        value={lname} 
                        onChange={setFormText}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">                  
                    <div className="input-group">
                      <input
                        placeholder="Straße und Hausnummer"
                        className="input form-control"
                        name="street"
                        type="text"
                        value={street} 
                        onChange={setFormText}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">                  
                    <div className="input-group">
                      <input
                        placeholder="Postleizahl"
                        className="input form-control"
                        name="postcode"
                        type="text"
                        value={postcode} 
                        onChange={setFormText}/>
                    </div>
                  </div>
                  <div className="col-6">                  
                    <div className="input-group">
                      <input
                        placeholder="Ort"
                        className="input form-control"
                        name="place"
                        type="text"
                        value={place} 
                        onChange={setFormText}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ctn-btn">
            <button 
              className="btn btn-sec mr-2" 
              onClick={previous}
              disabled={submitted}
            >Zurück</button>
            <button 
              className="btn btn-acc" 
              disabled={!isFormValid() || submitted} 
              onClick={submitForm}
            >
              { !submitted && <>Angebot erhalten</> }
              { submitted && <Dots /> }
            </button>
          </div>  
        </div>
        
      </div>
    </div>
  )
}

, Step8 = ({ indicators, toggle, formObjData, formTextData, toggleMoreInfo }) => {  
  const { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , closeQuestionnaire = () => {
    toggle()
    new HttpService()    
    .post('/process.php', createFormData("sendMailToUser", formObjData, formTextData))
    .then(res => {
      const { data } = res
      l(data)
    })
  }

  return (
    <div className={`step step8${isCurrentClass}${isPrevClass}${isNextClass}`}>
      <div className="inner">

      <div className="container">
          <div className="ctn-heading">
            <h4>Fertig<img onClick={toggleMoreInfo} src="assets/info.png" alt=""/></h4>
            <img className="final" src="assets/final.gif" alt=""/>
            <h4>Gratulation!</h4>
            <div className="subtitle">
              Unser System analysiert nun Ihre Anfrage.<br/>
              Sie erhalten innerhalb von 48 Stunden Vorschläge 
              über geeignete on-demand Experten.
            </div>
          </div>
        
          <div className="ctn-btn text-center">
            <button className="btn btn-acc" onClick={closeQuestionnaire}>Zur Startseite</button>
          </div>  
        </div>
        
      </div>
    </div>
  )
}

export { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8 }
