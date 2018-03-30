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
		this.draftSound = new Audio("https://www.jarrodyellets.com/sounds/draft.mp3");
		this.loserSound = new Audio("https://www.jarrodyellets.com/sounds/loser.mp3");
		this.eaglesSound = new Audio("https://www.jarrodyellets.com/sounds/eagles.mp3");

	}

	handlePickClick(){
		let dSound = this.draftSound;
		let lSound = this.loserSound;
		let eSound = this.eaglesSound;
		const vanSound = new Audio("https://www.jarrodyellets.com/sounds/vSound.mp3");
		this.props.resetTime();
		this.props.changePick((this.props.pick) + 1)
		setTimeout(() => {
			dSound.play();
		})
		this.draftSound.play();
		// if(this.props.pick == 3){
		// 	setTimeout(function(){
		// 		lSound.play();
		// 	}, 4000);
		// }
		// if(this.props.pick == 4){
		// 	setTimeout(() => {
		// 		eSound.play();
		// 	}, 4000);
		// }
		if(this.props.pick == 10){
			setTimeout(() => {
				vanSound.play();
			}, 3000);
		}
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
			this.draftSound.play();
		} else {
			this.setState({
				button: "START CLOCK"
			})
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