import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

    state = {
    pizzas: [],
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then(data=>
      {
        this.setState({pizzas: data})
      }
    )
  }

  cbEditPizza=(event)=>
  {
    console.log(event.target)
    // debugger
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList {...this.state} cbEditPizza={this.cbEditPizza}/>
      </Fragment>
    );
  }
}

export default App;
