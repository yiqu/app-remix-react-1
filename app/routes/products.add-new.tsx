import { Stack } from "@mui/material";
import type { LoaderArgs} from "@remix-run/node";
import { json, type ActionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { productionCreateAction } from "~/api/Product.action";
import type { FirebaseResult} from "~/api/fetch";
import { fetchGet } from "~/api/fetch";
import ProductList from "~/components/ProductList";
import type { Product } from "~/components/Products";
import Products from "~/components/Products";
import type { ProductFire } from "~/models/products.model";

function ProductsAdd() {
  const data = useLoaderData<ProductFire[]>();
  
  return (
    <Stack direction="column" justifyContent="start" alignItems="start">
      <Products actionUrl="/products/add-new" />
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
    </Stack>
  );
}

export async function action(args: ActionArgs) {
  return productionCreateAction(args);
}

export async function loader({ request, params }: LoaderArgs) {
  const result = await fetchGet<FirebaseResult<Product>>(`https://kq-1-1a499.firebaseio.com/remix-1-products.json`, "GET");

  const keys = Object.keys(result);
  const products: ProductFire[] = [];
  keys.forEach((key) => {
    products.push({
      fireId: key,
      ...result[key]
    });
  });
  products.reverse();
  return json(products);
}

export default ProductsAdd;
