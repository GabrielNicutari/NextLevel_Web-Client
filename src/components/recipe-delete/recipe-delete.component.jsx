import React, {Component} from 'react';
import http from '../../services/http.service';
import './recipe-delete.styles.scss';

export default class DeleteRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        this.setState(this.props.state);
    }

    deleteRecipe = () => {

        http
            .delete(
                "/recipes/delete/" + this.state.id
            )
            .then((response) => {
                this.props.history.push("/recipes/delete/" + this.state.id);
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {

        return(
            <div className='container'>

                <form>
                    <button className="btn-small btn-submit" onClick={this.deleteRecipe} type="submit">
                        Yes, delete
                    </button>

                </form>

            </div>
        );
    }
}