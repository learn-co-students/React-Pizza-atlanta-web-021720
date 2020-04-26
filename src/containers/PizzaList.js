import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  renderPizza()
  {
    // return <Pizza pizza = {this.state.pizzas[0]}/>
    return(
       this.props.pizzas.map(

        pizza => {
          // debugger
          return <Pizza pizza = {pizza} cbEditPizza = {this.props.cbEditPizza}/>
        } 

       ) 

    )

  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            //render Pizza here
            this.renderPizza()

          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
