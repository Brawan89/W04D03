import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import { useHistory } from "react-router-dom";
 

const Nav = () => {
  const history = useHistory();
  return (
    <div className="nav">
      <ul>
        <AiOutlineArrowLeft 
        onClick={() => history.goBack()}/>
        <li>
          {" "}
          <Link to="/Home">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/About">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Contact">Contact</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Cards">Cards</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Card">Card</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
