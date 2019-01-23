import React, { Component } from "react";
import ModifierButton from "../modifiers/modifierButton";
import ModifierList from "../modifierList/modifierList";
import { connect } from "react-redux";
import { Add, Get, Remove, Edit } from "../../redux/actions/categoryActions";

import style from "./style.css";

const mapStateToProps = state => {
  return { categories: state.categories };
};

const mapActionsToProps = {
  Add,
  Remove,
  Get,
  Edit
};

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", ready: false };
    this.handleChange = this.handleChange.bind(this);
    this.props.Get();
  }

  onEdit = (value, newValue) => {
    console.log("onEdit", value, newValue);
    this.props.Edit(value, newValue);
  };

  onRemove = value => {
    this.props.Remove(value);
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.Add(this.state.value);
  };

  render() {
    const { categories } = { ...this.props };
    
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
          type={ModifierButton.Types.ADD}
          onClick={this.handleSubmit}
          onChange={this.onEdit}
        />

        <ModifierList
          keyPrefix="category"
          data={categories}
          onChange={this.onEdit}
          onRemove={this.onRemove}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Categories);
