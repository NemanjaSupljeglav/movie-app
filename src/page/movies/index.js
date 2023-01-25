import React from "react";
import Autocomplete from "../../components/Autocomplete";
import { Link } from "react-router-dom";

const Movies = () => {
  const userId = "123321";
  return (
    <div className="mt-6 ml-3 bg-yellow-200 w-[94%] sm:w-[60%] sm:ml-[20%]">
      <Autocomplete />
      <Link to={`/details/${userId}`}>View details</Link>
    </div>
  );
};

export default Movies;
