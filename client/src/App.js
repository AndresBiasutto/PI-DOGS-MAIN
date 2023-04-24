import './App.css';
import { Route, useLocation } from 'react-router-dom';
import {Home, Landing,Form, Detail} from './Views'
import NavBar from './Components/NavBar/NavBar';

function App() {
  const location= useLocation()
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={()=> <Landing />} />
      <Route path="/home" render={()=> <Home />} />
      <Route path="/form" render={()=> <Form />} />
      <Route path="/detail/:id" render={()=> <Detail />} />
    </div>
  );
}

export default App;
