import { Stack, Typography } from "@mui/material";
import { Link, Outlet, useRouteLoaderData } from "@remix-run/react";
import type { ProductFire } from "~/models/products.model";

function ItemsView() {
  const data = useRouteLoaderData('routes/items') as ProductFire[];

  if (data.length < 1) {
    return (
      <div>
        Item list is empty! <Link to="add">Add an item here.</Link>
      </div>
    );
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      <Typography>List of items available</Typography>
      <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
        <ul>
          {
            data.map((res) => {
              return (
                <li key={ res.fireId }>
                  { res.name } { res.price } { res.id }
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