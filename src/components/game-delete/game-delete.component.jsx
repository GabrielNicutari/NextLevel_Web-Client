import React, {Component} from 'react';
import http from '../../services/http.service';
import './game-delete.styles.scss';
import { withRouter } from 'react-router-dom';

class DeleteGame extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        this.setState(this.props.state);
    }

    deleteGame = () => {

        http
            .delete(
                "/games/delete/" + this.state.id
            )
            .then((response) => {
                this.props.history.push("/games/");
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
                    <button className="btn-small btn-submit" onClick={() => {this.deleteGame(); this.props.close()}} type="submit">
                        Yes, delete
                    </button>

                </form>

            </div>
        );
    }
}

export default withRouter(DeleteGame);