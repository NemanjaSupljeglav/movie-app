//React
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

//Context
import { GlobalContext } from "../../context/GlobalState";

const Details = () => {
  let { id } = useParams();
  const context = useContext(GlobalContext);

  useEffect(() => {
    context.getOneMovieOrSerie(id);
    return () => {
      context.clearOneMovieOrSerie();
    };
  }, []);

  return (
    <div className="flex flex-col items-center ">
      <img
        src={context?.oneMovieOrSerie?.Poster}
        alt="pic"
        className="sm:w-[30%] sm:h-[30%] w-[80%] h-[80%] object-cover"
      />
      <div className="text-base text-center mt-3">
        {context?.oneMovieOrSerie?.Title}
      </div>
      <div className="text-base text-center max-w-lg mt-3">
        {context?.oneMovieOrSerie?.Plot}
      </div>
    </div>
  );
};

export default Details;
