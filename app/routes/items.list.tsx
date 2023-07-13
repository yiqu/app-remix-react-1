import { Stack, Typography } from "@mui/material";
import { Link, Outlet, useActionData, useLoaderData, useRouteLoaderData } from "@remix-run/react";
import type { ProductFire } from "~/models/products.model";
import { addItem, getAllItems } from "~/api/items.server";
import type { ActionArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { formatDistanceToNow } from 'date-fns';

function ItemsView() {
  const data = useLoaderData<typeof loader>();

  if (data.length < 1) {
    return (
      <div>
        Item list is empty! <Link to="add">Add an item here.  </Link>
      </div>
    );
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      <Typography>{data.length} items available.</Typography>
      <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
        <ul>
          {
            data.map((res) => {
              return (
                <li key={ res.id }>
                  { res.name } { res.price } { formatDistanceToNow(new Date(res.dateAdded).getTime(), {addSuffix: true}) }
                </li>
              );
            })
          }
        </ul>
      </Stack>

      <Outlet />
    </Stack>
  );
}

export default ItemsView;

export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  const result = await addItem({
    name: body.get("name") as string,
    price: +(body.get("price") ?? -1), 
  });
  return redirect(`/items/list?createdName=${result.name}&createdDate=${result.dateAdded}`);
  //return new Response(JSON.stringify(result), {status: 200, statusText: 'OK'});
}

export async function loader() {
  const result = await getAllItems();
  return json(result);
}
