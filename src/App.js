import './App.css';
import ListUserComponent from './component/ListUserComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CreateUserComponent from './component/CreateUserComponent';

function App() {
  return (
  <div>
      <Router>
        <HeaderComponent/>
          <div className='container'>
             <Switch>
              <Route path = "/" exact component = {ListUserComponent}></Route>
              <Route path = "/users" component = {ListUserComponent}></Route>
              <Route path = "/add-users" component = {CreateUserComponent}></Route>
             </Switch>
      </div>
      <FooterComponent/>
    </Router>
  </div>
    
  );
}

export default App;
