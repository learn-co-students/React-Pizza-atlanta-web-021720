import React from "react"

const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            {/* <input type="text" onChange = {props.handleOnChange} className="form-control" placeholder="Pizza Topping" value={ */}
            <input type="text" name = 'topping' onChange = {props.handleOnChange} className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                // null
                props.editPizza.topping
              }/>
        </div>
        <div className="col">
          <select value={props.editPizza.size} name = 'size' onChange = {props.handleOnChange} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" name = 'vegetarian' onChange = {props.handleOnChange} type="radio" value="Vegetarian" checked={props.editPizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" name = 'vegetarian' onChange = {props.handleOnChange} type="radio" value="Not Vegetarian" checked={!props.editPizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(event)=>props.handleSubmitPizza(event)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
