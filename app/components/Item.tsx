import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText, Stack } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Item } from '../models/item.model';
import { formatDistanceToNow } from "date-fns";
import { Link } from "@remix-run/react";

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
          <IconButton edge="end" aria-label="delete" size="small" onClick={ handleActionClick('delete') }>
            <DeleteIcon />
          </IconButton>
        </Stack>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <InventoryIcon fontSize="small" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={ <Link to={ `/items/${item.id}` } >{item.name} - ${item.price}</Link> }
        secondary={ <>
          Created: { item.dateAdded }
          { item.updatedAt && <> (updated: { item.updatedAt }) </> }
        </> }
      />
    </ListItem>
  );
}


export default Item;