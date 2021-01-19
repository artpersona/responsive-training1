import { Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Landing from './pages/Landing'
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/'>
              <NavBar/>
              <Landing></Landing>
            </Route>
            
        </Switch>
      </div>
    </Router>
  );
}

export default App;
