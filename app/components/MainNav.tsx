import { Stack } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link, NavLink, Outlet } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function MainNav() {
  
  const navOptions: NavItem[] = [
    {
      displayName: 'Core',
      path: '/core',
      id: 'core',
    },
    {
      displayName: 'About',
      path: '/about',
      id: 'about',
    },
    {
      displayName: 'Products',
      path: '/products',
      id: 'products',
    },
    {
      displayName: 'Items',
      path: '/items/list',
      id: 'items',
    },
    {
      displayName: 'Login',
      path: '/login',
      id: 'login',
    }
  ];

  return (
    <Stack direction="column" justifyContent="start" alignItems="center">
      <Link to="/">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <img src="/images/mixing.png" alt="logo" height="29px" />
          <h1>Welcome</h1>
        </Stack>
        
      </Link>

      <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
        {
          navOptions.map((navItem: NavItem) => {
            return (
              <NavLink prefetch="none" key={ navItem.id } to={ navItem.path }>{ navItem.displayName }</NavLink>
            );
          })
        }
      </Stack>
    
      <Outlet />

    </Stack>
  );
}
  