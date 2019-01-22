import React, { Component } from "react";
import ModifierButton from "../modifiers/modifierButton";
import { connect } from "react-redux";
import { Add } from "../../redux/actions/categoryActions";
import style from "./style.css";
const mapStateToProps = state => {
  return { categories: state.categories };
};

const mapActionsToProps = {
  Add
};

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.Add(this.state.value);
  };

  render() {
    return (
      <div className="categories">
        <input
          className="input"
          
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Enter a new category"
        />

        <ModifierButton
          type={ModifierButton.Types.Add}
          onClick={this.handleSubmit}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Categories);
