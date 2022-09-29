import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>My List</h1>
      <Link className="link" to="/task">
        Click here go to your list
      </Link>

      <p>
        "You can do what you have to do, and sometimes you can do it even better
        than you think you can.""
      </p>
    </div>
  );
}

export default Home;
