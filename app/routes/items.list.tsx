import { List, Stack, Typography } from "@mui/material";
import { Link, Outlet, useActionData, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import type { ProductFire } from "~/models/products.model";
import { addItem, getAllItems } from "~/api/items.server";
import type { ActionArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { formatDistanceToNow } from 'date-fns';
import ItemDisplay from "~/components/Item";
import type { Item } from "~/models/item.model";

function ItemsView() {
  const data = useRouteLoaderData('routes/items') as Item[];
  //const data = useLoaderData<typeof loader>();
  
  if (data.length < 1) {
    return (
      <div>
        Item list is empty! <Link to="add">Add an item here.  </Link>
      </div>
    );
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      <Typography width="100%" textAlign="center">{data.length} items available.</Typography>
      <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
        <List dense>
          {
            data.map((res: Item) => {
              return (
                <ItemDisplay key={ res.id } item={ res } />
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

// export async function loader() {
//   const result = await getAllItems();
//   return json(result);
// }

export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  const result = await addItem({
    name: body.get("name") as string,
    price: +(body.get("price") ?? -1), 
  });
  return redirect(`/items/list?createdName=${result.name}&createdDate=${result.dateAdded}`);
  //return new Response(JSON.stringify(result), {status: 200, statusText: 'OK'});
}

