//React
import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();

  return <div>{id}</div>;
};

export default Details;
