import { BrowserRouter, Route, Switch} from "react-router-dom"
import './app.css'
import About from './Pages/About'
import Profile from './Pages/Profile'
import NotFound from './Pages/NotFound'
import Navbar from './Components/NavBar'
import Login from "./Components/Login/Login"
import MultipleInputs from "./Components/Register/register"
import Create from "./Components/CRUD/create"
import Read from "./Components/CRUD/read"
import Update from "./Components/CRUD/update"
import Box from '@material-ui/core/Box'

const App = () => {
  // const [login, setLogin] = useState(false);
  
  return (
    <div className="app">
      <div className="main">
      <BrowserRouter>
        <Navbar/> 
          <Switch>
            <Route exact path = '/' component = { Login } />
            <Route exact path='/create' component={ Create } />
            <Route exact path='/read' component={ Read } />
            <Route path='/update/:id' component={ Update } />
            <Route path = '/about' component = { About }/>
            <Route path = '/profile' component = { Profile }/>
            <Route path = '/login' component = { Login }/>
            <Route path = "/multipleInputs" component = { MultipleInputs } />
            <Route component = { NotFound } />
          </Switch>
      </BrowserRouter>
                  <Box />
        </div>
    </div>
  );

}

export default App;
