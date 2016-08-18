/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
// import axios from 'axios';
// import { browserHistory } from 'react-router';

export default class CarSelector extends React.Component {
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
        <div className="form-group">
          <label htmlFor="sel1">Car Owner</label>
          <select ref="client" className="form-control" id="owner">
            {this.props.clients.map((c, i) => <option data-id={c.id} key={i} value={c}>{c.name}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="sel1">Car Owner</label>
          <select ref="client" className="form-control" id="owner">
            {this.props.cars.map((c, i) => <option data-id={c.id} key={i} value={c} >{c.year} {c.make} {c.model}, {c.color}</option>)}
          </select>
        </div>
      </div>
    );
  }
}
