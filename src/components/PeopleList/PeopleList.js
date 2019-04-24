import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import './PeopleList.scss';

const Items = ( {people, removePerson} ) => people.map( (person, i) => (
    <ListItem key={i} disabled={person.fetchedCoffee}>
        <ListItemText primary={person.name} secondary={person.drink}/>
        <IconButton 
            onClick={ () => removePerson(i) } 
            aria-label="Delete" 
            color="primary">
            <DeleteIcon disabled={person.fetchedCoffee}/>
        </IconButton>
    </ListItem>
));

const PeopleList = ( {people, removePerson} ) => {

   return (
        <List className="people-list">
            <Items people={people} removePerson={removePerson} />
        </List>
   );
};

export default PeopleList;