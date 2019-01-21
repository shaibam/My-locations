import React, { Component } from 'react';
import style from './style.css';
class Title extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Title;