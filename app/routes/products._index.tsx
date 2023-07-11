import { Stack, Typography } from "@mui/material";
import { Link } from "@remix-run/react";

function ProductsIndex() {

  return (
    <Stack direction="row" justifyContent="start" alignItems="center">
      <Typography variant="body2">
        You can <Link to={ './add-new' }> add </Link> new products, or view other products.
      </Typography>
      
    </Stack>
  );
}

export default ProductsIndex;