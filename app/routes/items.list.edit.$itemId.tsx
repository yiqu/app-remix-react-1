import { Button, DialogActions, DialogContent, Divider, Stack, Typography } from "@mui/material";
import type { RouteMatch} from "@remix-run/react";
import { Form, useActionData, useLocation, useMatches, useNavigate, useNavigation, useParams, useSubmit } from "@remix-run/react";
import DialogLayout from "~/components/DialogLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "~/constants/schemas";
import { useForm } from "react-hook-form";
import type { Product } from "~/models/products.model";
import type { Item, ItemToAdd } from "~/models/item.model";
import HFTextField from "~/shared/hook-forms/TextField";

function ItemsEdit() {
  const nav = useNavigate();
  const location = useLocation();
  //console.log(location.state)  < -- the state has Item data
  const match = useMatches();
  const params = useParams();
  const submit = useSubmit();
  const transition = useNavigation();

  const allItems: Item[] = match.find((route: RouteMatch) => {
    return route.id === 'routes/items';
  })?.data ?? [];


  const currentItem: ItemToAdd = allItems.find((item: Item) => {
    return item.id === params.itemId;
  }) ?? { name: "", price: 0 };

  const {  handleSubmit, control, reset } = useForm<ItemToAdd>({
    defaultValues: {...currentItem},
    resolver: yupResolver(productSchema),
    mode: "onChange"
  });

  const handleFormSubmit = (product: ItemToAdd, event: any)=> {
    submit({...product, intent: 'update'} as any, {
      action: '/items/list',
      method: 'post', 
    });
  };

  const handleOnReset = () => {
    reset();
  };

  const handleClose = () => {
    nav("/items/list", {
      preventScrollReset: false,
    });
  };

  if (!currentItem) {
    return (
      <DialogLayout open={ true } onClose={ handleClose } title="Edit Item" maxWidth="xs">
        <DialogContent>
          <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
            <Typography variant="h6">
              Item not found!
            </Typography>
            <Divider />
            <DialogActions sx={ { width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center'} }>
              <Button onClick={ handleClose }>
                Close
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </DialogLayout>
    );
  }

  return (
    <>
      <DialogLayout open={ true } onClose={ handleClose } title="Edit Item" maxWidth="xs">
        <Form method="post" onSubmit={ handleSubmit(handleFormSubmit) } >
          <DialogContent>
            <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
              <Typography variant="h6">
                Edit:
              </Typography>
              <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="100%">
                <HFTextField name="name" label="Name" control={ control } variant="standard" type="text" helperText=" name" fullWidth />
                <HFTextField name="price" label="Price" control={ control } type="number" variant="standard" helperText="Price" fullWidth />
                <DialogActions sx={ { width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center'} }>
                  <Button type="submit" disabled={ transition.state === "submitting" || transition.state === "loading" } name="intent" value="update">
                    { transition.state === "submitting"? "Updating..." : "Update"   }
                  </Button>
                  <Button type="reset" onClick={ handleOnReset }>
                    Reset
                  </Button>
                </DialogActions>
              </Stack>
            </Stack>
          </DialogContent>
        </Form>
      </DialogLayout>
    </>
  );
}

export default ItemsEdit;