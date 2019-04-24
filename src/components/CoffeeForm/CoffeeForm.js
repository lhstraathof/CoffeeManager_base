import React, { useState } from 'react';
import Button from '../Button';

import './CoffeeForm.scss';

const CoffeeForm = ( {addCoffee} ) => {

    // Declase a new state variable, which we'll call "input"
    const [name, setName] = useState('');

    return (
        <div className="coffee-form">
            <input placeholder="Add name of drink here" className="coffee-form__input" type="text" value={name} onChange={ e => setName(e.target.value) } />
            <Button color="green" text="Add+" onClick={ () => { addCoffee(name); setName(''); } } />
        </div>
    );

};

export default CoffeeForm;
