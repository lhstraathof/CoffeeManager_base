import React, { useState, Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import PeopleForm from '../../components/PeopleForm';
import PeopleList from '../../components/PeopleList';
import Button from '../../components/Button';

import './PagePeople.scss';

const PagePeople = (props) => {
  const {people, selectedPerson, selectedPersonRef, coffee, peopleRef} = props;
  const [drawer, setDrawer] = useState(false);

  const addPerson = (name, drink) => {
    name !== '' && peopleRef.set([...people, {
      name, 
      drink: drink,
      count: 0,
      fetchedCoffee: false,
    } ] ); 
  };

  const removePerson = index => {
    if (people.length === 1) selectedPersonRef.set('');
    const newArray = people.filter( (person, i) => i !== index);
    peopleRef.set(newArray);
  };

  return (
      <div className="add-people">
        {!selectedPerson ? (
          <p>Who will get the next coffee round?</p>
        ) : (
          <Fragment>
            <p>It's the turn of:</p>
            <h2 className="add-people__winner">{selectedPerson}</h2>
          </Fragment>
        )}
        {!people.length && (
          <Fragment>
            <h3>No people added yet</h3>
            <p>Want to start managing who gets coffee? <br/>First add some people :)</p>
          </Fragment>
        )}
        {people.length > 0 && (
          <PeopleList people={people} removePerson
          ={removePerson} />
        )}
        <Button onClick={() => { setDrawer(true); }} text="+ Add People" color="orange" />
        <Drawer 
          className="app__drawer"
          anchor="bottom" 
          open={drawer} 
          onClose={() => setDrawer(false)}>
            <PeopleForm coffee={coffee} addPerson={addPerson} />
        </Drawer>
      </div>
  );

}

export default PagePeople;
