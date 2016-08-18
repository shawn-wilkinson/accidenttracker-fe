/* eslint-disable react/no-string-refs, react/prop-types, max-len, no-param-reassign, no-confusing-arrow, eqeqeq */

import React from 'react';
import axios from 'axios';
import AddCar from './AddCar';
import CarList from './CarList';
import { browserHistory } from 'react-router';

export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cars: [], clients: [] };
    this.create = this.create.bind(this);
    this.refresh = this.refresh.bind(this);
    this.getClientNameById = this.getClientNameById.bind(this);
  }

  componentWillMount() {
    // const person1 = { name: 'Jimbo', monthlyPayment: 75, age: 3, gender: 'M' };
    // const person2 = { name: 'Harold', monthlyPayment: 1175, age: 15, gender: 'M' };
    // const person3 = { name: 'Jenny', monthlyPayment: 50, age: 35, gender: 'F' };
    //
    //
    // const car1 = { make: 'Mazda', model: '3', year: 2012, color: 'red', client: person1 };
    // const car2 = { make: 'Ford', model: 'Focus', year: 2011, color: 'baby blue', client: person2 };
    // const car3 = { make: 'Mazda', model: '5', year: 1998, color: 'bronze', client: person3 };
    // this.setState({ cars: [car1, car2, car3], clients: [person1, person2, person3] });
    //
    // console.log('Cars and Clients: ', this.state.cars, this.state.clients);
  }

  componentDidMount() {
    this.unlisten = browserHistory.listen(location => {
      if (location.pathname.trim() === '/cars') {
        this.refresh(location.query.page);
      }
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }

  refresh(page = 0) {
    axios.get(`http://localhost:9001/api/cars?page=${page}`)
    .then((response) => {
      axios.get(`http://localhost:9001/api/clients?page=${page}`)
      .then((response2) => {
        this.setState({ cars: response.data.content, clients: response2.data.content });
      });
    });
    console.log('clients: ', this.state.cars);
  }

  getClientNameById(id) {
    console.log(id);
    return id;
    if(id){
      return this.state.clients.filter(client => client.id == id)[0].name();
    }
    return null;
  }

  create(e) {
    e.preventDefault();
    console.log('In the create function!!!!');
    const make = this.refs.creator.refs.make.value;
    const model = this.refs.creator.refs.model.value;
    const year = this.refs.creator.refs.year.value;
    const color = this.refs.creator.refs.color.value;
    const client = this.refs.creator.refs.client.value;
    console.log('client: ', client[0]);
    const newCar = { make, model, year, color, client };
    this.setState({ cars: [...this.state.cars, newCar] });

    axios.post('http://localhost:9001/api/cars', { make, model, year, color, client })
    .then(() => browserHistory.push('/cars?page=0'));
    //
    // axios.post('http://localhost:9001/api/tasks', { name, category, due })
    // .then(() => browserHistory.push('/clients?page=0'));
  }

  render() {
    return (
      <div>
        <AddCar ref="creator" create={this.create} clients={this.state.clients} />
        <CarList cars={this.state.cars} getClientNameById={this.getClientNameById}/>
      </div>
    );
  }
}
