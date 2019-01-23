import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
  }

  handleChange = event => { 
    const { value } = { ...event.target };
    this.setState({ value });
    this.props.onChange(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.Add(this.state.value);
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { value } = { ...nextProps };   
    if (value !== this.props.value) {
        this.setState({value});
        return false;
    }
    return true;
  }

  render() {
    const {placeholder,disabled} = {...this.props}
    return <input value={this.state.value} onChange={this.handleChange} disabled={disabled} placeholder={placeholder} />;
  }
}

Input.defaultProps ={
  Add:()=>{},
  onChange:()=>{}
}

export default Input;
