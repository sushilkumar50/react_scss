import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentTime: new Date()};
    }

    tick = () => {
        this.setState({currentTime: new Date()});
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
            <h1>Current Time:</h1>
            <h2>It's {this.state.currentTime.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

export default Clock;