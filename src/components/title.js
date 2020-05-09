import React from 'react';

class Title extends React.Component {
    render() {
        return <p>{ this.props.children }</p>;
    }
}

export default Title;