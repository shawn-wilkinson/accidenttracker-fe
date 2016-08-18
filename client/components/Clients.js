/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
import axios from 'axios';
import AddClient from './AddClient';
import ClientList from './ClientList';
import { browserHistory } from 'react-router';

export default class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clients: [] };
    this.create = this.create.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      if (location.pathname.trim() === '/clients') {
        this.refresh(location.query.page);
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  refresh(page = 0) {
    axios.get(`http://localhost:9001/api/clients?page=${page}`)
    .then((response) => {
      this.setState({ clients: response.data.content });
    });
  }

  create(e) {
    e.preventDefault();
    console.log("In the create function!!!!");
    const name = this.refs.creator.refs.name.value;
    const payment = this.refs.creator.refs.monthlyPayment.value;
    const age = this.refs.creator.refs.age.value;
    const gender = this.refs.creator.refs.gender.value;

    axios.post('http://localhost:9001/api/clients', { name, payment, age, gender })
    .then(() => browserHistory.push('/clients?page=0'));
  }

  render() {
    return (
      <div>
        <AddClient ref="creator" create={this.create} />
        <ClientList clients={this.state.clients} />
      </div>
    );
  }
}
