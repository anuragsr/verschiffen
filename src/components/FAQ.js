/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import * as $ from 'jquery'
import '../scss/faq.scss'

import { l, cl } from '../helpers/Log'

export default function FAQ(){
    
  useEffect(() => {
    $('.collapse').on('show.bs.collapse', function (e) {
      const el = $(`a[href="#${this.id}"]`)
      el.addClass("shown")
      el.siblings().addClass("shown")
    })
    $('.collapse').on('hide.bs.collapse', function (e) {
      const el = $(`a[href="#${this.id}"]`)
      el.removeClass("shown")
      el.siblings().removeClass("shown")
    })
  }, [])

  return (
    <main className="faq">
      <section className="section0">
        <div className="container">
          <h1 className="desktop-only">Häufig gestellte Fragen</h1>
          <h1 className="mobile-only">Häufig gestellte Fragen</h1>
          <h4 className="desktop-only">
            Sie haben Fragen zu Cloudbase? Hier finden Sie häufig gestellte Fragen. Sie haben ihre Frage nicht gefunden? Kontaktieren Sie gerne unseren Support.
          </h4>
          <h4 className="mobile-only acc">
            Finde hier<br/>Antwort auf fast<br/> alle Fragen
          </h4>
          <button className="mobile-only btn btn-acc">Jetzt beginnen</button>
          <h5 className="mobile-only">
            On-demand Experten für Sie jederzeit verfügbar.
          </h5>
        </div>
      </section>

      <section className="section1">
        <div className="container text-center">
          <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
            <li className="nav-item">
              <a onClick={e => e.preventDefault()} className="nav-link active" id="expert-tab" data-toggle="tab" href="#expert">
                <span className="desktop-only">On-Demand Experte</span>
                <span className="mobile-only">Für<br/>Cloud Experte</span>
              </a>
            </li>
            <li className="nav-item">
              <a onClick={e => e.preventDefault()} className="nav-link" id="company-tab" data-toggle="tab" href="#company">
                <span className="desktop-only">Unternehmen</span>
                <span className="mobile-only">Für<br/>Unternehmen</span>
              </a>
            </li>
          </ul>

          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="expert">
              
              <div className="heading">Registrierung</div>
              
              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p className="shown">
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon shown" data-toggle="collapse" href="#q0">
                    <img src="assets/arrow-up.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse show" id="q0">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="sm">Watch this quick video to learn more</p>
                  <button className="btn btn-acc">Video anschauen</button>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q1">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q1">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q2">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q2">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q3">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q3">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>
              
              <div className="heading">Registrierung</div>
              
              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q4">
                    <img src="assets/arrow-up.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q4">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="sm">Watch this quick video to learn more</p>
                  <button className="btn btn-acc">Video anschauen</button>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q5">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q5">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q6">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q6">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q7">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q7">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>
              
              <div className="heading">Registrierung</div>
              
              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q8">
                    <img src="assets/arrow-up.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q8">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="sm">Watch this quick video to learn more</p>
                  <button className="btn btn-acc">Video anschauen</button>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q9">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q9">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon shown" data-toggle="collapse" href="#q10">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q10">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#q11">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="q11">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

            </div>

            <div className="tab-pane fade" id="company">
              
              <div className="heading">Registrierung Company</div>
              
              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq0">
                    <img src="assets/arrow-up.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq0">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="sm">Watch this quick video to learn more</p>
                  <button className="btn btn-acc">Video anschauen</button>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq1">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq1">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon shown" data-toggle="collapse" href="#uq2">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq2">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq3">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq3">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>
              
              <div className="heading">Registrierung</div>
              
              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq4">
                    <img src="assets/arrow-up.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq4">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="sm">Watch this quick video to learn more</p>
                  <button className="btn btn-acc">Video anschauen</button>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq5">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq5">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon shown" data-toggle="collapse" href="#uq6">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq6">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq7">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq7">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>
              
              <div className="heading">Registrierung</div>
              
              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq8">
                    <img src="assets/arrow-up.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq8">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p className="sm">Watch this quick video to learn more</p>
                  <button className="btn btn-acc">Video anschauen</button>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq9">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq9">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase<br/>
                    -Beraternetzwerk aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon shown" data-toggle="collapse" href="#uq10">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq10">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat:<br/>
                      * <b>sed</b> diam voluptua. At vero eos et accusam<br/>
                      * <b>et</b> justo duo dolores et ea rebum.<br/>
                      * <b>Stet</b> clita kasd gubergren, no sea<br/>
                      * <b>takimata</b> sanctus est Lorem ipsum dolor sit amet.
                  </p>
                  <p>
                    Aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  </p>
                </div>       
              </div>

              <div className="ctn-qa">
                <div className="acc ctn-q">
                  <p>
                    Muss ich etwas bezahlen, wenn ich in das Cloudbase-Beraternetzwerk<br/>
                    aufgenommen werden möchte?
                  </p>
                  <a className="ctn-exp-icon" data-toggle="collapse" href="#uq11">
                    <img className="plus" src="assets/plus.png" alt=""/>
                  </a>
                </div>
                <div className="collapse multi-collapse" id="uq11">
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  </p>
                </div>       
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="section2">
        <div className="container text-center">
          <p className="desktop-only">Zugang zu spezialisierten Talenten für deine Anforderungen</p>
          <p className="mobile-only">Zugang zu spezialisierten Talenten für deine Anforderungen</p>
          <button className="btn btn-acc">Projekt erstellen</button>
          <button className="btn btn-sec">Gigs ansehen</button>
        </div>
      </section>
      
      <section className="prefooter">
        <div className="container text-center">
          Sie suchen nach Hilfe für längere Projekte oder festen Mitarbeitern? Cloubase hilft Ihnen auch hierbei. Nehmen Sie einfach Kontakt mit uns auf.
          <hr/>
        </div>
      </section>
    </main>
  )
}