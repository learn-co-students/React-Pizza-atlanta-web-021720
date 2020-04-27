import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzaList: [],
    formFill: {
        id: 0,
        topping: "",
        size: "small",
        vegetarian: false
    }
  }

componentDidMount(){
  fetch("http://localhost:3000/pizzas")
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    this.setState({pizzaList: data})
  })
}

handleEdit = (pizza) => {
  console.log(pizza)
  this.setState({formFill: 
    {
    id: pizza.id,
    topping: pizza.topping,
    size: pizza.size,
    vegetarian: pizza.vegetarian
  }
  })
}
handleChange = (event)=> {
  console.log(this.state.formFill)
  console.log(event.target)
  this.setState(
    {formFill:
      {
        ...this.state.formFill,
      [event.target.name]: event.target.value,
      vegetarian: event.target.value === "Vegetarian" ? true : false
      }
  })
  }

  handleSubmit = (e) => {
    console.log("happy")
    console.log(this.state.formFill)
    console.log(e.target.value)
    if (this.state.id === 0){
      console.alert("no pizza eddited")
    } else {
      
    fetch(`http://localhost:3000/pizzas/${this.state.formFill.id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.formFill),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }
  }




  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm  handleSubmit= {this.handleSubmit} handleChange= {this.handleChange} formFill = {this.state.formFill} />
        <PizzaList handleEdit = {this.handleEdit} pizzaList = {this.state.pizzaList}/>
      </Fragment>
    );
  }
}

export default App;
