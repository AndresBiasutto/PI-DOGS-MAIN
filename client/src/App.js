import './App.css';
import { Route, useLocation } from 'react-router-dom';
import {Home, Landing,Form, Detail} from './Views'
import NavBar from './Components/NavBar/NavBar';

function App() {
  const location= useLocation()
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" component={Landing} />
      <Route path="/home" render={()=> <Home />} />
      <Route path="/form" render={()=> <Form />} />
      <Route path="/detail" render={()=> <Detail />} />
    </div>
  );
}

export default App;
