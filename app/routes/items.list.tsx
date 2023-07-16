import { Button, List, Stack, Typography } from "@mui/material";
import { Link, Outlet, useActionData, useFetcher, useLoaderData, useNavigate, useRouteLoaderData } from "@remix-run/react";
import type { ProductFire } from "~/models/products.model";
import { addItem, deleteItemById, getAllItems, updateItemById } from "~/api/items.server";
import type { ActionArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { formatDistanceToNow } from 'date-fns';
import ItemDisplay from "~/components/Item";
import type { Item } from "~/models/item.model";
import { useCallback } from "react";
import { Refresh } from "@mui/icons-material";

function ItemsView() {
  const data = useRouteLoaderData('routes/items') as Item[];
  const nav = useNavigate();
  const fetcher = useFetcher();
  //const data = useLoaderData<typeof loader>();

  const handleOnRefresh = () => {
    nav('./', {
      replace: true
    });
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
        <Button startIcon={ <Refresh /> } variant="outlined" onClick={ handleOnRefresh } disabled={ fetcher.state === 'loading' }>
          { fetcher.state === 'loading' ? 'Refreshing...' : 'Refresh' }
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

export default ItemsView;


export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  const intent = body.get("intent") as 'delete' | 'update' | null;
  let result: any;
  let action = "create";

  if (intent === 'delete') {
    result = await deleteItemById(body.get("id") as string);
    action = "delete";
  }
  if (intent === 'update') {
    result = await updateItemById(body.get("id") as string, {
      name: body.get("name") as string,
      price: +(body.get("price") ?? -1), 
    });
    action = "update";
  }
  if (intent === null) {
    result = await addItem({
      name: body.get("name") as string,
      price: +(body.get("price") ?? -1), 
    });
  }
  return redirect(`/items/list?${action}=${body.get('name')}`);
}