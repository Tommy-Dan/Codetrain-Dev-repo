import React from "react";

class ClassCounter extends React.Component{
    constructor() {
        super();
        this.state = { count: 0 };
    }
    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render(){
        return(
            <div>
                <h1> Class Counter:  {this.state.count}</h1>
                <button onClick={this.handleIncrement}>Increase <span>&#8593;</span></button>
                <button onClick={this.handleDecrement}>Decrease <span>&#8595;</span></button>
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        );
    }
}
export default ClassCounter;