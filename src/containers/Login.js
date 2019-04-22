import React, { Component } from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import "./Login.css"
export default class Login extends Component {
    onclick(){
        console.log("login click");
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <p> Login Page</p>
                    <div className="input-container">
                        <TextInput
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="input-container">
                        <TextInput
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="input-container">
                        <Button 
                            buttonText="Login"
                            onClick={this.onclick.bind(this)}
                        />
                    </div>

                </div>
            </div>
        )
    }
}