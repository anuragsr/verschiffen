/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Slider } from 'rsuite'

import moment from "moment"
import 'moment/locale/de'
import DateTime from 'react-datetime'
import HttpService from "../services/HttpService"

import 'rsuite/dist/styles/rsuite-default.css'
import "react-datetime/css/react-datetime.css"

const l = console.log.bind(window.console)

, Step1 = ({ indicators, setFormObj, navigation, toggle, toggleMoreInfo }) => {
  const { next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , [checked, setChecked] = useState(false)
  , [opts, setOpts] = useState([
    { name: "Verpackte<br/>Materialien", img: "assets/th6.png", selected: true },
    { name: "Sonder-<br/>gepack", img: "assets/opt1.jpg", selected: false },
    { name: "Gasförmige<br/>Materialien", img: "assets/devops.png", selected: false },
    { name: "Fluide", img: "assets/th4.png", selected: false },
    { name: "Schüttgut", img: "assets/th2.png", selected: false },
    { name: "Hier nicht aufgeführt", img: "assets/th1.png", selected: false },
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

  useEffect(() => {
    setFormObj(prev => ({
      ...prev, 
      selOpts: opts
        .filter(opt => opt.selected)
        .reduce((a, b) => ({
          name: (a.name.length ? (a.name + ', ') : '') + b.name.replace(/<br\s*\/?>/gi, ' ').replace(/-/g, '')
        }), { name: '' }).name,
      isPacked: checked
    }))
  }, [opts, checked, setFormObj])

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
            <div className="ctn-box">{
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
              className={`ctn-check${checked? " selected" : ""}`}
              onClick={() => setChecked(!checked)} 
              >
              <div className="check-ind">
                <div className="check-ind-inner"></div>
              </div>
              <span>Die Sendung ist bereits verpackt.</span>
            </div>
          </div>
          <div className="ctn-btn">
            <button className="btn btn-sec mr-2" onClick={toggle}>Zurück</button>
            <button className="btn btn-acc" onClick={next}>Fortfahren</button>
          </div>
        </div>

      </div>
    </div>
  )
}

, Step2 = ({ indicators, setFormText, formTextData, navigation, toggleMoreInfo }) => {
  const { filled } = formTextData
  , { previous, next } = navigation
  , { isNext, isCurrent, isPrev } = indicators
  , isCurrentClass = isCurrent ? " current" : ""
  , isPrevClass = isPrev ? " prev" : ""
  , isNextClass = isNext ? " next" : ""
  , labels = ['0', '1/3', '1/2', '2/3', '1']
  , [sliderValue, setSliderValue] = useState(0)
  useEffect(() => {

    // setFormText
  }, [])

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
            <div className="ctn-slider">
              <img src="assets/cargo.jpg" alt=""/>
              <Slider 
                defaultValue={1}
                min={0}
                max={labels.length - 1}
                step={1}
                value={sliderValue}
                renderTooltip={() => labels[sliderValue]}
                onChange={setSliderValue}
                progress
              />
            </div>

            <h5>Wie viele Kontainer wollen Sie versenden?</h5>
          </div>
          <div className="ctn-btn">
            <button className="btn btn-sec mr-2" onClick={previous}>Zurück</button>
            <button className="btn btn-acc" onClick={next}>Fortfahren</button>
          </div>
        </div>
        {/* <div className="container">
          <div className="btn-back" onClick={previous}>
            <img src="assets/img/arr-left-tr.png" alt=""/>
            <span>&nbsp;&nbsp;Zurück</span>
          </div>
          <label className="label">
            <h4>Beschreiben Sie ihren Betreff ausführlich.</h4>
          </label>
          <textarea
            className="textarea form-control"
            name="details" 
            // value={details} 
            placeholder="Geben Sie die Angelegenheit hier ein"
            onChange={setForm}
            >
          </textarea>
          <div className="ctn-submit">
            <button 
              className="btn btn-lg btn-cta" 
              onClick={next}
              // disabled={!details.length}
              >Weiter</button>
          </div>
        </div>
         */}
      </div>
    </div>
  )
}

// , Step3 = ({ isNext, isCurrent, isPrev, date, setDate, navigation, toggle, toggleMoreInfo }) => {  
//   const { previous, next } = navigation
//   , isCurrentClass = isCurrent ? " current" : ""
//   , isPrevClass = isPrev ? " prev" : ""
//   , isNextClass = isNext ? " next" : ""
//   , yesterday = DateTime.moment().subtract( 1, 'day' )
//   , validDate = current => current.isAfter(yesterday)
//   , setDateValue = e => {
//     // l(e, typeof e) 
//     if(typeof e === "object") setDate(e.toDate())
//     else setDate(e)
//   }

//   return (
//     <div className={`step${isCurrentClass}${isPrevClass}${isNextClass}`}>
//       <div className="inner">

//         <div className="container">
//           <div className="btn-back" onClick={previous}>
//             <img src="assets/img/arr-left-tr.png" alt=""/>
//             <span>&nbsp;&nbsp;Zurück</span>
//           </div>
//           <label className="label">
//             <h4>Wählen Sie einen Termin zum Rückruf aus.</h4>
//           </label>
//           <DateTime 
//             closeOnSelect 
//             locale="de" 
//             isValidDate={validDate} 
//             value={date}
//             onChange={setDateValue}
//             inputProps={{
//               className: "input form-control",
//               placeholder: "Wählen Sie ein Datum und eine Uhrzeit",
//             }}
//           />
//           <div className="ctn-submit">
//             <button 
//               className="btn btn-lg btn-cta" 
//               onClick={next}
//               disabled={!moment(date).isValid()}
//               >Weiter</button>
//           </div>
//           {/* <div className="row">
//             <div className="col-md-6">
//             </div>
//           </div>   */}
//         </div>

//       </div>
//     </div>
//   )
// }

// , Step4 = ({ isNext, isCurrent, isPrev, setForm, formData, navigation, toggle, toggleMoreInfo }) => {
//   const { city } = formData
//   , { previous, next } = navigation
//   , isCurrentClass = isCurrent ? " current" : ""
//   , isPrevClass = isPrev ? " prev" : ""
//   , isNextClass = isNext ? " next" : ""
//   , cities = [
//     "Berlin",
//     "Munich",
//     "Frankfurt",
//   ]
//   return (
//     <div className={`step${isCurrentClass}${isPrevClass}${isNextClass}`}>
//       <div className="inner">

//         <div className="container">
//           <div className="btn-back" onClick={previous}>
//             <img src="assets/img/arr-left-tr.png" alt=""/>
//             <span>&nbsp;&nbsp;Zurück</span>
//           </div>
//           <label className="label">
//             <h4>In welcher Stadt benötigen Sie einen Notar?</h4>
//           </label>
//           <select 
//             className="select form-control"
//             name="city" 
//             value={city} 
//             onChange={setForm}>
//             {cities.map((value, idx) => (
//               <option key={idx} value={value}>{value}</option>
//             ))}
//           </select>          
//           <div className="ctn-submit">
//             <button className="btn btn-lg btn-cta" onClick={next}>Weiter</button>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// , Step5 = ({ isNext, isCurrent, isPrev, date, setForm, formData, navigation, toggle, toggleMoreInfo }) => {
//   const { firstName, lastName, email, phone } = formData
//   , { previous, next } = navigation
//   , isCurrentClass = isCurrent ? " current" : ""
//   , isPrevClass = isPrev ? " prev" : ""
//   , isNextClass = isNext ? " next" : ""
//   , [isAccept, setAccept] = useState(false)
//   , isEmailValid = emailStr => {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     return re.test(String(emailStr).toLowerCase())
//   }
//   , isFormValid = () => {
//     return (
//       firstName.length > 0
//       && lastName.length > 0
//       && isEmailValid(email)
//       && isAccept
//     )
//   }
//   , submitForm = e => {
//     formData.date = date.toISOString().slice(0, 19).replace('T', ' ')
//     // l(formData)
//     new HttpService()
//     .post('/process.php', { formData })
//     .then(res => {
//       const { data } = res
//       // l(data)
//       if(data.result) next(e)
//       else alert(data.message)
//     })
//   }

//   return (
//     <div className={`contact step${isCurrentClass}${isPrevClass}${isNextClass}`}>
//       <div className="inner">

//         <div className="container">
//           <div className="btn-back" onClick={previous}>
//             <img src="assets/img/arr-left-tr.png" alt=""/>
//             <span>&nbsp;&nbsp;Zurück</span>
//           </div>
//           <label className="label">
//             <h4>Tragen Sie ihre Daten unverbindlich ein.</h4>
//           </label>
//           <div className="form row">
//             <div className="col-md-6">
//               <label>Vorname</label>
//               <input
//                 placeholder="Vornamen eingeben"
//                 className="input form-control"
//                 name="firstName"
//                 type="text"
//                 value={firstName} 
//                 onChange={setForm}/>
//             </div>
//             <div className="col-md-6">
//               <label>Nachname</label>
//               <input
//                 placeholder="Nachnamen eingeben"
//                 className="input form-control"
//                 name="lastName"
//                 type="text"
//                 value={lastName} 
//                 onChange={setForm}/>
//             </div>
//             <div className="col-md-6">
//               <label>Email</label>
//               <input
//                 placeholder="Email eingeben"
//                 className="input form-control"
//                 name="email"
//                 type="email"
//                 value={email} 
//                 onChange={setForm}/>
//             </div>
//             <div className="col-md-6">
//               <label>Telefon (Optimal)</label>
//               <input
//                 placeholder="Phone eingeben"
//                 className="input form-control"
//                 name="phone"
//                 type="text"
//                 value={phone} 
//                 onChange={setForm}/>
//             </div>
//           </div>
//           <div className="custom-control custom-checkbox">
//             <input 
//               value="true"
//               type="checkbox" 
//               className="custom-control-input" 
//               id="customCheck1"
//               checked={isAccept}
//               onChange={e => setAccept(e.target.checked)}
//               />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Ich habe die <a href="#">Nutzungsbedingungen</a> gelesen.
//             </label>
//           </div>

//           <div className="ctn-submit">
//             <button 
//               disabled={!isFormValid()}
//               className="btn btn-lg btn-cta" 
//               onClick={submitForm}>
//               Weiter
//             </button>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

// , Step6 = ({ isNext, isCurrent, isPrev,  navigation }) => {
//   const { previous, next } = navigation
//   , isCurrentClass = isCurrent ? " current" : ""
//   , isPrevClass = isPrev ? " prev" : ""
//   , isNextClass = isNext ? " next" : ""

//   return (
//     <div className={`final step${isCurrentClass}${isPrevClass}${isNextClass}`}>
//       <div className="inner">

//         <div className="container">
//           <div className="text-center">
//             <img src="assets/img/success.png" alt=""/><br/>   
//             <label className="label">
//               <h4>Alle Unterlagen sind eingegangen.</h4>
//               <h6>Wir werden Sie benachrichtigen, sobald wir einen den geeigneten Notar in ihrer Nähe gefunden haben.</h6>
//             </label>       
//           </div>
//           <div className="ctn-submit">            
//             {/* <div className="btn-back" onClick={previous}>
//               <span>&nbsp;&nbsp;Zurück</span>
//             </div> */}
//             <button className="btn btn-lg btn-cta" onClick={next}>Ok</button>
//           </div>
//         </div>
        
//       </div>
//     </div>
//   )
// }

export { Step1, Step2, 
  // Step3, Step4, Step5, Step6 
}
