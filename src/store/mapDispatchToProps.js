import { bindActionCreators } from 'redux';
import action_1 from './actionCreators/action_1';
import action_2 from './actionCreators/action_2';

function mapDispatchToProps(component) {
	switch (component) {
		case "Component_1": return function (dispatch) {
			return {
				change_value_1: bindActionCreators(action_1, dispatch)
			};
		};
		case "Component_2": return function (dispatch) {
			return {
				change_value_2: bindActionCreators(action_2, dispatch)
			};
		};
		default: return undefined;
	}
}

export default mapDispatchToProps;