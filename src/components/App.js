import React from "react";
import About from './About'
import Home from './Home'
import NavBar from './NavBar'
import user from '../data/user'

function App() {
  return (
    <div>
      <NavBar />
      <Home username={user.username} city={user.city}/>
      <About image={user.image}/>
    </div>
  );
}

export default App;
