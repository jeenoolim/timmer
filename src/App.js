import React, { Component } from 'react';

export default class App extends Component {
	state = {
		count: 0
	};

	increase = () => {
		this.setState({ count: this.state.count + 1 });
	};

	decrease = () => {
		this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<div>
				<div>{this.state.count}</div>
				<button onClick={this.decrease}>감소시키기</button>
				<button onClick={this.increase}>증가시키기</button>
			</div>
		);
	}
}
