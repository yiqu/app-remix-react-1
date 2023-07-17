import { json, type V2_MetaFunction } from "@remix-run/node";
import { Button, List, Stack, Typography } from "@mui/material";
import { Link, Outlet, useLoaderData, useNavigate, useRouteLoaderData } from "@remix-run/react";
import ItemDisplay from "~/components/Item";
import type { Item } from "~/models/item.model";
import { useCallback } from "react";
import { Refresh } from "@mui/icons-material";
import { getAllItems } from "~/api/items.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Kevin's Cool Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {

  const nav = useNavigate();
  const data: Item[] = useLoaderData<typeof loader>();

  const handleOnRefresh = () => {
    nav('./', { replace: true });
  };

  const handleItemAction = useCallback((item: Item) => (actionId: 'edit' | 'delete') => {
    switch(actionId) {
      case 'edit': {
        nav(`/items/list/edit/${item.id}`, { state: { item } });
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
    <Stack direction="column" justifyContent="start" alignItems="center" id="item-list" width="30rem">
      <Stack direction="row" justifyContent="start" alignItems="center" width="100%">
        <Typography width="100%" textAlign="start">{data.length} items available.</Typography>
        <Button startIcon={ <Refresh /> } variant="outlined" onClick={ handleOnRefresh }>
          Refresh
        </Button>
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

      <Outlet />
    </Stack>
  );
}
  
export async function loader() {
  const result = await getAllItems();
  return json(result);
}
