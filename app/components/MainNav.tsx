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

export default function MainNav({ children }: { children: React.ReactNode }) {

  const navigation = useNavigation();
  const location = useLocation();
  const showLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" spacing={ 2 }>
      <Link to="/">
        <Stack direction="row" justifyContent="center" alignItems="center">
          <img src="/images/mixing.png" alt="logo" height="29px" />
          <h1 style={ {marginLeft: '10px'} }>Kevin's Grocery List</h1>
        </Stack>
        
      </Link>

      <Stack direction="row" justifyContent="start" alignItems="center" spacing={ 2 }>
        {
          navOptions.map((navItem: NavItem) => {
            return (
              <NavLink prefetch={ getPrefetch(navItem.id) } key={ navItem.id } to={ navItem.path } 
                className={ ({ isActive, isPending,  }) => {
                  if (location.pathname.includes('/item/')) {
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

      <Stack id="main-content" direction="row" justifyContent="center" alignItems="start" width="100%" height="100vh"> 
        { children }
      </Stack>
      

    </Stack>
  );
}
  
const navOptions: NavItem[] = [
  {
    displayName: 'Home',
    path: '/',
    id: 'home',
  },
  {
    displayName: 'Wishlist',
    path: '/wishlist',
    id: 'wishlist',
  },
  {
    displayName: 'Deals',
    path: '/deals',
    id: 'deals',
  },
  {
    displayName: 'Items',
    path: '/items/list',
    id: 'items',
  },
  {
    displayName: 'About',
    path: '/about',
    id: 'about',
  },
  {
    displayName: 'Client Only (no SSR)',
    path: '/clientonly',
    id: 'clientonly',
  },
  {
    displayName: 'Team',
    path: '/team',
    id: 'team',
  },
  {
    displayName: 'Login',
    path: '/login',
    id: 'login',
  },
  {
    displayName: 'Doesnt exist',
    path: '/aaa',
    id: 'aaa',
  },
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