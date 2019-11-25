import React, {Component} from 'react';
import "./ClockWall.css"

class ClockWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateTime: new Date(),
            message: "",
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }


    tick() {
        let seconds = this.state.dateTime.getSeconds() + 1
        this.setState({
            dateTime: new Date()
        });
        if (seconds % 15 === 0) {
            this.setState({
                message: "FizzBuzz"
            });

        } else if (seconds % 3 === 0) {
            this.setState({
                message: "Fizz"
            });

        } else if (seconds % 5 === 0) {
            this.setState({
                message: "Buzz"
            });
        } else {
            this.setState({
                message: ""
            });
        }


    }

    render() {
        return (
            <div >
                <h1>
                    {this.state.dateTime.toLocaleTimeString()}
                </h1>
                <hr/>
                {this.state.message!=="" ?<p>
                    {this.state.message}
                </p>:(
                    <p><br/></p>

                )}
                <hr/>
            </div>
        );
    }
}

export default ClockWall;