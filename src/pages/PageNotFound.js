import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        404 <br />
      </h1>
      <h3>
        Page Not Found <br />
      </h3>
      <Link to="/" style={{ textAlign: "center" }}>
        <br /> Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
