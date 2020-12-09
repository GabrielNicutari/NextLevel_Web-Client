import React, {Component} from 'react';
import http from '../../services/http.service';
import './game-create.style.scss'

export default class CreateGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        };
    }

    onChangeTitle = e => {
        this.setState({title: e.target.value});
    }

   onChangeDescription = e => {
        this.setState({description: e.target.value});
   }

    onChangeReleaseDate = e => {
        this.setState({releaseDate: e.target.value})
    }

    onChangeDeveloper = e => {
        this.setState({developer: e.target.value})
    }

    onChangePublisher = e => {
        this.setState({publisher: e.target.value})
    }

    onChangeEngine = e => {
        this.setState({engine: e.target.value})
    }

    onChangePrice = e => {
        this.setState({price: e.target.value})
    }

    onChangeReview = e => {
        this.setState({review: e.target.value})
    }

    onChangePosterUrl =  e => {
        this.setState({posterUrl: e.target.value})
    }

    onChangeCoverUrl = e => {
        this.setState({coverUrl: e.target.value})
    }

    onChangeTrailerUrl = e => {
        this.setState({trailerUrl: e.target.value})
    }

    onChangeAdUrl = e => {
        this.setState({adUrl: e.target.value})
    }


    saveGame = () => {

        let newGame = {
            title: this.state.title,
            description: this.state.description,
            releaseDate: this.state.releaseDate,
            developer: this.state.developer,
            publisher: this.state.publisher,
            engine: this.state.engine,
            price: this.state.price,
            review: this.state.review,
            posterUrl: this.state.posterUrl,
            coverUrl: this.state.coverUrl,
            trailerUrl: this.state.trailerUrl,
            adUrl: this.state.adUrl
        }

        http.post("/games/create", newGame)
            .then(r => {
                this.setState({
                    title: r.data.title,
                    description: r.data.description,
                    releaseDate: r.data.releaseDate,
                    developer: r.data.developer,
                    publisher: r.data.publisher,
                    engine: r.data.engine,
                    price: r.data.price,
                    review: r.data.review,
                    posterUrl: r.data.posterUrl,
                    coverUrl: r.data.coverUrl,
                    trailerUrl: r.data.trailerUrl,
                    adUrl: r.data.adUrl
                });
            })
            .catch(e => {
                console.log(e);
            })

    }

    render() {
        return(
            <div className='container'>

                <form>
                    <div className="field1-2">
                        <div>
                            <label>Title</label><br/>
                            <input
                                type="text" id="title" required value={this.state.title}
                                onChange={this.onChangeTitle} name="title"
                            />
                        </div>

                        <div>
                            <label>Description: </label><br/>
                            <textarea className="text-box"
                                      placeholder="Game Description"
                                      value={this.state.description} onChange={this.onChangeDescription}
                                      id="description" name="description"
                            />
                        </div>
                    </div>


                    <div className="field4-5-6">

                        <div>
                            <label>ReleaseDate</label><br/>
                            <input
                                type="date" id="releaseDate" required
                                value={this.state.releaseDate} onChange={this.onChangeReleaseDate} name="releaseDate"
                            />
                        </div>
                        <div>
                            <label>Review: </label><br/>
                            <input
                                type="number" min={0} step={1} required
                                value={this.state.review} onChange={this.onChangeReview}
                                name="review" id="review"
                            />
                        </div>

                        <div>
                            <label>Price: </label><br/>
                            <input
                                type="number" min={0} step={1} required
                                value={this.state.price} onChange={this.onChangePrice}
                                id="price" name="price"
                            />
                        </div>
                    </div>

                    <div className="developer">
                        <label>Developer: </label><br/>
                        <textarea className="text-box"
                                  placeholder="Game Developer"
                                  id="developer" name="developer" required
                                  value={this.state.developer} onChange={this.onChangeDeveloper}
                        />
                    </div>

                    <div className="publisher">
                        <label>Publisher: </label><br/>
                        <textarea className="text-box"
                                  placeholder="Game Publisher"
                                  id="publisher" name="publisher" required
                                  value={this.state.publisher} onChange={this.onChangePublisher}
                        />
                    </div>

                    <div className="engine">
                        <label>Engine: </label><br/>
                        <textarea className="text-box"
                                  placeholder="Game Engine"
                                  id="engine" name="engine" required
                                  value={this.state.engine} onChange={this.onChangeEngine}
                        />
                    </div>


                    <div className="poster-url">
                        <label>Poster Url: </label><br/>
                        <input
                            type="text" id="posterUrl" name="posterUrl" required
                            value={this.state.posterUrl} onChange={this.onChangePosterUrl}
                        />
                    </div>
                    <div className="cover-url">
                        <label>Cover Url: </label><br/>
                        <input
                            type="text" id="coverUrl" name="coverUrl" required
                            value={this.state.coverUrl} onChange={this.onChangeCoverUrl}
                        />
                    </div>

                    <div className="trailer-url">
                        <label>Trailer Url: </label><br/>
                        <input
                            type="text" id="trailerUrl" name="trailerUrl" required
                            value={this.state.trailerUrl} onChange={this.onChangeTrailerUrl}
                        />
                    </div>

                    <div className="trailer-url">
                        <label>Ad Url: </label><br/>
                        <input
                            type="text" id="adUrl" name="adUrl" required
                            value={this.state.adUrl} onChange={this.onChangeAdUrl}
                        />
                    </div>

                    <button className="btn-small btn-submit" onClick={this.saveGame}>
                        Submit
                    </button>

                    </form>
            </div>
        );
    }
}