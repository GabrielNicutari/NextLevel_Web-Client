import React from 'react';
import { Link } from "react-router-dom";

import './recipe-item.styles.scss';

const RecipeItem = ({id, name, imageSrc, prepTime, cookTime}) => (
    <Link className='recipe-item' to={"/recipes/" + id}>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageSrc})`
            }}
        />
        <div className='recipe-item-footer'>
            <span className='name'>{name} {id}</span>
            <span className='prep-time'>{prepTime} min</span>
            <span className='cook-time'>| {cookTime} min</span>
        </div>
    </Link>
)

export default RecipeItem;