import { Stack } from "@mui/material";
import { Link, NavLink, Outlet, useLocation, useParams } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import type { V2_MetaFunction } from "@remix-run/react";
import { getAllItems } from "~/api/items.server";
import type { HeadersFunction} from "@remix-run/node";
import { json } from "@remix-run/node";

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
    displayName: 'View',
    path: 'list',
    id: 'view',
  },
  {
    displayName: 'Policies',
    path: 'policies',
    id: 'policies',
  },
];

function Items() {

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" width="100%">

      <Stack direction="row" justifyContent="center" alignItems="center" spacing={ 2 } my={ 3 }>
        {
          navOptions.map((navItem: NavItem) => {
            return (
              <NavLink prefetch="none" key={ navItem.id } to={ navItem.path }>
                { navItem.displayName }
              </NavLink>
            );
          })
        } 
      </Stack>
      <Outlet />
    </Stack>
  );
}

export const headers: HeadersFunction = ({
  loaderHeaders,
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control")!,
});

export async function loader() {
  const result = await getAllItems();
  return json(result);
}


export default Items;
