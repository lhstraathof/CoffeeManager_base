import React from 'react';
import classNames from 'classnames';

import './Button.scss';

const Button = ({text, className, color, size, disabled, onClick}) => {
    
    const classes = classNames(
        'button',
        { [`button--c-${color}`]: color},
        { [`button--s-${size}`]: size},
        { 'button--disabled': disabled },
        className,
    );

    return (
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </button>
    );
};

Button.defaultProps = {
    text: 'Click here',
    color: 'red',
    size: 'medium',
    disabled: false,
    className: '',
};

export default Button;