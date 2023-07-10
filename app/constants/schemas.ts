import * as yup from "yup";

export const productSchema = yup.object({
  id: yup.string().trim().required('ID is required'),
  name: yup.string().trim().required('Name is required').min(2, 'Name has to be at least 2 characters'),
  price: yup.number().required('Price is required').min(1),
});