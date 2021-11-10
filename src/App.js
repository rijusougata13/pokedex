import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Navbar} from './components/index';
const Home = React.lazy(() => import('./containers/home'));
const PokemonDetails = React.lazy(() => import('./containers/pokemonDetails'));

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokemon/:id" component={PokemonDetails}/>
          </Suspense>
        </Switch>
      </Router>
    </>
  );
}

export default App;
