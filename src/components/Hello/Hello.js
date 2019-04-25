import React from 'react';
import { string } from 'prop-types';

const Hello = (props) => {
    return <h1>Hello, {props.name}</h1>;
};

Hello.propTypes = {
    name: string,
};

Hello.defaultProps = {
    name: 'John Doe',
};

export default Hello;