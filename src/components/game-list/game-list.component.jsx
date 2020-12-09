import React from 'react';

import GameItem from "../game-item/game-item.component";

import './game-list.styles.scss';

const GameList = (props) => (
    <div>
        <div className='game-list'>
            <div className='preview'>
                {
                    props.games
                        .map(({id, ...otherGameProps}) => (
                            <GameItem key={id} id={id} {...otherGameProps}/>
                        ))
                }
            </div>
        </div>
    </div>
)

export default GameList;