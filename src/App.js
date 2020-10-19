import React from 'react'
import {BrowserRouter as Router , Route} from 'react-router-dom'
import './App.css';
import hook from './components/hook'

function App() {
  return (
    <Router>
          <Route exact path='/' component={hook}/>
    </Router>
  );
}

export default App;
