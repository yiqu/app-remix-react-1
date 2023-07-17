import { json, type V2_MetaFunction } from "@remix-run/node";
import { Box, Button, List, Stack, Typography } from "@mui/material";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import ItemDisplay from "~/components/Item";
import type { Item } from "~/models/item.model";
import { useCallback } from "react";
import Refresh from "@mui/icons-material/Refresh";
import Add from "@mui/icons-material/Add";
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

  const handleAdd = () => {
    
  };

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
          <Button startIcon={ <Add /> } variant="outlined" onClick={ handleAdd }>
            New Item
          </Button>
          <Button startIcon={ <Refresh /> } variant="outlined" onClick={ handleOnRefresh }>
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
