import React from 'react';
import { Link } from "react-router-dom";

import './game-item.styles.scss';

const GameItem = ({id, title, posterUrl, developer, engine}) => (
    <Link className='game-item' to={"/games/" + id}>
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
    </Link>
)

export default GameItem;