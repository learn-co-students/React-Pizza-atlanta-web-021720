import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state = {
    pizzas: [],
    editingPizza: { id: "", topping: "", size: "", vegetarian: false }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
  }

  editCallback = e => {
    let pizza = this.state.pizzas.find( pizza => pizza.id.toString() === e.target.closest('tr').id)
    this.setState({editingPizza: pizza})
  }

  handleFormChange = e => {
    let n = e.target.name;
    let v = e.target.value;

    if (n === "topping") {
      this.setState({
        editingPizza: {
          ...this.state.editingPizza,
        topping: v
        }
      })
    } else if (n === "size") {
      this.setState({
        editingPizza: {
          ...this.state.editingPizza,
        size: v
        }
      })
    } else if (n === "vegetarian") {
      this.setState({
        editingPizza: {
          ...this.state.editingPizza,
        vegetarian: true
        }
      })
    } else if (n === "notVegetarian") {
      this.setState({
        editingPizza: {
          ...this.state.editingPizza,
        vegetarian: false
        }
      })
    }
  }

  handleSubmit = () => {
  let editObj = {
    id: this.state.editingPizza.id,
    topping: this.state.editingPizza.topping,
    size: this.state.editingPizza.size,
    vegetarian: this.state.editingPizza.vegetarian
  }
    fetch(`http://localhost:3000/pizzas/${this.state.editingPizza.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editObj)
    })
    .then(r => r.json())
    .then(fetch('http://localhost:3000/pizzas')
    .then(r => r.json())
    .then(pizzas => this.setState({pizzas: pizzas}))
    )
  }
  
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          pizza={this.state.editingPizza} 
          onChange={this.handleFormChange} 
          onClick={this.handleSubmit}/>
        <PizzaList 
          pizzas={this.state.pizzas} 
          editCallback={this.editCallback}/>
      </Fragment>
    );
  }
}

export default App;
