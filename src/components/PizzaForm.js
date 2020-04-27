import React, { Component } from "react"

class PizzaForm extends Component {


render(){
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text"  name="topping" onChange={this.props.handleChange} className="form-control" placeholder="Pizza Topping" value={this.props.formFill.topping} />
        </div>
        <div className="col">
          <select onChange={this.props.handleChange} name="size" value={this.props.formFill.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" onChange={this.props.handleChange} type="radio" name="vegetarian" value="Vegetarian" checked={this.props.formFill.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" onChange={this.props.handleChange} type="radio" name="vegetarian" value="Not Vegetarian" checked={!this.props.formFill.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button onClick={this.props.handleSubmit} type="submit" className="btn btn-success" >Submit</button>
        </div>
      </div>

  )
}
}

export default PizzaForm
