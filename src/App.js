import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom"
import { Header } from './components/header/Header';
import HomePage from './home/HomePage';

function App() {
  return(
     <>
  <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
    </Switch>
</Router>

</>
 )
}


export default App;
