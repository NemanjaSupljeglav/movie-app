//React
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Page
import Movies from "./page/movies/index";
import Series from "./page/series/index";
import Nav from "./page/navBar/index";
import Details from "./page/details";

//Context
import GlobalProvider from "../src/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
