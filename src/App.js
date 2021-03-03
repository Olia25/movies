import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Divider} from 'antd'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './pages/HomePage';
import Film from './pages/Film';
import People from "./pages/People";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import Vehicles from  "./pages/Vehicles"
import Species from "./pages/Species";

function App() {
  return (
      <Router>
        <Divider orientation="left"  className='aaa'>
          <Link to="/">
            <img className="logo" src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG7.png"/>
          </Link>
        </Divider>
        <Switch>
          <Route path="/films/:filmId">
            <Film />
          </Route>
          <Route path="/people/:peopleId">
            <People />
          </Route>
            <Route path="/planets/:planetsId">
                <Planets />
            </Route>
            <Route path="/starships/:starshipsId">
                <Starships />
            </Route>
            <Route path="/vehicles/:vehiclesId">
                <Vehicles />
            </Route>
            <Route path="/species/:speciesId" >
                <Species />
            </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
