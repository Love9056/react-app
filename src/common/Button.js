import React, {
    Component
} from "react";
import "./Common.css"
class Button extends Component {
    render() {
        return (
            <button
            onClick={this.props.onClick}
                className="button">
                {this.props.buttonText}
            </button>
        )
    }
}
export default Button;
