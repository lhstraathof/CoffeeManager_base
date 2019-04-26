import React from 'react';
import { string } from 'prop-types';

class Hello extends React.Component {

    static propTypes = {
        name: string,
    }

    render() {
        const {name} = this.props;
        return <h1>Hello, {name}</h1>;
    }
}

export default Hello;