import logo from './logo.svg';
import './App.css';
import Navber from './Components/Header/Navber/Navber';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App container bg-dark">

      <Router>
        
        <Navber></Navber>

        <Switch>

          <Route exact path="/">
            <Header></Header>
          </Route>


        </Switch>



      </Router>


    </div>
  );
}

export default App;
