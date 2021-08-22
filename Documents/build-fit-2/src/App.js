import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Services from './components/Services'
import Header from './components/Header'
import Items from './components/Items'
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact />
        </Switch>
      </Router>
      {/* <Navbar/>
      <Header/>
      <Items/>
      <Services/>
      
      
      
      <h1>Hello from React</h1> */}
    </>
  );
}

export default App;
