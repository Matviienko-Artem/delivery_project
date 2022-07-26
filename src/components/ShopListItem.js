import { useSelector } from "react-redux";
import { ListItemButton, ListItemText } from "@mui/material";

function ShopListItem({ shop, current, changeCurrent }) {
  const cart = useSelector((state) => state.cart);

  return (
    <ListItemButton
      selected={shop.name === current.name}
      disabled={shop.name !== current.name && cart.length > 0}
      onClick={() => changeCurrent(shop)}
    >
      <ListItemText primary={shop.name} />
    </ListItemButton>
  );
}

export default ShopListItem;
