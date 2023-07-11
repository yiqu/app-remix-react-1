import { Stack } from "@mui/material";
import { NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import { navOptions } from "~/models/products.model";


function ProductsIndex() {
  
  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      <div style={ {marginTop: '30px'} } className="cool-font">
        Welcome to <NavLink to="/products">Products Index Page</NavLink>
      </div>

      <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 } my={ 3 }>
        {
          navOptions.map((navItem: NavItem) => {
            return (
              <NavLink key={ navItem.id } to={ navItem.path }>{ navItem.displayName }</NavLink>
            );
          })
        }
      </Stack>

      <div>
        <Outlet />
      </div>
    </Stack>
  );
}

export default ProductsIndex;