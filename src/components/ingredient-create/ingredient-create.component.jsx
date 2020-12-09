import React, {Component} from 'react';
import http from '../../services/http.service';
import './ingredient-create.styles.scss'

export default class CreateIngredient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: "",
            pricePerUnit: "",
            imageSrc: "",
            measurementUnitByMeasurementUnitId: {id: undefined}
        };
    }

    onChangeName = e => {
        this.setState({name: e.target.value});
    }

    onChangePricePerUnit = e => {
        this.setState({pricePerUnit: e.target.value});
    }

    onChangeImageSrc = e => {
        this.setState({imageSrc: e.target.value})
    }

    onChangeMeasurementUnit = e => {
        this.setState({measurementUnitByMeasurementUnitId: {id: e.target.value}})
    }



    saveIngredient = () => {
        let newIngredient = {
            name: this.state.name,
            pricePerUnit: this.state.pricePerUnit,
            imageSrc: this.state.imageSrc,
            measurementUnitByMeasurementUnitId: this.state.measurementUnitByMeasurementUnitId
        }

        http.post("/ingredients/create", newIngredient)
            .then(r => {
                this.setState({
                    name: r.data.name,
                    pricePerUnit: r.data.pricePerUnit,
                    imageSrc: r.data.imageSrc,
                    measurementUnitByMeasurementUnitId: r.data.measurementUnitByMeasurementUnitId
                });
                console.log("Created");
            })
            .catch(e => {
                console.log(e);
            })
    }

    render() {
        return(
            <div className='container'>

                <form>

                    <div>
                        <label>Name</label><br/>
                        <input
                            type="text" id="name" required value={this.state.name}
                            onChange={this.onChangeName} name="name"
                        />
                    </div>


                    <div className="price-per-unit">
                        <label>Price per Unit</label><br/>
                        <input
                            type="text" id="pricePerUnit" required
                            placeholder={"eg: 29.9"} pattern="[0-9]{1,4}.[0-9]{1,2}"
                            value={this.state.pricePerUnit} onChange={this.onChangePricePerUnit} name="pricePerUnit"
                        />
                    </div>

                    <div className="url-source">
                        <label>Image Source: </label><br/>
                        <input
                            type="text" id="imageSrc" name="imageSrc"
                            value={this.state.imageSrc} onChange={this.onChangeImageSrc}
                        />
                    </div>


                    <div className="meas-unit">
                        <label>Measurement Unit: </label><br/>
                        <input
                            type="text" id="measurementUnitByMeasurementUnitId" name="measurementUnitByMeasurementUnitId"
                            placeholder={"Select"} required
                            value={this.state.measurementUnitByMeasurementUnitId.id} onChange={this.onChangeMeasurementUnit}
                        />
                    </div>

                    <button className="btn-small btn-submit" onClick={this.saveIngredient}>
                        Submit
                    </button>

                </form>
            </div>
        );
    }
}