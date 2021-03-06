import React from 'react';

const Team = (props) => {
	let currentTeam = props.team
	let currentTeamObj = props.teams.filter(function(team) {
		return team.name == currentTeam;
	});
	return (
		<div>
			<div className="teamIcon">
				<img className="logo" src={currentTeamObj[0].logo} />
				<div className="roundInfo">
					<div className="round">ROUND: <span className="num">{Math.ceil(props.pick / 12)}</span></div>
					<div className="pick">PICK: <span className="num">{props.pick}</span></div>
				</div>
			</div>
		</div>
	)
}

export default Team;
