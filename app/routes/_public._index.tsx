import { json, type V2_MetaFunction } from "@remix-run/node";
import { Box, Button, List, Stack, Typography } from "@mui/material";
import { Link, useFetcher, useLoaderData, useNavigate } from "@remix-run/react";
import ItemDisplay from "~/components/Item";
import type { Item } from "~/models/item.model";
import { useCallback } from "react";
import Refresh from "@mui/icons-material/Refresh";
import Add from "@mui/icons-material/Add";
import { getAllItems } from "~/api/items.server";
import GenericErrorPage from "~/components/GenericErrorPage";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kevin's Cool Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const nav = useNavigate();
  const data: Item[] = useLoaderData<typeof loader>();
  const fetcher = useFetcher();

  const handleOnRefresh = () => {
    nav('./', { replace: true });
  };

  const handleItemAction = useCallback((item: Item) => (actionId: 'edit' | 'delete') => {
    switch(actionId) {
      case 'edit': {
        nav({
          pathname: `/item/${item.id}/edit`,
          search: '?dialogCloseRedirect=/'
        }, { state: { item } });
        break;
      }
      case 'delete': {
        break;
      }
    }
  }, [nav]);

  if (data.length < 1) {
    return (
      <div>
        Item list is empty! <Link to="add">Add an item here.  </Link>
      </div>
    );
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" id="item-list" width="30rem" spacing={ 2 }>
      <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
        <Typography flexBasis="35%" textAlign="start">{data.length} items available.</Typography>
        <Stack direction="row" justifyContent="end" alignItems="center" spacing={ 1 }>
          <Link to="/add">
            <Button startIcon={ <Add /> } variant="text">
              New Item
            </Button>
          </Link>
          <Button startIcon={ <Refresh /> } variant="text" onClick={ handleOnRefresh }>
            Refresh
          </Button>
        </Stack>
      </Stack>
      <Stack direction="column" justifyContent="start" alignItems="center" width="100%" spacing={ 1 }>
        <List dense sx={ {width: '100%'} }>
          {
            data.map((res: Item) => {
              return (
                <ItemDisplay key={ res.id } item={ res } onAction={ handleItemAction(res) } />
              );
            })
          }
        </List>
      </Stack>
    </Stack>
  );
}
  
export async function loader() {
  const result = await getAllItems();
  return json(result);
}


// Auto redirec to a route
  
// export async function loader() {
//   return redirect('/welcome');
// }
