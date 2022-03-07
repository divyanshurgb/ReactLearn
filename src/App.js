import { BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Navbar from './Components/NavBar'
import Login from "./Components/Login/Login"
import MultipleInputs from "./Components/Register/register"
import Create from "./Components/CRUD/create"
import Read from "./Components/CRUD/read"
import Update from "./Components/CRUD/update"
import DropdownData from './Components/Dropdown/DropdownData';
import { useState } from 'react';

const App = () => {
  const [login, setLogin] = useState(false);
  
  return (
    <div className="app">
      <div className="main">
      <BrowserRouter>
        <Navbar/> 
          <Switch>   
            <Route exact path = '/' component = { Login } />
            <Route exact path='/create' component={ Create } />
            <Route exact path='/read' component={ Read } />
            <Route path='/update' component={ Update } />
            <Route path = '/about' component = { About }/>
            <Route path = '/profile' component = { Profile }/>
            <Route path = '/login' component = { Login }/>
            <Route path = '/dropdowndata' component = { DropdownData }/>
            <Route path = "/multipleInputs" component = { MultipleInputs } />
            <Route component = { NotFound } />
          </Switch>
      </BrowserRouter>
        </div>
    </div>
  );

}

export default App;







{/* <div className="main">
            <h2 className="main-head">React Crud Operations</h2>
          <div>
            <Route exact path='/create' component={Create} />
          </div>
          <div style={{ marginTop: 20 }}>
            <Route exact path='/read' component={Read} />
          </div>

            <Route path='/update' component={Update} />
          </div> */}