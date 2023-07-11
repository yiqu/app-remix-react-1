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


function Products() {

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

// this is not client code, only server usage. 
export async function action(args: ActionArgs) {
  return productionCreateAction(args);
}

export async function loader({ request, params }: LoaderArgs) {
  let { searchParams } = new URL(request.url);
  let someSearchParam = Number(searchParams.get("myCoolParams") ?? 0);
  let teamId = 1;

  // validate teamId exists, because search params can be string or undefined
  if (!teamId) return json({ error: "missing teamId" }, 400);

  const result = await fetchGet<FirebaseResult<Product>>(`https://kq-1-1a499.firebaseio.com/remix-1-products.json`, "GET");

  const keys = Object.keys(result);
  const products: ProductFire[] = [];
  keys.forEach((key) => {
    products.push({
      fireId: key,
      ...result[key]
    });
  });
  products.reverse();
  return json(products);
}

export function ErrorBoundary() {
  return (
    <GenericErrorPage />
  );
}

export default Products;