import { Link, Outlet } from "@remix-run/react";

function Core() { 

  return (
    <>
      <div>
        <Link to="/core">Core</Link> is where you can view our Core users.
      </div>
      <div>
        <Link to="./john">John</Link>
        <Link to="./lucy">Lucy</Link>
        <Link to="./kevin">Kevin</Link>
        <Link to="./level1">Go to Core Level 1 Users</Link>
      </div>

      <div style={{marginTop: '20px'}}>
        <Outlet />
      </div>
    </>
  )

}

export default Core;