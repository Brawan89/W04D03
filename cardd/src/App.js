import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Favorite from "./components/Favorite";
import Cards from "./components/Cards";
import Card from "./components/Card";
import Nav from "./components/Nav";


import './App.css';
import { Route, Switch } from "react-router";

function App() {
  return (
    <div >
     <Nav/>
     <Switch>

       <Route exact path="/Home" component ={Home}/>
       <Route exact path="/About" component ={About}/>
       <Route exact path="/Contact" component ={Contact}/>
       <Route exact path="/Favorite" component ={Favorite}/>
       <Route exact path="/Cards" component ={Cards}/>
       <Route exact path="/Card/:id" component ={Card}/>
       <Route exact path="*" render={()=>{
         return <h1>404</h1>
       }}/>
       
     </Switch>
    </div>
  );
}

export default App;
