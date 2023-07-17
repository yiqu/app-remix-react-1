import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, Stack } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Item } from '../models/item.model';
import { Form, Link } from "@remix-run/react";
import { ClientOnly } from "remix-utils";
import DateDisplay from "~/client-components/DateDisplay.client";
import { ellipsis, ellipsisBlock } from "~/shared/css.utils";

export interface ItemProp {
  item: Item;
  onAction: (actionId: 'edit' | 'delete') => void;
}

function Item({ item, onAction }: ItemProp) {
  
  const handleActionClick = (action: 'edit' | 'delete') => () => {
    onAction(action);
  };

  return (
    <ListItem
      dense
      sx={ { pr: '100px' } }
      secondaryAction={
        <Stack direction="row" justifyContent="end" alignItems="center">
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleActionClick('edit') }>
            <EditIcon />
          </IconButton>
          <Form method="delete" action={ `/items/${item.id}` }>
            <IconButton edge="end" aria-label="delete" size="small" type="submit" name="intent" value="delete">
              <DeleteIcon />
            </IconButton>
          </Form>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <InventoryIcon fontSize="small" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primaryTypographyProps={ {...ellipsis} }
        primary={ <span style={ {...ellipsisBlock} }> <Link to={ `/items/${item.id}` } >{item.name} - ${item.price}</Link> </span>  }
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