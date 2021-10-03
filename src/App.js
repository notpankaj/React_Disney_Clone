import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Details from './components/Details';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Router>

        <Header />

        <Switch>

          <Route path="/" exact >
            <Home />
          </Route>

          <Route path="/details" exact >
            <Details />
          </Route>

          <Route path="/login" exact >
            <Login/>
          </Route>

          <Route >
            <h1> LOST ? go  <Link to="/">HOME</Link> </h1>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
