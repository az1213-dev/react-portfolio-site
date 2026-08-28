import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found--container">
      <h1 className="not-found--title">404</h1>
      <h2>Page Not Found</h2>
      <p className="text-md not-found--description">
        Oops! The page you are looking for doesn't exist or may have been moved. Let's get you back to my main portfolio.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to My Homepage
      </Link>
    </div>
  );
}

