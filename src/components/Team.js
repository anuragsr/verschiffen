/* eslint-disable no-unused-vars */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Carousel from "react-img-carousel"
import { FileModal, useModal } from './FileModal'
import { l, cl } from '../helpers/Log'

import '../scss/team.scss'
import 'react-img-carousel/lib/carousel.css'

export default function Team(){
  const { isShowing, toggle } = useModal()
  
  return (
    <>
    <main className="team">
      <section className="section0">
        <div className="container text-center">
          <h1 className="desktop-only">Das sind wir <span className="acc">Cloud</span>base.</h1>
          <h1 className="mobile-only">Das sind wir<br/><span className="acc">Cloud</span>base.</h1>
          <h4 className="desktop-only">
            Eine Plattform, um globale Cloud Services zu planen und zu implemtieren.
          </h4>
          <h4 className="mobile-only">
            Lernen Sie das Team kennen
          </h4>
          <button className="desktop-only btn btn-acc">Unsere Story</button>
          <div className="mobile-only">
            <button className="btn btn-acc">Projekt erstellen</button>
            <h4 className="subtitle">Ein Job wird im Schnitt aller 4 Sek gebucht</h4>
          </div>
        </div>
      </section>

      <section className="section1">
        <div className="container text-center">
          <h2 className="acc">Statement</h2>
          <h1 className="desktop-only">Unsere Mission</h1>
          <h1 className="mobile-only">Unsere Mission</h1>
          <div className="points">
            <h4 className="desktop-only">
              Cloudbase nutzt Bewertungs-Algorithmen, um on-demand 
              Experten ideal auswählen und das volle Risiko<br/> 
              übernehmen zu können. So kann Cloudbase den Erfolg 
              des Projektes garantieren.
            </h4>
            <h4 className="mobile-only">
              Cloudbase nutzt Bewertungs-Algorithmen, um on-demand 
              Experten ideal auswählen und das volle Risiko 
              übernehmen zu können. 
            </h4>
          </div>
          <div className="rating">
            <div>
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
              <img src="assets/star.png" alt=""/>
            </div>
            <span className="acc">4,9 / 5</span>
          </div>
          <div className="desktop-only sub">
            8323 zufriedene Kunden
          </div>
        </div>
      </section>

      <section className="section2"></section>

      <section className="section3">
        <div className="container text-center">
          <h2 className="acc">Feedback</h2>
          <h1 className="desktop-only">Was unsere Kunden denken</h1>
          <h1 className="mobile-only">Was unsere Kunden<br/> denken</h1>
          <div className="points">
            <div className="ctn-point">
              <h4>Daniel, H.</h4>
              <p>
                Simple and trustworthy system. The project manager through text message is a good idea and helps a lot with the process,
              </p>
              <span>2. Feb 2019</span>
            </div>
            <div className="ctn-point">
              <h4>Daniel, H.</h4>
              <p>
                Simple and trustworthy system. The project manager through text message is a good idea and helps a lot with the process,
              </p>
              <span>2. Feb 2019</span>
            </div>
            <div className="ctn-point">
              <h4>Daniel, H.</h4>
              <p>
                Simple and trustworthy system. The project manager through text message is a good idea and helps a lot with the process,
              </p>
              <span>2. Feb 2019</span>
            </div>
          </div>
          <p className="mobile-only see-more">
            Would you like to see more? <a className="acc" href="#">See all stories</a>
          </p>            
        </div>
      </section>

      <section className="section4">
        <div className="container text-center">
          <h2 className="desktop-only acc">Feedback</h2>
          <h1 className="desktop-only">Unternehmen die an uns glauben</h1>
          <h2 className="mobile-only acc">Kunden</h2>
          <h1 className="mobile-only">Diese Kunden<br/>nutzen uns</h1>
          <div className="ctn-unter row">
            <div className="col-6 col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(1).png" alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(2).png" alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(3).png" alt=""/>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(4).png" alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(5).png" alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(6).png" alt=""/>
                  </div>
                </div>
              </div>
            </div>

            <div className="desktop-only col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(3).png" alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(6).png" alt=""/>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="ctn-img">
                    <img src="assets/company-cl(1).png" alt=""/>
                  </div>
                </div>
              </div>
            </div>              
          </div> 
          <button className="mobile-only btn btn-acc">Mehr erfahren</button>
        </div>
      </section>

      <section className="section5">
        <div className="container text-center">
          <h2 className="desktop-only acc">Unterstützer</h2>
          <h1 className="desktop-only">Unsere Partner</h1>
          <h2 className="mobile-only acc">Unterstützer</h2>
          <h1 className="mobile-only">Unsere Partner</h1>
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
          <div className="mobile-only lernen">
            <h2>lernen<span className="acc">.</span></h2> 
            <h4>von CLOUDBASE</h4>
            <p>Professionelle Kurse, die von den weltweit führenden Experten geleitet werden.</p>
            <p>Entdecken Sie, was Sie über Cloud-bezogene Themen für Ihr eigenes Unternehmen erfahren können.</p>
            <div className="text-center">
              <button className="btn btn-acc">Mehr erfahren</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section6">
        <div className="container text-center">
          <h2 className="acc">Unser Service</h2>
          <h1>Wir haben einen aktiven Blog</h1>
          <div className="desktop-only row ctn-blog-posts">
            <div className="col-md-4">
              <div className="ctn-blog-single">     
                <div className="ctn-cover"></div>
                <h2>AWS Migration in the 21st Century</h2>
                <div className="review">
                  <img className="user" src="assets/user.png" alt=""/>
                  <div className="post-info">
                    <h4>Caro L.</h4>
                    <span>AWS Expert</span>
                    <span><br/>April 7 - 8 min read</span>
                  </div>
                  <div className="reaction">
                    <img src="assets/claps.png" alt=""/>&nbsp;211
                    <span></span>
                    <img src="assets/bookmark.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ctn-blog-single">
                <div className="ctn-cover"></div>
                <h2>Google Cloud Migration</h2>
                <div className="review">
                <img className="user" src="assets/user.png" alt=""/>
                <div className="post-info">
                  <h4>Caro L.</h4>
                  <span>AWS Expert</span>
                  <span>April 7 - 8 min read</span>
                </div>
                <div className="reaction">
                  <img src="assets/claps.png" alt=""/>&nbsp;211
                  <span></span>
                  <img src="assets/bookmark.png" alt=""/>
                </div>
              </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="ctn-blog-single">
                <div className="ctn-cover"></div>
                <h2>Azure Cloud Migration with Partner</h2>
                <div className="review">
                <img className="user" src="assets/user.png" alt=""/>
                <div className="post-info">
                  <h4>Caro L.</h4>
                  <span>AWS Expert</span>
                  <span>April 7 - 8 min read</span>
                </div>
                <div className="reaction">
                  <img src="assets/claps.png" alt=""/>&nbsp;211
                  <span></span>
                  <img src="assets/bookmark.png" alt=""/>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="mobile-only row ctn-blog-posts">
            <Carousel 
              cellPadding={-55}
              lazyLoad={false}
              dots={false}
              infinite={false}
              clickToNavigate={false}
            >
              <div className="ctn-blog-single">
                <div className="ctn-cover"></div>
                <h2>AWS Migration in the 21st Century</h2>
                <div className="review">
                  <img className="user" src="assets/user.png" alt=""/>
                  <div className="post-info">
                    <h4>Caro L.</h4>
                    <span>AWS Expert</span>
                    <span><br/>April 7 - 8 min read</span>
                  </div>
                  <div className="reaction">
                    <img src="assets/claps.png" alt=""/>&nbsp;211
                    <span></span>
                    <img src="assets/bookmark.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="ctn-blog-single">
                <div className="ctn-cover"></div>
                <h2>Google Cloud Migration</h2>
                <div className="review">
                <img className="user" src="assets/user.png" alt=""/>
                <div className="post-info">
                  <h4>Caro L.</h4>
                  <span>AWS Expert</span>
                  <span>April 7 - 8 min read</span>
                </div>
                <div className="reaction">
                  <img src="assets/claps.png" alt=""/>&nbsp;211
                  <span></span>
                  <img src="assets/bookmark.png" alt=""/>
                </div>
              </div>
              </div>
              <div className="ctn-blog-single">
                <div className="ctn-cover"></div>
                <h2>Azure Cloud Migration with Partner</h2>
                <div className="review">
                  <img className="user" src="assets/user.png" alt=""/>
                  <div className="post-info">
                    <h4>Caro L.</h4>
                    <span>AWS Expert</span>
                    <span><br/>April 7 - 8 min read</span>
                  </div>
                  <div className="reaction">
                    <img src="assets/claps.png" alt=""/>&nbsp;211
                    <span></span>
                    <img src="assets/bookmark.png" alt=""/>
                  </div>
                </div>
              </div>
              <div className="ctn-blog-single">
                <div className="ctn-cover"></div>
                <h2>Azure Cloud Migration with Partner</h2>
                <div className="review">
                  <img className="user" src="assets/user.png" alt=""/>
                  <div className="post-info">
                    <h4>Caro L.</h4>
                    <span>AWS Expert</span>
                    <span><br/>April 7 - 8 min read</span>
                  </div>
                  <div className="reaction">
                    <img src="assets/claps.png" alt=""/>&nbsp;211
                    <span></span>
                    <img src="assets/bookmark.png" alt=""/>
                  </div>
                </div>
              </div>
              
            </Carousel>
            <div className="text-center w-100">
              <button className="btn btn-acc">Mehr erfahren</button>
            </div>
          </div>
          <div className="desktop-only row ctn-int">
            <div className="col-md-5 left">
              <h1>Interessant?<br/>Schreib Sie über uns</h1>
              <img src="assets/news.png" alt=""/>
            </div>
            <div className="col-md-7 right">
              <p>Melde dich unter press@cloudbase.com und erfahre mehr über Cloudbase. Oder lade dir hier unser Media Kit herunter</p>
                <button className="btn btn-acc" onClick={toggle}>Mediakit runterladen</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section7">
        <div className="container text-center">
          <div className="desktop-only row">
            <div className="col-md-6">
              <div className="act act1 text-left">
                <span className="acc">Benotigst du weitere Hilfe?</span>
                <p>Kontakiere uns</p>
                <button className="btn btn-sec">Hilfe erhalten</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="act act2 text-left">
                <span className="acc">Benotigst du sofortige Hilfe?</span>
                <p>Frag nach Antworten</p>
                <button className="btn btn-acc">Chat starten</button>
              </div>
            </div>
          </div>
          <div className="row info">
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

      <section className="section8">
        <div className="container text-center">
          <p className="desktop-only">Zugang zu spezialisierten Talenten für deine Anforderungen</p>
          <p className="mobile-only">Zugang zu spezialisierten Talenten für deine Anforderungen</p>
          <button className="btn btn-acc">Gig Posten</button>
          <button className="btn btn-sec">Demo Anfragen</button>
        </div>
      </section>
          
      <section className="prefooter">
        <div className="container text-center">
          Looking to hire for long-term or full-time assignments? See how Cloudbase Payroll simplifies admin.
          <hr/>
        </div>
      </section>
    </main>
      <FileModal isShowing={isShowing} toggle={toggle} />
    </>
  )
}