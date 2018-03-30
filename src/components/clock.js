import React from 'react';

const Clock = (props) => {
	return (
		<div>
			<div className="clock">
				<span className="minutes">{props.minutes == 0 ? "" : props.minutes}</span>:<span className="seconds">{props.seconds < 10 ? "0" + props.seconds : props.seconds}</span>
			</div>
		</div>
		)
}

export default Clock;