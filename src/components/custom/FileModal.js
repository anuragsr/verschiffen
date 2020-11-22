/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { saveAs } from 'file-saver'

import { l, cl } from '../helpers/Log'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)
  , toggle = () => { setIsShowing(!isShowing) }
  return { isShowing, toggle }
}
, FileModal = ({ isShowing, toggle }) => createPortal(
  <div className={`modal-outer modal-file${isShowing ? " show":""}`}>
    <div className="modal-overlay"/>
    <div className="modal-wrapper" onClick={toggle} aria-modal aria-hidden tabIndex={-1} role="dialog">        
      <div className="modal-inner" onClick={e => e.stopPropagation()}>
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
        <div className="mt-4">
          Klicken Sie zum Herunterladen auf die folgenden Dateien
        </div>
        <div className="ctn-file-dl">
          <a href={void(0)} onClick={() => saveAs("/files/Doc1.pdf", "Mediakit-Dokument-Version-1.pdf")}>Mediakit-Dokument-Version-1.pdf</a>
          <a href={void(0)} onClick={() => saveAs("/files/Doc2.pdf", "Mediakit-Dokument-Version-2.pdf")}>Mediakit-Dokument-Version-2.pdf</a>
          <a href={void(0)} onClick={() => saveAs("/files/Doc3.pdf", "Mediakit-Dokument-Version-3.pdf")}>Mediakit-Dokument-Version-3.pdf</a>
        </div>
        <div className="ctn-btn">
          <button className="btn btn-acc" onClick={toggle}>Zurück</button>
        </div>
      </div>
    </div>
  </div>, document.body
) 

export { FileModal, useModal }
