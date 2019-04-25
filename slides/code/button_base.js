import React from 'react';

import './Button.scss';

const Button = (props) => {
    return (
        <button className="button">{props.children}{props.text}</button>
    );
};

export default Button;