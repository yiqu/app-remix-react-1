import { Box, LinearProgress, Stack } from "@mui/material";
import type { V2_MetaFunction } from "@remix-run/node";
import { Link, NavLink, Outlet, useLocation, useNavigation } from "@remix-run/react";
import type { NavItem } from "~/shared/models/nav.model";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function MainNav() {

  const navigation = useNavigation();
  const location = useLocation();
  const showLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" spacing={ 2 }>
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
              <NavLink prefetch={ getPrefetch(navItem.id) } key={ navItem.id } to={ navItem.path } 
                className={ ({ isActive, isPending,  }) => {
                  if (location.pathname.includes('/items/')) {
                    if (location.pathname.includes(navItem.path.split('/')[1])) {
                      return 'active';
                    }
                    return '';
                  }
                  return isPending ? "pending" : isActive ? "active" : "";
                } }
              >
                { navItem.displayName }
              </NavLink>
            );
          })
        }
      </Stack>

      <Box height="4px" width="23rem">
        { showLoading && <LinearProgress color={ navigation.state === 'submitting'  ? 'warning' : 'primary' } /> }
      </Box>

      <Stack direction="row" justifyContent="center" alignItems="start" width="100%" height="100vh"> 
        <Outlet />
      </Stack>
      

    </Stack>
  );
}
  
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

export const getPrefetch = (routeId: string) => {
  switch(routeId) {
    case 'items':
    case 'core': {
      return 'intent';
    }
    default:
      return 'none';
  }
};