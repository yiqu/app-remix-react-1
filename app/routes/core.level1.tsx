import { Link, Outlet } from "@remix-run/react";

function CoreLevel1() {

  return (
    <div>
      <div>
        Welcome to <Link to="/core/level1">Level 1</Link>. You can view our Core Level 1 users.
      </div>

      <div style={ {marginBottom: '20px'} }>
        <Link prefetch="intent" to="./bekah">Bekah</Link>
        <Link prefetch="intent" to="./joe">Joe</Link>
        <Link prefetch="intent" to="./jack">Jack</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default CoreLevel1;