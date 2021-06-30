import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/navigation_bar/navbar';
import DataList from './components/lists/data_lists';
import HomePage from './components/home_page/home';
import Description from './components/description_page/description';
import LoginModal from './components/login/login_modal';
import { UserContext } from './context/UserContext';


function App() {
  const [user, setUser] = useState(null);

  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);



  return (
    <Router>
      <UserContext.Provider value={providerValue}>

        <NavBar />
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/login" component={LoginModal}></Route>
        <Route path="/movies_list" component={DataList}></Route>
        <Route path="/actors_list" component={DataList}></Route>
        <Route path="/movie_description" component={Description}></Route>
        <Route path="/actor_description" component={Description}></Route>



      </UserContext.Provider>
    </Router>
  );
}


// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default App;