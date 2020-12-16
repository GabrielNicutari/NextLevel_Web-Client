import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart.actions";

import './game-item.styles.scss';

const GameItem = ({item, addItem}) => {

    const {id, title, posterUrl, developer, engine} = item;

	console.log(item);

    let disableLink = false;

    const handleHover = () => {
        disableLink = !disableLink;
    }

    return(
    	<Link className='game-item' onClick={e => {
            if(disableLink === true) {
                e.preventDefault();
            }
        }} to={"/games/" + id}
        >
        	<div
           	 className='image'
           	 style={{
          	      backgroundImage: `url(${posterUrl})`
         	   }}
     		/>
        	<div className='game-item-footer'>
           	    <span className='name'>{title}</span>
            	    <span className='developer'>{developer}</span>
  	     	    <span className='engine'>| {engine}</span>
        	</div>
		
		<CustomButton onMouseOver={handleHover} onMouseOut={handleHover} onClick={() => addItem(item)} inverted> Add To Cart</CustomButton>
   	</Link>
	)
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(GameItem);