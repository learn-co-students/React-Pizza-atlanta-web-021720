import React from "react"

const Pizza = (props) => {
  let { pizza, cbEditPizza } = props;
  
  const cb = (event) =>  
  {
    cbEditPizza(event)
  } 

  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{(pizza.vegetarian? 'Yes' : 'No')}</td>
      <td><button type="button" className="btn btn-primary" onClick={(event=>{cb(event)})}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
