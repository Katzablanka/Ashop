
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import ErrorPage from './pages/ErrorPage';
import Card from './pages/Card'

import{Route,Switch} from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/rooms/' component={Rooms}/>
          {/* <Route exact path='/card/:name' component={Card}/> */}
           <Route exact path='/card' component={Card}/>
          <Route exact path='/rooms/:slug' component={SingleRoom}/>
          <Route component={ErrorPage}/>
      </Switch>
      
     
    </div>
  );
}

export default App;
