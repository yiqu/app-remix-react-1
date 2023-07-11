import { Button, DialogContent, Stack } from "@mui/material";
import type { ActionArgs } from "@remix-run/node";
import { useNavigation, useSearchParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { productionCreateAction } from "~/api/Product.action";
import DialogLayout from "~/components/DialogLayout";
import ProductList from "~/components/ProductList";
import Products from "~/components/Products";

function ProductsView() {
  const transition = useNavigation();
  const [open, setOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

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

      <ProductList />

      <DialogLayout open={ open } title="Add Product" onClose={ handleClose }>
        <DialogContent>
          <Products actionUrl="/products/view" />
        </DialogContent>
      </DialogLayout>
    </Stack>
    
  );
}

export async function action(args: ActionArgs) {
  return productionCreateAction(args);
}

export default ProductsView;