import { Button, DialogActions, DialogContent, Divider, Stack, Typography } from "@mui/material";
import { Form, useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import DialogLayout from "~/components/DialogLayout";
import HFTextField from "~/shared/hook-forms/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "~/constants/schemas";
import { useForm } from "react-hook-form";
import type { Product } from "~/models/products.model";

const initValue: Product = {
  name: "Cool item",
  id: "1",
  price: 5,
};

function ItemsAdd() {
  const nav = useNavigate();

  const submit = useSubmit();
  const transition = useNavigation();
  const {  handleSubmit, control, reset } = useForm<Product>({
    defaultValues: initValue,
    resolver: yupResolver(productSchema),
    //mode: "onChange"
  });

  const handleFormSubmit = (product: Product, event: any)=> {
    submit(product as any, {
      action: '/items1',
      method: 'post', 
    });
  };

  const handleOnReset = () => {
    reset();
  };

  const handleClose = () => {
    nav("/items");
  };

  return (
    <>
      <DialogLayout open={ true } onClose={ handleClose } title="Add New Item">
        <Form method="post" onSubmit={ handleSubmit(handleFormSubmit) }>
          <DialogContent>
            <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
              <Typography variant="h6">
                Add a new Item:
              </Typography>
              <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="12rem">

              
                <HFTextField name="name" label="Name" control={ control } variant="standard" type="text" helperText=" name" fullWidth />
                <HFTextField name="id" label="ID" control={ control } type="text" variant="standard" helperText=" ID" fullWidth />
                <HFTextField name="price" label="Price" control={ control } type="number" variant="standard" helperText="Price" fullWidth />
                <Divider variant="fullWidth" flexItem sx={ {my: 3} } /> 
                <DialogActions>
                  <Button type="submit" disabled={ transition.state === "submitting" || transition.state === "loading" }>
                    { transition.state === "submitting"? "Creating..." : "Create" }
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

export default ItemsAdd;