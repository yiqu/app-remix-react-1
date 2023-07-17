import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, Stack } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Item } from '../models/item.model';
import { Form, Link, useFetcher } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import DateDisplay from "~/client-components/DateDisplay.client";
import { ellipsis, ellipsisBlock } from "~/shared/css.utils";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';


export interface ItemProp {
  item: Item;
  onAction: (actionId: 'edit' | 'delete') => void;
}

function Item({ item, onAction }: ItemProp) {

  const deleteFetcher = useFetcher(); // programmatically submit an action
  
  // Delete using a Fetcher. This will not redirect to the route that hosts the `action`.
  // otherwise it will redirect to the route that hosts the `action`, /items/id
  const handleActionClick = (action: 'edit' | 'delete') => () => {
    if (action === 'delete') {
      const proceed = confirm(`Are you sure you want to delete ${item.name}?`);

      if (!proceed) return;
      
      deleteFetcher.submit(null, {
        method: 'delete',
        action: `/items/${item.id}`
      });
    } 
    else if (action === 'edit') {
      onAction(action);
    }
  };

  const apiWorking = deleteFetcher.state === 'submitting' || deleteFetcher.state === 'loading';

  return (
    <ListItem
      dense
      sx={ { pr: '100px', opacity: apiWorking ? 0.5 : 1 } }
      secondaryAction={
        <Stack direction="row" justifyContent="end" alignItems="center">
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleActionClick('edit') }>
            <EditIcon />
          </IconButton>
          {/* <Form method="delete" action={ `/items/${item.id}` }>
            <IconButton edge="end" aria-label="delete" size="small" type="submit" name="intent" value="delete">
              <DeleteIcon />
            </IconButton>
          </Form> */}
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleActionClick('delete') }
            disabled={ apiWorking ? true : false }>
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <LocalGroceryStoreIcon fontSize="small" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={ {...ellipsis} }
        primary={ 
          <span style={ {...ellipsisBlock} }> 
            <Link to={ `/item/${item.id}` } >
              {item.name} - ${item.price}
            </Link>
            { apiWorking && ' (Deleting...)' }
          </span>  
        }
        secondary={ 
          <span style={ {...ellipsisBlock} }>
            Created: { 
              <ClientOnly fallback={ <>Loading...</> }>
                {() => <DateDisplay date={ item.dateAdded } />}
              </ClientOnly> }
            { (item.updatedAt && item.updatedAt !== item.dateAdded) && 
              <> 
                ( 
                updated: 
                <ClientOnly fallback={ <>Loading...</> }>
                  {() => <DateDisplay date={ item.updatedAt } />}
                </ClientOnly>  
                ) 
              </> }
          </span> 
        }
      />
    </ListItem>
  );
}


export default Item;