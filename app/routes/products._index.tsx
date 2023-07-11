import { Stack } from "@mui/material";
import { Link, NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import type { Product } from "~/components/Products";
import type { LoaderArgs, redirect, ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno
import GenericErrorPage from "~/components/GenericErrorPage";
import type { FirebaseResponse, FirebaseResult} from "~/api/fetch";
import { fetchGet } from "~/api/fetch";
import { navOptions, type ProductFire } from "~/models/products.model";
import { productionCreateAction } from "~/api/Product.action";


function ProductsIndex() {

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
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
    </Stack>
  );
}

export default ProductsIndex;