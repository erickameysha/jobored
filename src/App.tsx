import React from 'react';

import './App.css';
import Filter from "./Component/Filter/Filter";

import Auth from "./Component/Auth/Auth";

function App() {
    // useEffect(()=> {
    //     superjobApi.auth()
    // },[])
  return (
    <div>
      <Filter/>
        <Auth/>
    </div>
  );
}

export default App;
