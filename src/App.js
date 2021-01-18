import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Hero from './components/Hero/Hero'
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Hero/>
      </div>

      <Switch>
          <Route path='/'>
            
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
