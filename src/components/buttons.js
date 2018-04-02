import React, {Component} from 'react';

class Buttons extends Component {
	constructor(props) {
		super(props);

		this.state = {
			start: false,
			button: "PAUSE CLOCK"
		}

		this.handlePickClick = this.handlePickClick.bind(this);
		this.handlePauseClick = this.handlePauseClick.bind(this);

	}

	handlePickClick(){
		this.props.resetTime();
		this.props.changePick((this.props.pick) + 1);
		this.props.playSounds();
	}

	handlePauseClick(){
		let start = this.state.start;
		this.setState({
			start: !start
		});
		if(this.state.start){
			this.setState({
				button: "PAUSE CLOCK"
			})
			this.props.playSounds();
			this.props.startTimer();
		} else {
			this.setState({
				button: "START CLOCK"
			})
			this.props.pauseTimer();
		}
	}

	render() {
		return (
			<div className="buttonDiv">
				<button onClick={this.handlePauseClick} className="button">{this.state.button}</button>
				<button onClick={this.handlePickClick} className="button">NEXT PICK</button>
			</div>
			)
	}
}

export default Buttons;
