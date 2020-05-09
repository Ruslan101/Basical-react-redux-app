import React from 'react';
import Title from './title';
import action_1 from '../store/actionCreators/action_1';

class Main extends React.Component {
    handleAction = () => {
        this.props.store.dispatch(action_1("Action 1 is happen"));
        this.forceUpdate();
    }
    render() {
        return(
            <>
                <Title>{ this.props.store.getState().value_1 }</Title>
                <input type='button' onClick={this.handleAction} value="Button" />
            </>
        );
    }
}

export default Main;