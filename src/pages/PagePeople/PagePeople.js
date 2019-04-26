import React, {useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';

import './PagePeople.scss';

const PagePeople = () => {

  const [data, setData] = useState([]);
  const [name, setName] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');

  // const data = [
  //   {
  //     name: 'Lars',
  //     drink: 'Water'
  //   },
  //   {
  //     name: 'Pieter',
  //     drink: 'Coffee'
  //   }
  // ];
  return (
    <div>
      <p>Who will get the next coffee round?</p>
      {data.length < 1 && (
        <div>
          <h3>No people added yet</h3>
          <p>Want to manage who gets your coffee? <br />Add some people first</p>
        </div>
      )}
   
      {selectedPerson && <h2>{selectedPerson}</h2>}
      <List>
        {data.map((person, i) => {
          return (
            <ListItem>
              <ListItemText primary={person.name} secondary={person.drink} />
              <DeleteIcon />
            </ListItem>
          );
        })}
        </List>
        <div>
        <TextField
          id="outlined-name"
          label="Name"
          // value={this.state.name}"
          value={name}
          // onChange={this.handleChange('name')}
          margin="normal"
          variant="outlined"
          onChange={ (e) => setName( e.target.value ) }
        />
        <br />
        <Button variant="contained" color="primary" onClick={ () => {
          setData([
            ...data,
            {
              name: name,
              drink: 'Beer'
            }
          ]);
          setName('');
        } }>
          + Add person
        </Button>
        <br /><br />
        <Button disabled={data.length < 1} variant="contained" color="secondary" onClick={ () => {
          const selected = data[Math.floor(Math.random()*data.length)];
          setSelectedPerson(selected.name);
        } }>
          Select person
        </Button>
        </div>
    </div>
  );
}

export default PagePeople;
