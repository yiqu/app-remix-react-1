import { Divider, Stack, Typography } from "@mui/material";
import type { ActionArgs, LoaderArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {  Outlet, useLoaderData, useParams } from "@remix-run/react";
import { deleteItemById, getItemById, updateItemById } from "~/api/items.server";
import type { Item } from "~/models/item.model";


function ItemDetail() {
  const itemDetail = useLoaderData<typeof loader>();
  const params = useParams();

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 3 }  width="30rem">
      <Typography width="100%" textAlign="center">Item Detail</Typography>
      <Divider flexItem variant="fullWidth" />
      <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
        {
          itemDetail ? (
            <>
              <Typography width="100%" textAlign="center">Name: {itemDetail.name}</Typography>
              <Typography width="100%" textAlign="center">Price: ${itemDetail.price}</Typography>
            </>
          ) : (<>Did not find a item with the id: { params.itemId }</>)
        }
      </Stack>
      <Outlet />
    </Stack>
  );
}

// ------------ Server ---------------------------------------------------------------------------------------

export async function loader({ request, params, context }: LoaderArgs) {
  const itemId: string = params.itemId!;
  const itemDetail: Item | null = await getItemById(itemId).catch((err) => {
    throw json(
      { invalid: itemId, message: `Sorry~! Could not find an Item with the provided ID. ${JSON.stringify(err)}` },
      { status: 500, statusText: "Internal Server Error" }
    );
  });
  return json(itemDetail);
}

export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  const intent = body.get("intent") as 'delete' | 'update' | null;
  
  if (request.method === 'DELETE' && !intent) {
    await deleteItemById(params.itemId as string);
    return redirect('/');
  }

  if (intent === 'delete') {
    await deleteItemById(body.get("id") as string);
    return json({ deleted: true }, { status: 200, statusText: 'OK' });
  }

  if (intent === 'update') {
    await updateItemById(body.get("id") as string, {
      name: body.get("name") as string,
      price: +(body.get("price") ?? -1), 
    });
    return redirect(`/item/${body.get('id')}`);
  }
}

export default ItemDetail;