import { Stack } from "@mui/material";
import { Link, NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import type { Product } from "~/components/Products";
import type { LoaderArgs, redirect, ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node"; // or cloudflare/deno
import GenericErrorPage from "~/components/GenericErrorPage";
import type { FirebaseResponse, FirebaseResult} from "~/api/fetch";
import { fetchGet } from "~/api/fetch";
import { productionCreateAction } from "~/api/Product.action";
import type { V2_MetaFunction } from "@remix-run/react";
import type { ProductFire } from "~/models/products.model";

export const meta: V2_MetaFunction = (res) => {
  return [
    { title: "Items" },
    { name: "description", content: "Welcome to Items!" },
  ];
};

export const navOptions: NavItem[] = [
  {
    displayName: 'New',
    path: 'list/add',
    id: 'new',
  },
  {
    displayName: 'Policies',
    path: 'policies',
    id: 'policies',
  },
];

function Items() {

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">

      <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 } my={ 3 }>
        {
          navOptions.map((navItem: NavItem) => {
            return (
              <NavLink prefetch="intent" key={ navItem.id } to={ navItem.path }>{ navItem.displayName }</NavLink>
            );
          })
        }
      </Stack>

      <Outlet />
    </Stack>
  );
}

export default Items;

// this is not client code, only server usage. 
export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  const create$ = await fetchGet<FirebaseResponse>(`https://kq-1-1a499.firebaseio.com/remix-1-items.json`, "POST", Object.fromEntries(body));
  return json(create$);
}

export async function loader({ request, params }: LoaderArgs) {

  const result = await fetchGet<FirebaseResult<Product>>(`https://kq-1-1a499.firebaseio.com/remix-1-items.json`, "GET");

  const keys = Object.keys(result ?? []);
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
