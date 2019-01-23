import React, { Component } from "react";
import ModifierButton from "../modifiers/modifierButton";
import Input from "../Input/input";
import style from "./style.css";

class ModifierList extends Component {
  handleChange = (original, value) => {
    this.props.onChange(original, value);
  };

  render() {
    const { data, keyPrefix, onEdit, onRemove } = { ...this.props };
    if (data) {
      const listItems = data.map((value, i) => {
        return (
          <li key={keyPrefix + i}>
            <Input
              value={value}
              onChange={newValue => {
                this.handleChange(value, newValue);
              }}
            />
            <ModifierButton
              type={ModifierButton.Types.REMOVE}
              onClick={() => {
                onRemove(value);
              }}
            />
          </li>
        );
      });
      return <ul>{listItems}</ul>;
    }
    return "";
  }
}

export default ModifierList;
