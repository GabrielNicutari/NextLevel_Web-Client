import React from 'react'
import './game-update.styles.scss'
import UpdateGame from './game-update.component.jsx'

export const UpdateModal= ({show, close, state}) => {

    return (
        <div className="modal-wrapper"
             style={{
                 transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                 opacity: show ? '1' : '0',
                 zIndex: show ? '10' : '-2',
                 transition: show ? '.5s ease' : '.5s ease'
             }}
        >
            <div className="modal-header">
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <div className="headline">Update the game</div>
                    <UpdateGame state={state} close={close}/>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-small btn-cancel">Close</button>
                </div>
            </div>
        </div>
    )
}