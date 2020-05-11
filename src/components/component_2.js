import React from 'react';

class Component_1 extends React.Component {
	handleAction = () => {
		this.props.change_value_2(!this.props.value_2);
	}
	render() {
		return (
			<>
				<p>{this.props.value_2 ? "Off" : "On"}</p>
				<input type='button' onClick={this.handleAction} value="Button" />
			</>
		);
	}
}

export default Component_1;