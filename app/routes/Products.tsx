import { Stack } from "@mui/material";
import { Link, NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import styles from "~/styles/products.css";

export function links() {
  return [{ rel: "stylesheet", href: styles, as: "style" }];
}

const navOptions: NavItem[] = [
  {
    displayName: 'New',
    path: 'add-new',
    id: 'new',
  },
  {
    displayName: 'View',
    path: 'view',
    id: 'view',
  },
];

function Products() {

  return (
    <>
      <div style={ {marginTop: '30px'} } className="cool-font">
        Welcome to <NavLink to="/products">Products</NavLink>
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
    </>
  );
}

export default Products;