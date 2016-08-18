/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
// import axios from 'axios';
// import { browserHistory } from 'react-router';

export default class AddClient extends React.Component {
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
              <label htmlFor="name">Name</label>
              <input ref="name" type="text" className="form-control" id="name" />
            </div>

            <div className="form-group">
              <label htmlFor="monthlyPayment">Monthly Payment</label>
              <input ref="monthlyPayment" type="text" className="form-control" id="monthlyPayment" />
            </div>

            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input ref="age" type="text" className="form-control" id="age" />
            </div>

            <div className="form-group">
              <label htmlFor="sel1">Gender</label>
              <select ref="gender" className="form-control" id="gender">
                <option>M</option>
                <option>F</option>
              </select>
            </div>

            <button onClick={this.props.create} type="submit" className="btn btn-success">Create</button>
            </form>
          </div>
    );
  }
}
