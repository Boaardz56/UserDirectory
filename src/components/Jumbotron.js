import React, { Component } from "react";
import "../App.css"

class Jumbotron extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="jumbotron display-4">Employee Directory</h1>
                </div>
            </div>
        );
    }
}

export default Jumbotron;