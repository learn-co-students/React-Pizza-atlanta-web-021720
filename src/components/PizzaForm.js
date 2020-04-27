import React from "react"

const PizzaForm = (props) => {
  let {id, topping, size, vegetarian} = props.pizza
  return(
      <div className="form-row" id={id}>
        <div className="col-5" >
            <input  onChange={props.onChange} name="topping" type="text" className="form-control" placeholder="Pizza Topping" 
            value={topping}/>
        </div>
        <div className="col">
          <select onChange={props.onChange} name="size" value={size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onChange={props.onChange} className="form-check-input" name="vegetarian" type="radio" value="Vegetarian" checked={vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onChange={props.onChange} className="form-check-input" name="notVegetarian" type="radio" value="Not Vegetarian" checked={!vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={props.onClick}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
