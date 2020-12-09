import React, {Component} from 'react';

import http from "../../services/http.service";
import Loading from "../../Loading";
import './game-page.styles.scss';
import {UpdateModal} from "../../components/game-update/game-update-modal.component";
import {DeleteModal} from "../../components/game-delete/game-delete-modal.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

class GamePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: {
                id: null,
                title: "",
                description: "",
                releaseDate: "",
                developer: "",
                publisher: "",
                engine: "",
                price: "",
                review: "",
                posterUrl: "",
                coverUrl: "",
                adUrl: "",
                gameHasFieldsById: []
            },
            //ingredients: []
            loading: undefined,
            done: undefined,
            show: false,
            showDelete: false,
        }
    }

    componentDidMount() {
        this.getGame(this.props.match.params.id);
    }

    getGame(id) {
        this.setState({loading: undefined});
        this.setState({done: undefined});

        http
            .get("/games/" + id)
            .then((response) => {
                this.setState({
                    game: response.data
                });
                // this.setState({
                //     ingredients: response.data.gameHasIngredientsById  //only if we feel like we need it later
                // })
            })
            .then(() => {
                this.setState({loading: true});
                setTimeout(() => {
                    this.setState({done: true});
                },500)
            })
            .catch((e) => {
                console.log(e);
            })
    }


    close = () => this.setState({show: false});

    showModal = () => this.setState({show: true})

    closeDelete = () => this.setState({showDelete: false});

    showDeleteModal = () => this.setState({showDelete: true})

    render() {
        const { game, done, loading, show, showDelete } = this.state;

        return (
            <div className='game-page'>
                {!done?
                    (<Loading loading={loading} />)
                    :
                    (<div>
                        <div
                            className='banner'
                            style={{
                                backgroundImage: `url(${game.imageSrc})`
                            }}
                        />
                        <div className='title'>
                    <span className='game-name'>
                        {game.name}
                    </span>

                            <span className='game-description'>
                        {game.description}
                    </span>

                        <div className="item">
                                <p ><FontAwesomeIcon icon={faClock} className="clockIcon" size={"1x"}/>
                                    Prep time: <span className="highLight2">20 minutes</span>
                                    Cook time: <span className="highLight2">30 minutes</span>
                                    Total time: <span className="highLight2">50 minutes</span>
                                </p>
                            </div>
                        </div>

                        <div className='nav-bar'>
                            { showDelete ? <div onClick={this.closeDelete} className='back-drop show'/> : <div className='back-drop'/> }
                            <button onClick={ this.showDeleteModal } className="btn-medium btn-openModal">Delete Game</button>
                        </div>
                        <DeleteModal showDelete={showDelete} closeDelete={this.closeDelete} state={this.state.game}/>

                        <div className='nav-bar'>
                            { show ? <div onClick={this.close} className='back-drop show'/> : <div className='back-drop'/> }
                            <button onClick={ this.showModal } className="btn-medium btn-openModal btn-updateModal">Update Game</button>
                        </div>
                        <UpdateModal show={show} close={this.close} state={this.state.game}/>

                        <div className='ingredients'>
                            <div className='ingredients-header'>
                                Ingredients
                            </div>

                            <div className='ingredients-item'>
                                {game.gameHasIngredientsById.map((ingredientById) => (
                                    <div key={ingredientById.id}>
                                        <span>{ingredientById.unitSize} </span>

                                        {ingredientById.ingredientsByIngredientId.measurementUnitByMeasurementUnitId.type === "ammount" ?
                                            ' ' : <span>{ingredientById.ingredientsByIngredientId.measurementUnitByMeasurementUnitId.type} </span>
                                        }

                                        <span>{ingredientById.ingredientsByIngredientId.name} </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='instructions'>
                            <div className='instructions-header'>
                                Instructions
                            </div>

                            <div className='instructions-item'>
                                {game.instructions}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default GamePage;