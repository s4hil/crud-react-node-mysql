import React from 'react'
import Users from './pages/Users';
import Add from './pages/Add';
import Update from './pages/Update';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Users/> }/>
          <Route path="/add" element={ <Add/> }/>
          <Route path="/update" element={ <Update/> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
