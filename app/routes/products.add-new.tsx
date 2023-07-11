import { Stack } from "@mui/material";
import type { ActionArgs } from "@remix-run/node";
import { productionCreateAction } from "~/api/Product.action";
import ProductList from "~/components/ProductList";
import Products from "~/components/Products";

function ProductsAdd() {
  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      <Products actionUrl="/products/add-new" />
      <ProductList />
    </Stack>
  );
}

export async function action(args: ActionArgs) {
  return productionCreateAction(args);
}

export default ProductsAdd;
