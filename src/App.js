import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Footer from './Footer';
import Navlinks from './Navlinks';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Router path="/checkout">
            <Header />
            <Checkout />
          </Router>
          <Router path="/login">
            <Login/>
          </Router>
          <Router path="/">
            <Header/>
            <Navlinks />
            <Home/>
            <Footer />
          </Router>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
