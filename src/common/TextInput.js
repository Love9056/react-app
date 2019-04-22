import React, { Component } from "react";
import "./Common.css"
class TextInput extends Component {

    render() {
        console.log(this.props);
        return (
            <input
                type={this.props.type}
                className="text-input"
                placeholder={this.props.placeholder} />
        )
    }
}

export default TextInput;