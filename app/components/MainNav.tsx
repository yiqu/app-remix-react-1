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
      displayName: 'Login',
      path: '/login',
      id: 'login',
    }
  ];

  return (
    <div>
      <Link to="/"><h1>Welcome Products</h1></Link>

      <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
        {
          navOptions.map((navItem: NavItem) => {
            return (
              <NavLink key={ navItem.id } to={ navItem.path }>{ navItem.displayName }</NavLink>
            );
          })
        }
      </Stack>
    
      <Outlet />

    </div>
  );
}
  