import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fire } from './fire';
import PagePeople from './pages/PagePeople';
import PageCoffee from './pages/PageCoffee';
import Header from './components/Header';
import PeopleIcon from '@material-ui/icons/Face';
import CoffeeIcon from '@material-ui/icons/FreeBreakfast';
import GetCoffeeIcon from '@material-ui/icons/Star';

import './App.scss';

const App = () => {

  const [navActive, setnavActive] = useState(0);
  const [people, setPeople] = useState([]);
  const [coffee, setCoffee] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);

  const peopleRef = fire.database().ref('people');
  const coffeeRef = fire.database().ref('coffee');
  const selectedPersonRef = fire.database().ref('selectedPerson');

  useEffect(() => {
    if (firstLoad) {
      peopleRef.on('value', snapshot => {
        const val = snapshot.val();
        val ? setPeople(val) : setPeople('');
      });
      coffeeRef.on('value', snapshot => {
        const val = snapshot.val();
        val ? setCoffee(val) : setCoffee('');
      });
      selectedPersonRef.on('value', snapshot => {
        const val = snapshot.val();
        val ? setSelectedPerson(val) : setSelectedPerson('');
      });
      setFirstLoad(false);
    }
  });

  const appRoutes = [
    {
      isLink: true,
      label: 'People',
      icon: PeopleIcon,
      url: '/',
    },
    {
      isLink: false,
      label: 'Who?',
      icon: GetCoffeeIcon,
      url: '/who',
      onClick: () => {console.log('clock')}
    },
    {
      isLink: true,
      label: 'Coffee',
      icon: CoffeeIcon,
      url: '/coffee',
    },
  ];

  const selectPersonToGetCoffee = () => {
    const peopleThatShouldGetCoffee = people.filter( person => !person.fetchedCoffee );
    const selected = peopleThatShouldGetCoffee[Math.floor(Math.random()*peopleThatShouldGetCoffee.length)];
    const newArray = people.map( (person, i) => {
      return person === selected ? (
        {
          ...person,
          count: (person.count + 1),
          fetchedCoffee: true,
        }
      ) : person;
    });
    peopleRef.set(newArray);
    selectedPersonRef.set(selected.name);
    if( peopleThatShouldGetCoffee.length === 1) {
      resetFetchedCoffee();
    }
  };

  const resetFetchedCoffee = () => {
    const newArray = people.map( (person, i) => (
      {
        ...person,
        fetchedCoffee: false,
      }
    ));
    peopleRef.set(newArray);
  };

  const WrapPagePeople = () => (
    <PagePeople 
      peopleRef={peopleRef}
      coffeeRef={coffeeRef}
      selectedPersonRef={selectedPersonRef}
      people={people}
      selectedPerson={selectedPerson}
      coffee={coffee}
    />
  );
  const WrapPageCoffee = () => <PageCoffee coffeeRef={coffeeRef} coffee={coffee} setCoffee={setCoffee} />;

  return (
    <div className="app">
      <Header />
      <Router>
        <Route path="/" exact component={WrapPagePeople} />
        <Route path="/coffee" component={WrapPageCoffee} />
        <div
        className="app__nav"
        >
          {appRoutes.map( (item, i) => {
            return item.isLink ? (
              <Link 
                className={`app__nav-item ${i === navActive && "app__nav-item--active"}`} 
                onClick={ () => setnavActive(i) } 
                to={item.url} 
                key={i}>
                  <item.icon/>
                  <br />
                  <span>{item.label}</span>
              </Link>
            ) : (
              <a 
                href="/#"
                className={`app__nav-item app__nav-item--who ${i === navActive && "app__nav-item--active"}`} 
                onClick={ (e) => {
                  e.preventDefault();
                  setnavActive(i);
                  if(people.length > 0) selectPersonToGetCoffee(); 
                } } 
                key={i}
              >
                <item.icon/>
                <br />
                <span>{item.label}</span>
              </a>
            );
          } )}
          
        </div>
      </Router>
    </div>
  );

}

export default App;
