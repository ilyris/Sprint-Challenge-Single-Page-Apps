import React from "react";
import Header from "./components/Header.js";
import { Route, Switch } from 'react-router-dom';
import '../src/index.css';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';



export default function App() {


  return (
    <main>
      <Header />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/characters" render={props => <CharacterList {...props} />} />
        
      </Switch>
    </main>
  );
}
