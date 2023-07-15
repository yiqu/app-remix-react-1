import { ListItem, IconButton, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import InventoryIcon from '@mui/icons-material/Inventory';
import DeleteIcon from '@mui/icons-material/Delete';
import { Item } from '../models/item.model';
import { formatDistanceToNow } from "date-fns";
import { Link } from "@remix-run/react";

function Item({ item }: { item: Item }) {

  return (
    <ListItem
      dense
      secondaryAction={
        <IconButton edge="end" aria-label="delete" size="small">
          <DeleteIcon />
        </IconButton>
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
          { formatDistanceToNow(new Date(item.dateAdded).getTime(), {addSuffix: true}) }
        </> }
      />
    </ListItem>
  );
}


export default Item;