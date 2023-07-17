import { Button, DialogActions, DialogContent, Divider, Stack, Typography } from "@mui/material";
import type { RouteMatch} from "@remix-run/react";
import { Form, useActionData, useLocation, useMatches, useNavigate, useNavigation, useParams, useRouteLoaderData, useSubmit } from "@remix-run/react";
import DialogLayout from "~/components/DialogLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "~/constants/schemas";
import { useForm } from "react-hook-form";
import type { Product } from "~/models/products.model";
import type { Item, ItemToAdd } from "~/models/item.model";
import HFTextField from "~/shared/hook-forms/TextField";

function EditItem() {
  const params = useParams();
  //const item = useRouteLoaderData(`routes/item.$itemId`) as Item;  // <- can also get the current Item here
  const nav = useNavigate();
  const match = useMatches();
  const submit = useSubmit();
  const transition = useNavigation();

  const item: Item | null = match.find((route: RouteMatch) => {
    return route.id === 'routes/item.$itemId';
  })?.data;

  const {  handleSubmit, control, reset } = useForm<ItemToAdd>({
    defaultValues: {...(item ?? {})},
    resolver: yupResolver(productSchema),
    mode: "onChange"
  });

  const handleFormSubmit = (product: ItemToAdd, event: any)=> {
    submit({...product, intent: 'update'} as any, {
      action: '/item/item.$itemId',
      method: 'patch',
      replace: true,
    });
  };

  const handleOnReset = () => {
    reset();
  };

  const handleClose = () => {
    nav(`/item/${params.itemId}`, {replace: true});
  };

  if (!item) {
    return (
      <DialogLayout open={ true } onClose={ handleClose } title="Edit Item" maxWidth="xs">
        <DialogContent>
          <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
            <Typography variant="h6">
              Item { params.itemId } not found!
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

export default EditItem;