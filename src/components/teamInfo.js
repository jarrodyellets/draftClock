import React, {Component} from 'react';

class Team extends Component {
	constructor(props) {
		super(props);


	}


	render() {
		let currentTeam = this.props.team
		let currentTeamObj = this.props.teams.filter(function(team) {
			return team.name == currentTeam;
		});
		return (
			<div>
				<div className="teamIcon">
					<img className="logo" src={currentTeamObj[0].logo} />
					<div className="roundInfo">
						<div className="round">ROUND: <span className="num">{Math.ceil(this.props.pick / 12)}</span></div>
						<div className="pick">PICK: <span className="num">{this.props.pick}</span></div>
					</div>
				</div>
			</div>	
			)
	}
}

export default Team;