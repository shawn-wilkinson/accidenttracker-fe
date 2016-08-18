/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
// import axios from 'axios';
// import { browserHistory } from 'react-router';

export default class AddCar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div>
      <form>
            <div className="form-group">
              <label htmlFor="make">Make</label>
              <input ref="make" type="text" className="form-control" id="make" />
            </div>

            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input ref="model" type="text" className="form-control" id="model" />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input ref="year" type="text" className="form-control" id="year" />
            </div>

            <div className="form-group">
              <label htmlFor="color">Color</label>
              <input ref="color" type="text" className="form-control" id="color" />
            </div>

            <div className="form-group">
              <label htmlFor="sel1">Please Choose Owner</label>
              <select ref="client" className="form-control" id="owner">
                {this.props.clients.map((c, i) => <option data-id={c.id} key={i} value={c} >{c.name}</option>)}
              </select>
            </div>

            <button onClick={this.props.create} type="submit" className="btn btn-success">Create</button>
            </form>
          </div>
    );
  }
}
