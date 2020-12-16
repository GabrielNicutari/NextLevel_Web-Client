import React from 'react';

import GameItem from "../game-item/game-item.component";

import './game-list.styles.scss';

const GameList = (props) => (
    <div>
        <div className='game-list'>
            <div className='preview'>
                {
                    props.games
                        .map((item) => (
                            <GameItem key={item.id} item={item}/>
                        ))
                }
            </div>
        </div>
    </div>
)

export default GameList;