import React, { useState } from "react";

import IngredientItem from "../ingredient-item/ingredient-item.component";

import "./ingredient-list.styles.scss";
import { UpdateModal } from "../ingredient-update/ingredient-update-modal.component";

const IngredientList = ({ ingredients }) => {
    const [show, setShow] = useState(false);
    const [fields, setFields] = useState(null);

    const showModal = (fields) => {
        setShow(true);
        setFields(fields);
    }

    const close = () => {
        setShow(false);
    }

    return(
        <div>
            <div className="ingredient-list">
                <div className="preview">
                    {ingredients.map(({ id, ...otherIngredientProps }) => (
                        <IngredientItem key={id} id={id} show={show} close={close} {...otherIngredientProps} customClickEvent={showModal}/>
                    ))}
                    <div>
                        {show ? (
                            <div onClick={close} className="back-drop show"/>
                        ) : (

                            <div className="back-drop"/>
                        )}
                        <UpdateModal show={show} close={close} state={fields} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IngredientList;
