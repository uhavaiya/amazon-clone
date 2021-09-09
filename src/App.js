import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
// import { Switch } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Router path="/checkout">
            <Header />
          </Router>
          <Router path="/login">
            <Login/>
          </Router>
          <Router path="/">
            <Header/>
            <Home/>
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
