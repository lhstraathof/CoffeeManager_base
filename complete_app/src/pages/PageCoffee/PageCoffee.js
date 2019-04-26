import React, { useState, Fragment } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CoffeeForm from '../../components/CoffeeForm';
import PeopleList from '../../components/PeopleList';
import Button from '../../components/Button';

import './PageCoffee.scss';

const PageCoffee = (props) => {
  const {coffee, coffeeRef} = props;
  const [drawer, setDrawer] = useState(false);

  const addCoffee = (name) => {
    name !== '' && coffeeRef.set([...coffee, {
      name
    } ] ); 
  };

  const removeCoffee = index => {
    const newArray = coffee.filter( (person, i) => i !== index);
    coffeeRef.set(newArray);
  };

  return (
      <div className="page-coffee">
        {!coffee.length && (
          <Fragment>
            <h3>No drinks added yet</h3>
            <p>Want to manage what drinks people get? <br/>First add some :)</p>
          </Fragment>
        )}
        {coffee.length > 0 && (
          <PeopleList people={coffee} removePerson={removeCoffee} />
        )}
        <Button onClick={() => { setDrawer(true); }} text="+ Add Drinks" color="orange" />
        <Drawer 
          className="app__drawer"
          anchor="bottom" 
          open={drawer} 
          onClose={() => setDrawer(false)}>
            <CoffeeForm addCoffee={addCoffee} />
        </Drawer>
      </div>
  );

}

export default PageCoffee;
