import { Box, Button, Divider, MenuItem, Stack, Typography } from "@mui/material";
import HFSelectField from "~/shared/hook-forms/Select";
import HFTextField from "~/shared/hook-forms/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { productSchema } from "~/constants/schemas";
import { redirect, type ActionArgs } from "@remix-run/node";
import { Form, useSubmit, useNavigation } from "@remix-run/react";


export interface Product {
  name: string;
  id: string;
  price: number;
}

const initValue: Product = {
  name: "Cool product",
  id: "1",
  price: 5,
};

let renderCount = 0;

function ProductsAdd() {
  const submit = useSubmit();
  const transition = useNavigation();
  const { handleSubmit, formState, control, watch, reset, setFocus, getValues } = useForm<Product>({
    defaultValues: initValue,
    resolver: yupResolver(productSchema),
    //mode: "onChange"
  });
  const [productId, setProductId] = useState<string>('');
  
  useEffect(() => {
    renderCount++;
  });

  const handleGetNewId = () => {
    setProductId(new Date().getTime().toString());
  };

  const handleFormSubmit = (payload: Product, a: any)=> {
    console.log(payload);
    submit(JSON.stringify(payload), {
      action: '/products/add-new',
      method: 'post', 
    });
  };

  const handleFormChange = (e: any) => {
    //submit(e.currentTarget, { replace: true });
  };


  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
      <Typography variant="h6">
        Add a new Product
      </Typography>
      <span>Render count: {renderCount}</span> { productId}
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="12rem">

        {/* reloadDocument will force this to use native submit */}
        <Form method="PUT" onSubmit={ handleSubmit(handleFormSubmit) } onChange={ handleFormChange }>
          {/* <input type="text" name="name" />
          <input type="text" name="id" />
          <input type="text" name="price" /> */}
          <HFTextField name="name" label="Name" control={ control } variant="standard" type="text" helperText=" name" fullWidth />
          <HFTextField name="id" label="ID" control={ control } type="text" variant="standard" helperText=" ID" fullWidth />
          <HFTextField name="price" label="Price" control={ control } type="number" variant="standard" helperText="Price" fullWidth />
          <Divider variant="fullWidth" flexItem sx={ {my: 3} } /> 
          <Button type="submit">
            {transition.state === "submitting"
              ? "Creating..."
              : "Create"}
          </Button>
          <Button type="reset">
            Reset
          </Button>
          <Button onClick={ handleGetNewId }>
            Get another ID
          </Button>
        </Form>
        
      </Stack>
    </Stack>

  );
}

export default ProductsAdd;

// this is not client code, only server usage. 
// Can not use fetch(), etc.
export async function action({ request, context, params }: ActionArgs) {
  const body = await request.formData();
  console.log("METHOD: ", request.method, Object.fromEntries(body));
  return null;
}
