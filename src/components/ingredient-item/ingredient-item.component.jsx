import React from "react";

import "./ingredient-item.styles.scss";

const IngredientItem = ({ id, name, pricePerUnit, imageSrc, measurementUnitByMeasurementUnitId, customClickEvent}) => {

    const handleClick = () => {
        let fields = {id, name, pricePerUnit, imageSrc, measurementUnitByMeasurementUnitId};
        customClickEvent(fields);
    }

    return(
      <div className="ingredient-item" onClick={handleClick}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${imageSrc})`,
          }}
        />
        <div className="ingredient-item-footer">
          <span className="name">{name}</span>
        </div>
      </div>
    )
};

export default IngredientItem;
