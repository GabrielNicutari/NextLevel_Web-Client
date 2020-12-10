import React, {Component} from 'react';
import http from '../../services/http.service';
import './game-update.styles.scss';
import { withRouter } from 'react-router-dom';

class UpdateGame extends Component {

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
                trailerUrl: "",
                adUrl: "",
                gameHasFieldsById: []
            },

            platforms: [],
            sysRequirements: [],
            genres: [],
            modes: [],
            pegiRatings: []
        };
    }

    componentDidMount() {
        this.setState(this.props.state);
    }
    onChangeTitle = e => {
        this.setState({game: {title: e.target.value}});
    }

    onChangeDescription = e => {
        this.setState({game: {description: e.target.value}});
    }

    onChangeReleaseDate = e => {
        this.setState({game: {releaseDate: e.target.value}})
    }

    onChangeDeveloper = e => {
        this.setState({game: {developer: e.target.value}})
    }

    onChangePublisher = e => {
        this.setState({game: {publisher: e.target.value}})
    }

    onChangeEngine = e => {
        this.setState({game: {engine: e.target.value}})
    }

    onChangePrice = e => {
        this.setState({game: {price: e.target.value}})
    }

    onChangeReview = e => {
        this.setState({game: {review: e.target.value}})
    }

    onChangePosterUrl =  e => {
        this.setState({game: {posterUrl: e.target.value}})
    }

    onChangeCoverUrl = e => {
        this.setState({game: {coverUrl: e.target.value}})
    }

    onChangeTrailerUrl = e => {
        this.setState({game: {trailerUrl: e.target.value}})
    }

    onChangeAdUrl = e => {
        this.setState({game: {adUrl: e.target.value}})
    }

    saveGame = () => {

        http
            .put(
                "/games/update/" + this.state.game.id,
                this.state.game
            )
            .then((response) => {
                this.props.history.go(0);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    afterSubmission = (event) => {
        event.preventDefault();
        this.saveGame();
    }

    render() {
        console.log(this.state);
        return(
            <div className='container'>

                <form onSubmit={this.afterSubmission}>
                    <div className="field1-2">
                        <div>
                            <label>Title</label><br/>
                            <input
                                type="text" id="title" required value={this.state.game.title}
                                onChange={this.onChangeTitle} name="title"
                            />
                        </div>

                        <div>
                            <label>Description: </label><br/>
                            <textarea className="text-box"
                                      placeholder="Game Description"
                                      value={this.state.game.description} onChange={this.onChangeDescription}
                                      id="description" name="description"
                            />
                        </div>
                    </div>


                    <div className="field4-5-6">

                        <div>
                            <label>ReleaseDate</label><br/>
                            <input
                                type="date" id="releaseDate" required
                                value={this.state.game.releaseDate} onChange={this.onChangeReleaseDate} name="releaseDate"
                            />
                        </div>
                        <div>
                            <label>Review: </label><br/>
                            <input
                                type="number" min={0} step={0.1} required
                                value={this.state.game.review} onChange={this.onChangeReview}
                                name="review" id="review"
                            />
                        </div>

                        <div>
                            <label>Price: </label><br/>
                            <input
                                type="number" min={0} step={0.01} required
                                value={this.state.game.price} onChange={this.onChangePrice}
                                id="price" name="price"
                            />
                        </div>
                    </div>

                    <div className="developer">
                        <label>Developer: </label><br/>
                        <textarea className="text-box"
                                  placeholder="Game Developer"
                                  id="developer" name="developer" required
                                  value={this.state.game.developer} onChange={this.onChangeDeveloper}
                        />
                    </div>

                    <div className="publisher">
                        <label>Publisher: </label><br/>
                        <textarea className="text-box"
                                  placeholder="Game Publisher"
                                  id="publisher" name="publisher" required
                                  value={this.state.game.publisher} onChange={this.onChangePublisher}
                        />
                    </div>

                    <div className="engine">
                        <label>Engine: </label><br/>
                        <textarea className="text-box"
                                  placeholder="Game Engine"
                                  id="engine" name="engine" required
                                  value={this.state.game.engine} onChange={this.onChangeEngine}
                        />
                    </div>


                    <div className="poster-url">
                        <label>Poster Url: </label><br/>
                        <input
                            type="text" id="posterUrl" name="posterUrl" required
                            value={this.state.game.posterUrl} onChange={this.onChangePosterUrl}
                        />
                    </div>
                    <div className="cover-url">
                        <label>Cover Url: </label><br/>
                        <input
                            type="text" id="coverUrl" name="coverUrl" required
                            value={this.state.game.coverUrl} onChange={this.onChangeCoverUrl}
                        />
                    </div>

                    <div className="trailer-url">
                        <label>Trailer Url: </label><br/>
                        <input
                            type="text" id="trailerUrl" name="trailerUrl" required
                            value={this.state.game.trailerUrl} onChange={this.onChangeTrailerUrl}
                        />
                    </div>

                    <div className="trailer-url">
                        <label>Ad Url: </label><br/>
                        <input
                            type="text" id="adUrl" name="adUrl"
                            value={this.state.game.adUrl} onChange={this.onChangeAdUrl}
                        />
                    </div>

                    <div className="drop-down">
                        <select>
                            {
                                this.state.game.gameHasFieldsById.length > 0 ?
                                    <option key={this.state.game.gameHasFieldsById[0].platformByPlatformId.id} disabled>
                                        default: {this.state.game.gameHasFieldsById[0].platformByPlatformId.name}
                                    </option> : null
                            }
                            {
                            this.state.platforms.map(item => (
                                <option key={item.id}>
                                   {item.name}
                                </option>
                            ))
                            }
                        </select>
                    </div>



                    <button className="btn-small btn-submit" type="submit" onClick={this.props.close}>
                        Submit
                    </button>

                </form>
            </div>
        );
    }
}

export default withRouter(UpdateGame);