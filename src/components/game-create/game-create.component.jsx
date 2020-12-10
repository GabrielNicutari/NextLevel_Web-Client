import React, {Component} from 'react';
import http from '../../services/http.service';
import './game-create.style.scss'

export default class CreateGame extends Component {
    constructor(props) {
        super(props);

        this.state = {
            game: {
                id: "",
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

            platformByPlatformId: {id: ""},
            sysRequirementsBySysRequirementId: {id: ""},
            genreByGenreId: {id: ""},
            modeByModeId: {id: ""},
            pegiRatingsByPegiRatingId: {id: ""},

            platforms: []/*this.props.state.platforms*/,
            sysRequirements: [],
            genres: [],
            modes: [],
            pegiRatings: []
        };
    }

    componentDidMount() {
        this.fetchData();
        // this.setState({game: {...this.state.game, id: this.props.state.game.id}});
    }

    fetchData() {
        http.all([
            http.get("/games/platforms"),
            http.get("/games/sys-requirements"),
            http.get("/games/genres"),
            http.get("/games/modes"),
            http.get("/games/pegi-rating")
        ])
        .then(
            http.spread(
                (...responses) => {
                    this.setState({platforms: responses[0].data})
                    this.setState({sysRequirements: responses[1].data})
                    this.setState({genres: responses[2].data})
                    this.setState({modes: responses[3].data})
                    this.setState({pegiRatings: responses[4].data})
                }
            )
        )
        .catch((e) => {
            console.log(e);
        });
    }

    onChangeTitle = e => {
        this.setState({game: {...this.state.game, title: e.target.value}});
    }

   onChangeDescription = e => {
        this.setState({game: {...this.state.game, description: e.target.value}});
   }

    onChangeReleaseDate = e => {
        this.setState({game: {...this.state.game, releaseDate: e.target.value}})
    }

    onChangeDeveloper = e => {
        this.setState({game: {...this.state.game, developer: e.target.value}})
    }

    onChangePublisher = e => {
        this.setState({game: {...this.state.game, publisher: e.target.value}})
    }

    onChangeEngine = e => {
        this.setState({game: {...this.state.game, engine: e.target.value}})
    }

    onChangePrice = e => {
        this.setState({game: {...this.state.game, price: e.target.value}})
    }

    onChangeReview = e => {
        this.setState({game: {...this.state.game, review: e.target.value}})
    }

    onChangePosterUrl =  e => {
        this.setState({game: {...this.state.game, posterUrl: e.target.value}})
    }

    onChangeCoverUrl = e => {
        this.setState({game: {...this.state.game, coverUrl: e.target.value}})
    }

    onChangeTrailerUrl = e => {
        this.setState({game: {...this.state.game, trailerUrl: e.target.value}})
    }

    onChangeAdUrl = e => {
        this.setState({game: {...this.state.game, adUrl: e.target.value}})
    }

    onChangePlatform = e => {
        this.setState({platformByPlatformId: {id: e.target.value}}, () => console.log(this.state.platformByPlatformId.id))
    }

    onChangeSysRequirement = e => {
        this.setState({sysRequirementsBySysRequirementId: {id: e.target.value}})
    }

    onChangeGenres = e => {
        this.setState({genreByGenreId: {id: e.target.value}})
    }

    onChangeModes = e => {
        this.setState({modeByModeId: {id: e.target.value}})
    }

    onChangePegiRatings = e => {
        this.setState({pegiRatingsByPegiRatingId: {id: e.target.value}})
    }

     handleSubmit= () => {

        let newGame = {
            title: this.state.game.title,
            description: this.state.game.description,
            releaseDate: this.state.game.releaseDate,
            developer: this.state.game.developer,
            publisher: this.state.game.publisher,
            engine: this.state.game.engine,
            price: this.state.game.price,
            review: this.state.game.review,
            posterUrl: this.state.game.posterUrl,
            coverUrl: this.state.game.coverUrl,
            trailerUrl: this.state.game.trailerUrl,
            adUrl: this.state.game.adUrl
        }

        let gameHasFields = {
            gameByGameId: this.state.game.id,
            platformByPlatformId: this.state.platformByPlatformId,
            sysRequirementsBySysRequirementId: this.state.sysRequirementsBySysRequirementId,
            genreByGenreId: this.state.genreByGenreId,
            modeByModeId: this.state.modeByModeId,
            pegiRatingsByPegiRatingId: this.state.pegiRatingsByPegiRatingId
        }

        // http.post("/games/create", newGame)
        //     .then(response => {
        //         console.log(response.data.id);
        //         this.setState({game: {...this.state.game, id: response.data.id}});
        //         console.log(response.data.id);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })
        //
        // http.post("/games/insertIntoGameHasFields", gameHasFields)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(e => {
        //         console.log(e);
        //     })

         http.all([
             http.post("/games/create", newGame),
             http.post("/games/insertIntoGameHasFields", gameHasFields)
         ])
             .then(
                 http.spread(
                     (...responses) => {
                        this.setState({game: {...this.state.game, id: responses[0].data.id}});
                        this.setState({game: {...this.state.game, gameHasFieldsById: responses[2].data}});
                     }
                 )
             )
             // .then(() => {
             //     http.post("/games/insertIntoGameHasFields", gameHasFields)
             //         .then(r => {
             //             // this.setState({game: {...this.state.game, id: r.data.id}});
             //             console.log(r.data);
             //         })
             // })
             .catch((e) => {
                 console.log(e);
             });
     }

    saveGame = () => {

    }

    saveFields = () => {

    }

    render() {
        // console.log("state" , this.state);

        return(
            <div className='container'>

                <form className="form">
                    <div className="field1-2">
                        <div>
                            <label style={{
                                color: 'white'
                            }}>Title</label><br/>

                            <label>Title1</label><br/>

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

                        <div >
                            <label>ReleaseDate</label ><br/>
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
                            <label>Price1: </label><br/>
                            <input
                                type="number" min={0} step={0.01} required
                                value={this.state.game.price} onChange={this.onChangePrice}
                                id="price" name="price"
                            />
                        </div>
                    </div>

                    <div className="developer">
                        <label>Develope1: </label><br/>
                        <textarea className="text-box"
                                  placeholder="Game Developer"
                                  id="developer" name="developer" required
                                  value={this.state.game.developer} onChange={this.onChangeDeveloper}
                        />
                    </div>

                    <div className="publisher">
                        <label>Publisher2: </label><br/>
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
                            type="text" id="adUrl" name="adUrl" required
                            value={this.state.game.adUrl} onChange={this.onChangeAdUrl}
                        />
                    </div>

                    <div className="drop-down">
                        <select id="platforms" name="platforms" onChange={this.onChangePlatform} >
                            {
                                this.state.platforms.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="drop-down">
                        <select onChange={this.onChangeSysRequirement} className='sys' id="sys-requirements" name="sys-requirements">
                            {
                                this.state.sysRequirements.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.cpu}
                                        {item.gpu}
                                        {item.memory}
                                        {item.storage}
                                        {item.os}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="drop-down">
                        <select id="genres" name="genres" onChange={this.onChangeGenres}>
                            {
                                this.state.genres.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="drop-down">
                        <select id="modes" name="modes" onChange={this.onChangeModes}>
                            {
                                this.state.modes.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="drop-down">
                        <select id="pegi-ratings" name="pagi-ratings" onChange={this.onChangePegiRatings}>
                            {
                                <option disabled>Select</option>
                            }
                            {
                                this.state.pegiRatings.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.rating}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <button className="btn-small btn-submit" onClick={this.handleSubmit}>
                        Submit
                    </button>

                    </form>
            </div>
        );
    }
}