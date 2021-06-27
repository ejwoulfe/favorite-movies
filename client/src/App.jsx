import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navigation_bar/navbar';
import DataList from './components/lists/data_lists';
import HomePage from './components/home_page/home';
import Description from './components/description_page/description';
import LoginModal from './components/login/login_modal';
// import Footer from './components/footer/footer';


export const LoggedInContext = React.createContext();


function App() {
  // const [loggedIn, setLoggedIn] = useState(false);



  return (
    <Router>
      {/* <LoggedInContext.Provider value={loggedIn}> */}

      <NavBar />



      <Route exact path="/" component={HomePage}></Route>
      <Route path="/login" component={LoginModal}></Route>
      <Route path="/movies_list" component={DataList}></Route>
      <Route path="/actors_list" component={DataList}></Route>
      <Route path="/movie_description" component={Description}></Route>
      <Route path="/actor_description" component={Description}></Route>







      {/* </LoggedInContext.Provider> */}
    </Router>
  );
}


// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default App;