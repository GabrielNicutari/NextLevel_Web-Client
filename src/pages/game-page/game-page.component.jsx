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
            sysRequirementsBySysRequirementId: [],
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
                //     fields: response.data.gameHasFieldsById  //only if we feel like we need it later
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
                                backgroundImage: `url(${game.coverUrl})`
                            }}
                        />
                        <div className='title'>
                            <span className='game-name'>
                                {game.title}
                            </span>

                            <div className='game-description'>
                                {game.description}
                            </div>

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

                        <div className='fields'>
                            <div className='fields-header'>
                                Fields
                            </div>

                            <div className='fields-item'>
                                <div className='game-description'>
                                    {game.releaseDate}
                                </div>

                                <div className='game-description'>
                                    {game.developer}
                                </div>

                                <div className='game-description'>
                                    {game.publisher}
                                </div>

                                <div className='game-description'>
                                    {game.engine}
                                </div>

                                <div className='game-description'>
                                    {game.price}
                                </div>

                                <div className='game-description'>
                                    {game.review}
                                </div>

                                <div className='game-description'>
                                    {game.trailerUrl}
                                </div>
                            </div>
                        </div>

                        <div className='instructions'>
                            <div className='instructions-header'>
                                Other Fields
                            </div>

                            <div className='instructions-item'>
                                {game.gameHasFieldsById.map((field) => (
                                    <div key={field.id}>
                                        <div>Platform: {field.platformByPlatformId.name} </div>

                                        <div>Genre: {field.genreByGenreId.name} </div>

                                        <div>Mode: {field.modeByModeId.name} </div>

                                        <div>Pegi Rating:{field.pegiRatingsByPegiRatingId.rating} </div>

                                        <br/>

                                        <div>
                                            <p><strong>SYS REQ</strong></p>
                                            <div>CPU: {field.sysRequirementsBySysRequirementId.cpu} </div>
                                            <div>GPU: {field.sysRequirementsBySysRequirementId.gpu} </div>
                                            <div>MEMORY: {field.sysRequirementsBySysRequirementId.memory} </div>
                                            <div>STORAGE: {field.sysRequirementsBySysRequirementId.storage} </div>
                                            <div>OS: {field.sysRequirementsBySysRequirementId.os} </div>
                                        </div>

                                        <br/>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default GamePage;