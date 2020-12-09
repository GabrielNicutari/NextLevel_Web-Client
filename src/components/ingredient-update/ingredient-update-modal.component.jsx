import React from "react";
import "./ingredient-update.styles.scss";
import UpdateIngredient from "./ingredient-update.component.jsx";

export const UpdateModal = ({ show, close, state }) => {

  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          <div className="headline">Update selected ingredient</div>
          <UpdateIngredient state={state} close={close}/>
        </div>
        <div className="modal-footer">
          <button onClick={close} className="btn-small btn-cancel">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
