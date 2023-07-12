import { Link } from "@remix-run/react";

function NotFound404() {

  return (
    <div>
      Page not found - 404! 
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound404;