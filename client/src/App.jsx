import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/navigation_bar/navbar';
import MoviesList from './components/movies_list/movies_list';


export const LoggedInContext = React.createContext();


function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <LoggedInContext.Provider value={loggedIn}>
      <Router>
        <Navbar />
        <MoviesList ></MoviesList>
        {/* <Route path="/" exact component={MoviesList} />
      <Route path="/user" exact component={CreateUser} /> */}


      </Router>
    </LoggedInContext.Provider>
  );
}

export default App;