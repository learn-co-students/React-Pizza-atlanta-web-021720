import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

    state = {
    pizzas: [],
    editPizza: {topping:''}
  }

  loadData()
  {
    fetch('http://localhost:3000/pizzas')
    .then(res=>res.json())
    .then(data=>
      {
        this.setState({pizzas: data})
      }
    )
  }

  componentDidMount(){
    this.loadData();
  }

  handleEditButton=(pizza)=>
  {
    // console.log(target)
    // console.log(pizza)
    // debugger
    // this.setState({editPizza: pizza}) 

    let tempPizza = {};
    Object.assign(tempPizza,pizza)

    this.setState({editPizza: tempPizza}) //
  }

  handleSubmitPizza=(event)=>
  {
    
    //debugger
    // console.log(event.target);
    // console.log(pizza_id);
    let data = this.state.editPizza;
    
    event.preventDefault();
    
    fetch('http://localhost:3000/pizzas/'+this.state.editPizza.id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        
        if (response.status >= 200 && response.status < 300) {
            // return response;
            console.log(response)
            this.setState({editPizza: {}})
            this.loadData();
            window.alert('Data successully saved');
          } else {
            window.alert('Somthing happened wrong')
          console.log('Somthing happened wrong');
          }
    }).catch(err => err);
    // }
  }

  handleOnChange=(event)=>
  {
    // debugger
    console.log(event.target.name)
    console.log(event.target.value)
    let editPizza = this.state.editPizza;
    switch(event.target.name)
    {
      case 'topping':
        editPizza.topping = event.target.value;
        this.setState({editPizza: editPizza})
      break;

      case 'size':
        editPizza.size = event.target.value;
        this.setState({editPizza: editPizza})
      break;

      case 'vegetarian':
        // console.log(this.state.editPizza.vegetarian)  
      if(event.target.value ==='Vegetarian') 
      {

        editPizza.vegetarian = true;
        this.setState({editPizza: editPizza})
      }
      else     
      {
        editPizza.vegetarian = false;
        this.setState({editPizza: editPizza})
      }
      // console.log(this.state.editPizza.vegetarian)  
      break;

      default:
        // console.log('default', event.target.name)  
    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm {...this.state} handleSubmitPizza={this.handleSubmitPizza} handleOnChange={this.handleOnChange}/>
        <PizzaList {...this.state} handleEditButton={this.handleEditButton}/>
      </Fragment>
    );
  }
}

export default App;
