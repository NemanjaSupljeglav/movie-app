import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <ul className="nav-links mt-6 ml-3 flex sm:ml-[20%] ">
      <Link
        to="/"
        className={
          pathname.includes("/details")
            ? "hidden"
            : pathname === "/"
            ? "bg-sky-500 px-6 py-3 text-black rounded"
            : "px-6 py-3 text-sky-500 hover:text-sky-600"
        }
      >
        Movies
      </Link>
      <Link
        to="/series"
        className={
          pathname.includes("/details")
            ? "hidden"
            : pathname.includes("/series")
            ? "bg-sky-500 px-6 py-3 text-black rounded "
            : "px-6 py-3 text-sky-500 hover:text-sky-600"
        }
      >
        Series
      </Link>
      <Link
        to=".."
        onClick={e => {
          e.preventDefault();
          navigate(-1);
        }}
        className={
          pathname.includes("/details")
            ? "px-6 py-3 text-sky-500 hover:text-sky-600"
            : "hidden"
        }
      >
        Go back
      </Link>
    </ul>
  );
}
