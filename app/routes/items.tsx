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
import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = (res) => {
  return [
    { title: "Items" },
    { name: "description", content: "Welcome to Items!" },
  ];
};


function Items() {

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">

      <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 } my={ 3 }>
        {
          navOptions.map((navItem: NavItem) => {
            return (
              <NavLink key={ navItem.id } to={ navItem.path }>{ navItem.displayName }</NavLink>
            );
          })
        }
      </Stack>

      <Outlet />
    </Stack>
  );
}

export default Items;