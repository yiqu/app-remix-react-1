import { Stack } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/react";
import { Link, Outlet } from "@remix-run/react";
import { useEffect } from "react";
import { NavItem } from "~/shared/models/nav.model";
import styles from "~/styles/core.css";


export const meta: V2_MetaFunction = (res) => {
  return [
    { title: "Core" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};


function Core() { 

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      <div style={ {marginTop: '30px'} } className="cool-font">
        <Link to="/core">Core</Link> is where you can view our Core users.
      </div>
      <div>
        <Link to="./john">John</Link>
        <Link to="./lucy">Lucy</Link>
        <Link to="./kevin">Kevin</Link>
        <Link to="./level1">Go to Core Level 1 Users</Link>
      </div>

      <div style={ {marginTop: '20px'} }>
        <Outlet />
      </div>
    </Stack>
  );

}

export default Core;