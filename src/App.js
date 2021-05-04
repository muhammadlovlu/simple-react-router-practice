// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import FriendDetail from './Components/FriendDetail/FriendDetail';


function App() {
 
  return (
    <div className="App">
<Router>
  <Switch>
 
    <Route path="/home">
    <Home/>
    </Route>
    <Route path="/friend/:friendId" >
     <FriendDetail></FriendDetail>
    </Route>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route path="*">
      <NoMatch/>
      </Route>
  </Switch>
</Router>
    </div>
  );
}

export default App;
