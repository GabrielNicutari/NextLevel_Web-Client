import React, {Component} from 'react';
import http from '../../services/http.service';
import './recipe-update.styles.scss';
import { withRouter } from 'react-router-dom';

class UpdateRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: "",
            description: "",
            author: "",
            prepTime: 0,
            cookTime: 0,
            portions: 0,
            instructions: "",
            iconSrc: "",
            imageSrc: "",
            recipeHasIngredientsById: []
        };
    }

    componentDidMount() {
        this.setState(this.props.state);
    }

    onChangeName = e => {
        this.setState({name: e.target.value});
    }

   onChangeDescription = e => {
        this.setState({description: e.target.value});
   }

    onChangeAuthor = e => {
        this.setState({author: e.target.value})
    }

    onChangePrepTime = e => {
        this.setState({prepTime: e.target.value})
    }

    onChangeCookTime = e => {
        this.setState({cookTime: e.target.value})
    }

    onChangePortions = e => {
        this.setState({portions: e.target.value})
    }

    onChangeInstructions = e => {
        this.setState({instructions: e.target.value})
    }

    onChangeIconSrc =  e => {
        this.setState({iconSrc: e.target.value})
    }

    onChangeImageSrc = e => {
        this.setState({imageSrc: e.target.value})
    }

    updateRecipe = () => {

        http
            .put(
                "/recipes/update/" + this.state.id,
                this.state
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
    }

    render() {

        return(
            <div className='container'>

                <form onSubmit={this.afterSubmission}>
                    <div className="field1-2">
                        <div>
                            <label>Name</label><br/>
                            <input
                                type="text" id="name" required value={this.state.name}
                                onChange={this.onChangeName} name="name"
                            />
                        </div>
                        <div>
                            <label>Author</label><br/>
                            <input
                                type="text" id="author" required
                                value={this.state.author} onChange={this.onChangeAuthor} name="author"
                            />
                        </div>
                    </div>

                    <div>
                        <label>Description: </label><br/>
                        <textarea
                            placeholder="Recipe Description" rows={5} cols={50}
                            value={this.state.description} onChange={this.onChangeDescription}
                            id="description" name="description"
                        />
                    </div>

                    <div className="field4-5-6">
                        <div>
                            <label>Prep Time: </label><br/>
                            <input
                                type="number" min={0} step={1} required
                                value={this.state.prepTime} onChange={this.onChangePrepTime}
                                name="prepTime" id="prepTime"
                            />
                        </div>

                        <div>
                            <label>Cook Time: </label><br/>
                            <input
                                type="number" min={0} step={1} required
                                value={this.state.cookTime} onChange={this.onChangeCookTime}
                                id="cookTime" name="cookTime"
                            />
                        </div>

                        <div>
                            <label>Portions: </label><br/>
                            <input
                                type="number" min={0} step={1} required
                                value={this.state.portions} onChange={this.onChangePortions}
                                id="portions" name="portions"
                            />
                        </div>
                    </div>

                    <div className="instructionse">
                        <label>Instructions: </label><br/>
                        <textarea
                            placeholder="Recipe Instructions" rows={15  } cols={50}
                            id="instructions" name="instructions" required
                            value={this.state.instructions} onChange={this.onChangeInstructions}

                        />
                    </div>
                    <div className="url-source">
                        <label>Icon Source: </label><br/>
                        <input
                            type="text" id="iconSrc" name="iconSrc" required
                            value={this.state.iconSrc} onChange={this.onChangeIconSrc}
                        />
                    </div>
                    <div className="url-source">
                        <label>Image Source: </label><br/>
                        <input
                            type="text" id="imgSrc" name="imgSrc" required
                            value={this.state.imageSrc} onChange={this.onChangeImageSrc}
                        />
                    </div>

                    <button className="btn-small btn-submit" onClick={() => {this.updateRecipe(); this.props.close()}} type="submit">
                        Submit
                    </button>

                    </form>
            </div>
        );
    }
}

export default withRouter(UpdateRecipe);