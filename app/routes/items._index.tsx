import { Stack } from "@mui/material";
import { NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import { navOptions } from "~/models/products.model";


function ProductsIndex() {
  
  return (
    <div style={ {marginTop: '30px'} } >
      Welcome to <NavLink to="/items">Items Index Page</NavLink>
    </div>
  );
}

export default ProductsIndex;