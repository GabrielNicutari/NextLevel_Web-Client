import React, {Component} from "react";
import { withRouter } from "react-router-dom";
import http from "../../services/http.service";
import "./ingredient-update.styles.scss";

class UpdateIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      name: "",
      pricePerUnit: "",
      imageSrc: "",
      measurementUnitByMeasurementUnitId: { id: 1 }
    };
  }

  componentDidMount() {
    this.setState(this.props.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props !== prevProps) {
      this.setState(this.props.state);
    }
  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  };

  onChangePricePerUnit = (e) => {
    this.setState({ pricePerUnit: e.target.value });
  };

  onChangeImageSrc = (e) => {
    this.setState({ imageSrc: e.target.value });
  };

  onChangeMeasurementUnit = (e) => {
    this.setState({ measurementUnitByMeasurementUnitId: { id: e.target.value }});
  };

  updateIngredient = () => {
    http
      .put("/ingredients/update/" + this.state.id, this.state)
      .then((response) => {
        this.props.history.go(0);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  afterSubmission = (event) => {
    event.preventDefault();
  }

  render() {

    return (
      <div className="container">
        <form onSubmit={this.afterSubmission}>
          <div className="field1-2">
            <div>
              <label>Name</label>
              <br />
              <input
                type="text"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>
            <div>
              <label>Price/Unit</label>
              <br />
              <input
                type="number"
                id="pricePerUnit"
                pattern="[0-9]{1,4}.[0-9]{1,2}"
                required
                value={this.state.pricePerUnit}
                onChange={this.onChangePricePerUnit}
                name="pricePerUnit"
              />
            </div>
          </div>

          <div className="field3-4">
            <div>
              <label>Image Source</label>
              <br />
              <input
                type="text"
                id="imageSrc"
                name="imageSrc"
                required
                value={this.state.imageSrc}
                onChange={this.onChangeImageSrc}
              />
            </div>
          </div>
          <div className="field3-4">
            <div>
              <label>Measurement Unit</label>
              <br />
              <input
                type="text"
                id="measurementUnitByMeasurementUnitId"
                name="measurementUnitByMeasurementUnitId"
                required
                value={this.state.measurementUnitByMeasurementUnitId.id}
                onChange={this.onChangeMeasurementUnit}
              />
            </div>
          </div>

          <button
            className="btn-small btn-submit"
            onClick={() => {this.updateIngredient(); this.props.close()}}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(UpdateIngredient);
