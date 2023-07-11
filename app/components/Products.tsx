import { Box, Button, Divider, MenuItem, Stack, Typography } from "@mui/material";
import HFTextField from "~/shared/hook-forms/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { productSchema } from "~/constants/schemas";
import { LoaderArgs, redirect, type ActionArgs } from "@remix-run/node";
import { Form, useSubmit, useNavigation, useLoaderData } from "@remix-run/react";
import type { ProductFire } from "~/models/products.model";
import ProductList from "./ProductList";

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

export interface ProductsProps {
  actionUrl?: string;
}

function Products({ actionUrl = "/products" }: ProductsProps) {
  const submit = useSubmit();
  const transition = useNavigation();
  const {  handleSubmit, control, reset } = useForm<Product>({
    defaultValues: initValue,
    resolver: yupResolver(productSchema),
    //mode: "onChange"
  });

  const handleFormSubmit = (product: Product, event: any)=> {
    submit(product as any, {
      action: actionUrl,
      method: 'post', 
    });
  };

  const handleOnReset = () => {
    reset();
  };

  return (
    <Stack direction="column" justifyContent="start" alignItems="start" width="100%" spacing={ 3 }>
      <Typography variant="h6">
        Add a new Product
      </Typography>
      <span>Render count: {renderCount}</span>
      <Stack direction="column" justifyContent="start" alignItems="start" spacing={ 2 } width="12rem">

        <Form method="post" onSubmit={ handleSubmit(handleFormSubmit) }>
          <HFTextField name="name" label="Name" control={ control } variant="standard" type="text" helperText=" name" fullWidth />
          <HFTextField name="id" label="ID" control={ control } type="text" variant="standard" helperText=" ID" fullWidth />
          <HFTextField name="price" label="Price" control={ control } type="number" variant="standard" helperText="Price" fullWidth />
          <Divider variant="fullWidth" flexItem sx={ {my: 3} } /> 
          <Button type="submit" disabled={ transition.state === "submitting" || transition.state === "loading" }>
            { transition.state === "submitting"? "Creating..." : "Create" }
          </Button>
          <Button type="reset" onClick={ handleOnReset }>
            Reset
          </Button>
        </Form>
      </Stack>
      
      
    </Stack>
  );
}

export default Products;