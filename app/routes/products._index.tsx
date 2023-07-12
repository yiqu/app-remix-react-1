import { Stack } from "@mui/material";
import { NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import { navOptions } from "~/models/products.model";


function ProductsIndex() {
  
  return (
    <div style={ {marginTop: '30px'} } className="cool-font">
      Welcome to <NavLink to="/products">Products Index Page</NavLink>
    </div>
  );
}

export default ProductsIndex;