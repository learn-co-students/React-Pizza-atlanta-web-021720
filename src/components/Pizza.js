import React from "react"

const Pizza = (props) => {
const {id, topping, size, vegetarian} = props.pizza
  return(
    <tr id={id}>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={props.editCallback} type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
