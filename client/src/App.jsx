import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navigation_bar/navbar';
import MoviesList from './components/movies_list/movies_list';
import HomePage from './components/home_page/home';


export const LoggedInContext = React.createContext();


function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <LoggedInContext.Provider value={loggedIn}>
      <Router>
        <NavBar />
        <HomePage />

        {/* <MoviesList ></MoviesList> */}
        {/* <Route path="/" exact component={MoviesList} />
      <Route path="/user" exact component={CreateUser} /> */}


      </Router>
    </LoggedInContext.Provider>
  );
}


// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default App;