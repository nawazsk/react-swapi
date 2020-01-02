import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
import Home from './pages/home';
import About from './pages/about';

const App = () => (
    <Router>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </ul>

        <hr/>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route  path="/about">
                <About />
            </Route>
        </Switch>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));