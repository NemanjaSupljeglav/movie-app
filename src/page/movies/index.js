//React
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Components
import DebounceTextField from "../../components/DebounceTextField";

//Context
import { GlobalContext } from "../../context/GlobalState";

const Movies = () => {
  const context = useContext(GlobalContext);
  let navigate = useNavigate();

  const handleGetMovies = data => {
    if (data) {
      context.getMoviesOrSeries(data, "movie");
    } else context.clearMoviesOrSeries();
  };
  const handleGetOneMovie = data => {
    navigate(`/details/${data}`);
  };

  useEffect(() => {
    return context.clearMoviesOrSeries();
  }, []);

  return (
    <div className="mt-6 ml-3  w-[94%] sm:w-[60%] sm:ml-[20%]">
      <DebounceTextField onChange={handleGetMovies} />
      <div className="sm:grid sm:grid-rows-5 sm:grid-flow-col sm:gap-4 mt-6">
        {context?.moviesOrSeries?.data?.Search?.map(item => (
          <div
            key={item?.imdbID}
            onClick={() => handleGetOneMovie(item?.imdbID)}
            className="flex flex-col items-center hover:brightness-50  duration-300 cursor-pointer"
          >
            <img
              src={item?.Poster}
              alt="pic"
              className="w-[100%] h-[100%] object-cover max-w-md max-h-md"
            />
            <div className="text-sky-500 text-base text-center">
              {item?.Title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
