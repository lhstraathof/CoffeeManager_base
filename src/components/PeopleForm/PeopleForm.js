import React, { useState } from 'react';
import Button from '../Button';

import './PeopleForm.scss';

const PeopleForm = ( {addPerson, coffee} ) => {

    // Declase a new state variable, which we'll call "input"
    const [name, setName] = useState('');
    const [drink, setDrink] = useState('Coffee - Black');

    return (
        <div className="people-form">
            Add name: <br />
            <input placeholder="Add name of person here" className="people-form__input" type="text" value={name} onChange={ e => setName(e.target.value) } />
            <p>
                Select drink: <br />
                <select className="people-form__select" value={drink} onChange={ e => setDrink(e.target.value) }>
                    <option value="Coffee - Black">Coffee - Black</option>
                    {coffee.length> 0 && coffee.map( (item, i) => (
                        <option key={i} value={item.name}>{item.name}</option>
                    ) )}
                </select>
            </p>
            <Button color="green" text="Add+" onClick={ () => { addPerson(name, drink); setName(''); setDrink(''); } } />
        </div>
    );

};

export default PeopleForm;
