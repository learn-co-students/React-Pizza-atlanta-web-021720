import React from "react"

const Pizza = (props) => {
  let { pizza, handleEditButton } = props;
  
  const cb = (pizza) =>  
  {
    handleEditButton(pizza)
  } 

  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{(pizza.vegetarian? 'Yes' : 'No')}</td>
      <td><button type="button" className="btn btn-primary" onClick={(()=>{cb(pizza)})}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
