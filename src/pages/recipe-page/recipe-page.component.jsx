import React, {Component} from 'react';

import http from "../../services/http.service";
import Loading from "../../Loading";
import './recipe-page.styles.scss';
import {UpdateModal} from "../../components/recipe-update/recipe-update-modal.component";
import {DeleteModal} from "../../components/recipe-delete/recipe-delete-modal.component";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-solid-svg-icons";

class RecipePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: {
                id: null,
                name: "",
                description: "",
                author: "",
                prepTime: null,
                cookTime: null,
                portions: null,
                instructions: "",
                iconSrc: "",
                imageSrc: "",
                recipeHasIngredientsById: []
            },
            //ingredients: []
            loading: undefined,
            done: undefined,
            show: false,
            showDelete: false,
        }
    }

    componentDidMount() {
        this.getRecipe(this.props.match.params.id);
    }

    getRecipe(id) {
        this.setState({loading: undefined});
        this.setState({done: undefined});

        http
            .get("/recipes/" + id)
            .then((response) => {
                this.setState({
                    recipe: response.data
                });
                // this.setState({
                //     ingredients: response.data.recipeHasIngredientsById  //only if we feel like we need it later
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
        const { recipe, done, loading, show, showDelete } = this.state;

        return (
            <div className='recipe-page'>
                {!done?
                    (<Loading loading={loading} />)
                    :
                    (<div>
                        <div
                            className='banner'
                            style={{
                                backgroundImage: `url(${recipe.imageSrc})`
                            }}
                        />
                        <div className='title'>
                    <span className='recipe-name'>
                        {recipe.name}
                    </span>

                            <span className='recipe-description'>
                        {recipe.description}
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
                            <button onClick={ this.showDeleteModal } className="btn-medium btn-openModal">Delete Recipe</button>
                        </div>
                        <DeleteModal showDelete={showDelete} closeDelete={this.closeDelete} state={this.state.recipe}/>

                        <div className='nav-bar'>
                            { show ? <div onClick={this.close} className='back-drop show'/> : <div className='back-drop'/> }
                            <button onClick={ this.showModal } className="btn-medium btn-openModal btn-updateModal">Update Recipe</button>
                        </div>
                        <UpdateModal show={show} close={this.close} state={this.state.recipe}/>

                        <div className='ingredients'>
                            <div className='ingredients-header'>
                                Ingredients
                            </div>

                            <div className='ingredients-item'>
                                {recipe.recipeHasIngredientsById.map((ingredientById) => (
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
                                {recipe.instructions}
                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
}

export default RecipePage;