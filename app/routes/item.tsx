import Edit from "@mui/icons-material/Edit";
import Delete from "@mui/icons-material/Delete";
import { Button, Stack } from "@mui/material";
import { Link, Outlet, isRouteErrorResponse, useFetcher, useMatches, useParams, useRouteError } from "@remix-run/react";

function Item() {

  const deleteFetcher = useFetcher();
  const { itemId } = useParams();
  
  const handleDelete = () => {
    const proceed = confirm(`Are you sure you want to delete this item?`);
    if (!proceed) return;
    
    deleteFetcher.submit({ id: itemId ?? '' }, {
      method: 'delete',
      action: `/?index`
    });
  };

  if (!itemId) return <div>No ID provided.</div>;

  return (
    <Stack direction="column" justifyContent="start" alignItems="center" spacing={ 3 }>
      <Stack direction="row" justifyContent="start" alignItems="center" width="100%" sx={ {bgcolor: '#ebeec6'} }>
        <Link to={ `./${itemId}/edit` } replace={ true }>
          <Button startIcon={ <Edit /> }>
            Edit
          </Button>
        </Link>
        <Button startIcon={ <Delete /> } onClick={ handleDelete } name="intent" value="delete">
          Delete
        </Button>
      </Stack>

      <Stack direction="column" justifyContent="start" alignItems="center">
        <Outlet />
      </Stack>
    </Stack>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops</h1>
        <p>Status: {error.status} - {error.statusText}</p>
        <p>{error.data.message}</p>
        <Link to={ '/' }>Back to Home</Link>
      </div>
    );
  }
  
  return (
    <Stack>
      Error occured!
    </Stack>
  );
}

export default Item;