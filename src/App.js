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
import Films from './pages/Films';
import Film from './pages/Film';
import People from "./pages/People";
import Planets from "./pages/Planets";


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
          <Route path="/">
            <Films />
          </Route>
        </Switch>
      </Router>

  );
}

export default App;
