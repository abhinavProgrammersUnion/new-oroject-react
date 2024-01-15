import React, { useEffect, useState } from "react";
import Router from "./router";
import MyContext from '../src/hooks/useContext'
import axios from "axios";

function App() {

  const [newsData, setNewsData] = useState()

  useEffect(() => {
    axios.get('https://free-domain.in/Sreeja/api/newsarticle.php').then((res) => {

      setNewsData(res)

    })
  }, [])

  const myContextValue = { newsData };

  return (

    <MyContext.Provider value={myContextValue}>
      <Router />
    </MyContext.Provider>

  )

}

export default App;