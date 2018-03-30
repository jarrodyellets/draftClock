import React, {Component} from 'react';

class Intro extends Component {
	constructor(props) {
		super(props);

		this.state = {
			enter: false,
			buttonText: 'ENTER DRAFT',
			audio: 'https://www.jarrodyellets.com/sounds/Intro.mp3'
		}

		this.playMusic = this.playMusic.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	playMusic(){
		const audio = document.getElementById('audio');
		audio.play();
	}

	handleClick(){
		if(!this.state.enter){
			this.playMusic();
			this.setState({
				enter: true,
				buttonText: 'START CLOCK'
			})
		} else {
			this.props.changeBackground();
			this.setState({
				audio: ''
			})
			this.props.startTimer();
			this.props.playSounds();	
		}
	}

	render() {
		return (
			<div className={this.props.intro ? null : 'none'}>
				<div className={this.state.enter ? 'trophy' : 'hideTrophy'}></div>
				<div className={this.state.enter ? 'introTitle' : 'hideTitle'}>FOFF DRAFT 2018</div>
				<button onClick={this.handleClick} className={this.state.enter ? 'button enterAni' : 'button'}>{this.state.buttonText}</button>
				<audio id="audio" src={this.state.audio}></audio>
			</div>
			)
	}
}

export default Intro;