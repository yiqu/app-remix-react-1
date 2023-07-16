import { Divider, Stack, Typography } from "@mui/material";
import type { ActionArgs, LoaderArgs} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link, isRouteErrorResponse, useLoaderData, useMatches, useParams, useRouteError } from "@remix-run/react";
import { deleteItemById, getItemById } from "~/api/items.server";
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
    </Stack>
  );
}

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
  if (params.itemId) {
    await deleteItemById(params.itemId as string);
    //return redirect('/items/list?deleted=true');
    return json({ deleted: true }, { status: 200, statusText: 'OK' });
  }
  return redirect('/items/list');
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status} - {error.statusText}</p>
        <p>{error.data.message}</p>
        <Link to={ '/items/list' }>Back to Safely</Link>
      </div>
    );
  }
  
  return (
    <Stack>
      Error occured!
    </Stack>
  );
}

export default ItemDetail;