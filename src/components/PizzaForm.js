import React from "react"

const PizzaForm = (props) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <input
          name="topping"
          type="text"
          className="form-control"
          placeholder="Pizza Topping"
          value={props.editPizza.topping}
          onChange={props.handleChange}
        />
      </div>
      <div className="col">
        <select name="size" value={props.editPizza.size} className="form-control" onChange={props.handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input name="vegetarian" className="form-check-input" type="radio" value="Vegetarian"
            checked={props.editPizza.vegetarian ? true : false} onChange={props.handleChange} />
          <label className="form-check-label">
            Vegetarian
            </label>
        </div>
        <div className="form-check">
          <input name="vegetarian" className="form-check-input" type="radio" value="Not Vegetarian"
            checked={props.editPizza.vegetarian ? false : true} onChange={props.handleChange} />
          <label className="form-check-label">
            Not Vegetarian
            </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" onClick={props.handleSubmit}>Submit</button>
      </div>
    </div>

  )
}

export default PizzaForm
