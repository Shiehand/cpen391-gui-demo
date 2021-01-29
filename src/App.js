import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Animal from './Animal';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Dashboard} exact />
        <Route path='/animal' component={Animal} />
      </Switch>
    </main>
  );
}

export default App;
