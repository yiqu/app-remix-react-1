import { Stack } from "@mui/material";
import { Link, NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";
import type { V2_MetaFunction } from "@remix-run/react";

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
