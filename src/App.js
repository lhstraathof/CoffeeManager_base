import React from 'react';
import { fire } from './fire';
import Header from './components/Header';
import PagePeople from './pages/PagePeople'

import './App.scss';

const App = () => {

  return (
    <div className="app">
      <Header />
      <PagePeople />
    </div>
  );

}

export default App;
