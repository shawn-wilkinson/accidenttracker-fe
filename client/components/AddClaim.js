/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

import CarSelector from './CarSelector';

export default class AddClaim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numberOfCars: 0, cars: [], clients: []};
    this.addCar = this.addCar.bind(this);
  }

  componentWillMount() {
    axios.get(`http://localhost:9001/api/cars`)
    .then((response) => {
      axios.get(`http://localhost:9001/api/clients`)
      .then((response2) => {
        this.setState({ cars: response.data.content, clients: response2.data.content });
      });
    });
    console.log(this.state.cars);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }
  addCar(e){
    e.preventDefault();
    this.setState({ numberOfCars: this.state.numberOfCars + 1 });
  }

  render() {
    const newCarArray = new Array(this.state.numberOfCars).fill(' ');
    return (
      <div>
      <form>
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input ref="date" type="date" className="form-control" id="date" />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input ref="time" type="clock" className="form-control" id="time" />
            </div>

            <div className="form-group">
              <label htmlFor="photo">Photo</label>
              <input ref="photo" type="text" className="form-control" id="photo" />
            </div>

            <div className="form-group">
              <label htmlFor="sel1">Clients</label>
              <select ref="clients" className="form-control" id="clients">
                <option>M</option>
                <option>F</option>
              </select>
            </div>

          {newCarArray.map((ele, i) => <CarSelector clients={this.state.clients} cars={this.state.cars} key={i} />)}

            <button onClick={this.addCar}>Add A Car</button>
            <button onClick={this.props.create} type="submit" className="btn btn-success">Create</button>
            </form>
          </div>
    );
  }
}
