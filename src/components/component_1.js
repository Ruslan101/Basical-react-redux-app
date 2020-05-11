import React from 'react';

class Component_1 extends React.Component {
	handleAction = () => {
		this.props.change_value_1(!this.props.value_1);
	}
	render() {
		return (
			<>
				<p>{this.props.value_1 ? "Off" : "On"}</p>
				<input type='button' onClick={this.handleAction} value="Button" />
			</>
		);
	}
}

export default Component_1;