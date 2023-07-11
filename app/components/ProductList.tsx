import { Box, Button, Divider, MenuItem, Stack, Typography } from "@mui/material";
import { useLoaderData, useRouteLoaderData } from "@remix-run/react";
import type { ProductFire } from "~/models/products.model";

function ProductList() {
  const data = useRouteLoaderData("routes/products") as ProductFire[];
  
  if (!data) {
    return <>No data</>;
  }

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 1 }>
      {
        data.map((res) => {
          return (
            <div key={ res.fireId }>
              Name: { res.name } | Price: { res.price } | Id: { res.id }
            </div>
          );
        })
      }
    </Stack>
  );
}

export default ProductList;