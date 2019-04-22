import React, { Component } from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import "./Login.css"
export default class Signup extends Component {
    onSignup(){
        console.log("signup click");
    }
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <p> Signup Page</p>
                    <div className="input-container">
                        <TextInput
                            placeholder="Username"
                            type="text"
                        />
                    </div>
                    <div className="input-container">
                        <TextInput
                            placeholder="Password"
                            type="password"
                        />
                    </div>
                    <div className="input-container">
                        <TextInput
                            placeholder="Email"
                            type="email"
                        />
                    </div>
                    <div className="input-container">
                        <Button
                            buttonText="Signup"
                            onClick={this.onSignup.bind(this)}
                        />
                    </div>
                </div>
            </div>
        )
    }
}