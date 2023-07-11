import { Button, DialogContent, Stack } from "@mui/material";
import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { useLoaderData, useNavigation, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { productionCreateAction } from "~/api/Product.action";
import DialogLayout from "~/components/DialogLayout";
import ProductList from "~/components/ProductList";
import type { Product } from "~/components/Products";
import Products from "~/components/Products";
import type { FirebaseResponse, FirebaseResult} from "~/api/fetch";
import { fetchGet } from "~/api/fetch";
import { json } from "@remix-run/node"; // or cloudflare/deno
import type { ProductFire } from "~/models/products.model";

function ProductsView() {
  const transition = useNavigation();
  const [open, setOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  const data = useLoaderData<ProductFire[]>();

  const handleClickOpen = () => {
    setOpen(true);
    setSearchParams({
      openCreateDialog: 'true'
    });
  };

  const handleClose = () => {
    setOpen(false);
    setSearchParams();
  };

  useEffect(() => {
    if (JSON.parse(searchParams.get('openCreateDialog') || 'false')) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [searchParams]);

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 3 }>
      <Stack direction="row" justifyContent="start" alignItems="center">
        <div>
          View Products
        </div>
        <Button variant="outlined" onClick={ handleClickOpen }>
          {transition.state === "submitting"
              ? "Creating..."
              : "Create"}
        </Button>
      </Stack>
      <div>
        Data:
      </div>
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

      <DialogLayout open={ open } title="Add Product" onClose={ handleClose }>
        <DialogContent>
          <Products actionUrl="/products/view" />
        </DialogContent>
      </DialogLayout>
    </Stack>
    
  );
}

// this is not client code, only server usage. 
export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  console.log("METHOD: ", request.method, Object.fromEntries(body));
  const create$ = await fetchGet<FirebaseResponse>(`https://kq-1-1a499.firebaseio.com/remix-1-products.json`, "POST", Object.fromEntries(body));
  return json(create$);
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

export default ProductsView;