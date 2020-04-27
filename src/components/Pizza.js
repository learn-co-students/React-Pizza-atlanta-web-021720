import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {props.pizza.vegetarian? <td>{"yes"}</td> : <td>{"no"}</td>}
      <td><button type="button" onClick={() => props.handleEdit(props.pizza)} className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza

