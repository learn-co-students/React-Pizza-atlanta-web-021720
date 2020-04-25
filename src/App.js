import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super()
    this.state = {
      allPizzas: [],
      editPizza: {
        id: 0,
        topping: null,
        size: null,
        vegetarian: false
      }
    }
  }


  //Fetch all pizzas
  componentDidMount() {
    fetch("http://localhost:3000/pizzas")
      .then(resp => resp.json())
      .then(pizzas => {
        this.setState({ allPizzas: pizzas })
      })
  }

  //Handles edit click from Pizza Table to append the correct pizza info to the edit form
  handleEditClick = (event) => {
    this.setState({
      editPizza: {
        id: event.id,
        topping: event.topping,
        size: event.size,
        vegetarian: event.vegetarian
      }
    })
  }

  //Handles the form changes to correctly update the pizza object state 
  handleChange = (event) => {
    this.setState({
      editPizza: {
        ...this.state.editPizza,
        [event.target.name]: event.target.value,
        vegetarian: event.target.value === "Vegetarian" ? true : false
      }
    })
  }

  //Handles submit to persist changes from pizza form to the backend and if editPizza.id = 0, Error will display to select a pizza
  handleSubmit = () => {
    const updatedPizza = this.state.editPizza
    fetch(`http://localhost:3000/pizzas/${updatedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPizza),
    })
      .then(resp => resp.json())
      .then(updatedPizza => {
        console.log("Updated Pizza:  ", updatedPizza)
        let updatedAllPizzas = this.state.allPizzas.map(pizza => {
          return pizza.id !== updatedPizza.id ? pizza : updatedPizza
        })
        console.log(updatedAllPizzas)
        this.setState({ allPizzas: updatedAllPizzas })
      })
  }

  render() {

    return (
      <Fragment>
        <Header />
        <PizzaForm
          editPizza={this.state.editPizza}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <PizzaList
          allPizzas={this.state.allPizzas}
          handleEditClick={this.handleEditClick} />
      </Fragment>
    );
  }
}

export default App;
