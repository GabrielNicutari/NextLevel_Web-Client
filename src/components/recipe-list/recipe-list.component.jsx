import React from 'react';

import RecipeItem from "../recipe-item/recipe-item.component";

import './recipe-list.styles.scss';

const RecipeList = (props) => (
    <div>
        <div className='recipe-list'>
            <div className='preview'>
                {
                    props.recipes
                        .map(({id, ...otherRecipeProps}) => (
                            <RecipeItem key={id} id={id} {...otherRecipeProps}/>
                        ))
                }
            </div>
        </div>
    </div>
)

export default RecipeList;