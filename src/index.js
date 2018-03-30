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
			timerOn: false
		}

		this.changeBackground = this.changeBackground.bind(this);
		this.changePick = this.changePick.bind(this);
		this.changeTimer = this.changeTimer.bind(this);
		this.changeTimerOn = this.changeTimerOn.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.resetTime = this.resetTime.bind(this);
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
		} else {
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

	render() {
		return (
			<div className={this.state.intro ? 'background intro' : 'background draft'}>
				<Intro intro={this.state.intro} changeBackground={this.changeBackground} changeTimerOn={this.changeTimerOn} startTimer={this.startTimer} />
				<div className={this.state.intro ? 'none' : null}>
					<TeamName team={this.state.team} teams={teams} />
					<div className="draftDiv">
						<Team team={this.state.team} teams={teams} teamInfo={this.state.teamInfo} pick={this.state.pick}/>
						<div className="clockLabel">ON THE CLOCK</div>
						<Clock minutes={this.state.minutes} seconds={this.state.seconds} changeTimer={this.changeTimer} timerOn={this.state.timerOn} />
						<Buttons pick={this.state.pick} changePick={this.changePick} changeTimer={this.changeTimer} startTimer={this.startTimer} resetTime={this.resetTime} />
					</div>
				</div>
			</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));