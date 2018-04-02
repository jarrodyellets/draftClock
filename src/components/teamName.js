import React from 'react';

const TeamName = (props) => {
	let currentTeam = props.team
	let currentTeamObj = props.teams.filter(function(team) {
		return team.name == currentTeam;
	});

	return (
		<h1 className="teamName">{props.team}</h1>
		)
}

export default TeamName;
