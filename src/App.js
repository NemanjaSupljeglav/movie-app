import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./page/movies/index";
import TvShows from "./page/tvShows/index";
import Nav from "./page/navBar/index";
import Details from "./page/details";
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
