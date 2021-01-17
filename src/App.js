import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
      </div>

      <Switch>
          <Route path='/'>
            
          </Route>
          
      </Switch>
    </Router>
  );
}

export default App;
