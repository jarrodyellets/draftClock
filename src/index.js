import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Intro from './components/intro';
import TeamName from './components/teamName';
import Team from './components/teamInfo';
import Clock from './components/clock';
import Buttons from './components/buttons';
import teams from './data/teams';
import name from './data/newDraft';
import newDraft from './data/newDraft';

import style from '../public/css/style.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			intro: true,
			pick: 1,
			team: "Running Free",
			teamInfo: teams[7],
			minutes: 5,
			seconds: 0,
			timerOn: false,
			countdown: ""
		}

		this.changeBackground = this.changeBackground.bind(this);
		this.changePick = this.changePick.bind(this);
		this.changeTimer = this.changeTimer.bind(this);
		this.changeTimerOn = this.changeTimerOn.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.resetTime = this.resetTime.bind(this);
		this.pauseTimer = this.pauseTimer.bind(this);
		this.playSounds = this.playSounds.bind(this);
		this.timer = 0;
	}

	changeBackground() {
		this.setState({
			intro: false,
		})
	}

	changePick(e){
		let newTeam = newDraft[e];
		this.setState({
			pick: e,
			team: newTeam

		})
	}

	resetTime() {
		this.setState({
			minutes: 5,
			seconds: 0
		})
	}

	changeTimer(){
		let m = this.state.minutes;
		let s = this.state.seconds - 1;
		if(s == -1){
			this.setState({
				minutes: (m - 1),
				seconds: 59
			})
		} else if(m == 0 && s == 0){
			this.changePick(this.state.pick + 1)
			this.setState({
				minutes: 5,
				seconds: 0
			});
			this.playSounds();
		}	else {
			this.setState({
				minutes: m,
				seconds: s
			})
		}
	}

	changeTimerOn(e){
		this.setState({
			timerOn: e
		})
	}

	startTimer(){
		this.timer = setInterval(this.changeTimer, 1000);
	}

	pauseTimer(){
		clearInterval(this.timer);
	}

	playSounds(){
		const draftSound = new Audio("https://www.jarrodyellets.com/sounds/draft.mp3");
		const loserSound = new Audio("https://www.jarrodyellets.com/sounds/loser.mp3");
		const eaglesSound = new Audio("https://www.jarrodyellets.com/sounds/eagles.mp3");
		const vanSound = new Audio("https://www.jarrodyellets.com/sounds/vSound.mp3");
		setTimeout(() => {
			draftSound.play();
		}, 500);
		if(this.state.pick == 3){
			setTimeout(() => {
				loserSound.play()
			}, 4000);
		} else if(this.state.pick == 4){
			setTimeout(() => {
				eaglesSound.play();
			}, 4000);
		} else if(this.state.pick == 10){
			setTimeout(() => {
				vanSound.play();
			}, 3000);
		}
	}

	render() {
		return (
			<div className={this.state.intro ? 'background intro' : 'background draft'}>
				<Intro intro={this.state.intro} changeBackground={this.changeBackground} changeTimerOn={this.changeTimerOn} startTimer={this.startTimer} playSounds={this.playSounds} />
				<div className={this.state.intro ? 'none' : null}>
					<TeamName team={this.state.team} teams={teams} />
					<div className="draftDiv">
						<Team team={this.state.team} teams={teams} teamInfo={this.state.teamInfo} pick={this.state.pick}/>
						<div className="clockLabel">ON THE CLOCK</div>
						<Clock minutes={this.state.minutes} seconds={this.state.seconds} changeTimer={this.changeTimer} timerOn={this.state.timerOn} resetTime={this.resetTime} changePick={this.changePick} pick={this.state.pick}/>
						<Buttons pick={this.state.pick} changePick={this.changePick} changeTimer={this.changeTimer} startTimer={this.startTimer} resetTime={this.resetTime} pauseTimer={this.pauseTimer} playSounds={this.playSounds} />
					</div>
				</div>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
