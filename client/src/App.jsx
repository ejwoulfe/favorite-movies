import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navigation_bar/navbar';
import MoviesList from './components/movies_list/movies_list';
import ActorsList from './components/actors_list/actors_list';
import HomePage from './components/home_page/home';
import MovieDescription from './components/movies_description/movie_description';
import ActorDescription from './components/actors_description/actor_description';
// import Footer from './components/footer/footer';


export const LoggedInContext = React.createContext();


function App() {
  // const [loggedIn, setLoggedIn] = useState(false);


  return (
    <Router>
      {/* <LoggedInContext.Provider value={loggedIn}> */}

      <NavBar />



      <Route exact path="/" component={HomePage}></Route>
      <Route path="/movies_list" component={MoviesList}></Route>
      <Route path="/actors_list" component={ActorsList}></Route>
      <Route path="/movie_description" component={MovieDescription}></Route>
      <Route path="/actor_description" component={ActorDescription}></Route>




      {/* </LoggedInContext.Provider> */}
    </Router>
  );
}


// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default App;