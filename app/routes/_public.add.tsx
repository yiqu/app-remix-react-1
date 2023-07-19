import { Button, DialogActions, DialogContent, Divider, Stack, Typography } from "@mui/material";
import { Form, useActionData, useNavigate, useNavigation, useSubmit } from "@remix-run/react";
import DialogLayout from "~/components/DialogLayout";
import HFTextField from "~/shared/hook-forms/TextField";
import { yupResolver } from "@hookform/resolvers/yup";
import { productSchema } from "~/constants/schemas";
import { useForm } from "react-hook-form";
import type { Item, ItemToAdd } from "~/models/item.model";
import { faker } from '@faker-js/faker';
import type { ActionArgs} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { addItem } from "~/api/items.server";

const initValue: ItemToAdd = {
  name: faker.commerce.product(),
  price: faker.number.float({ min: 10, max: 1000, precision: 0.01 }),
};

function ItemsAdd() {
  const nav = useNavigate();

  const submit = useSubmit();
  const transition = useNavigation();
  const {  handleSubmit, control, reset } = useForm<ItemToAdd>({
    defaultValues: {
      name: faker.commerce.product(),
      price: faker.number.float({ min: 10, max: 1000, precision: 0.01 }),
    },
    resolver: yupResolver(productSchema),
    //mode: "onChange"
  });

  const handleFormSubmit = (product: ItemToAdd, event: any)=> {
    submit(product as any, {
      method: 'post', 
    });
  };

  const handleOnReset = () => {
    reset();
  };

  const handleClose = () => {
    nav("/");
  };

  return (
    <>
      <DialogLayout open={ true } onClose={ handleClose } title="Add New Item" maxWidth="xs">
        <Form method="post" onSubmit={ handleSubmit(handleFormSubmit) }>
          <DialogContent>
            <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
              <Typography variant="h6">
                What do you want to add? 
              </Typography>
              <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="100%">
                <HFTextField name="name" label="Name" control={ control } variant="standard" type="text" helperText=" name" fullWidth />
                <HFTextField name="price" label="Price" control={ control } type="number" variant="standard" helperText="Price" fullWidth />
                <DialogActions sx={ { width: '100%', display: 'flex', justifyContent: 'end', alignItems: 'center'} }>
                  <Button type="submit" disabled={ transition.state === "submitting" || transition.state === "loading" }>
                    { transition.state === "submitting"? "Creating..." : "Create"   }
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

export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();

  await addItem({
    name: body.get("name") as string,
    price: +(body.get("price") ?? -1), 
  });
  
  return redirect(`/`);
}