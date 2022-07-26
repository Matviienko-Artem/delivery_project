import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Button,
  Badge,
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";

const drawerWidth = 240;
const projectName = "Yours Delivery";

function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        {projectName}
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            selected={location.pathname === "/"}
            onClick={() => navigate(`/`)}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary={"Shops"} />
            <ListItemIcon sx={{ justifyContent: "right", minWidth: "0" }}>
              <StoreOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            selected={location.pathname === "/cart"}
            onClick={() => navigate(`/cart`)}
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            <Badge badgeContent={cart.length} sx={{ width: "100%" }} color="secondary">
              <ListItemText primary={"Cart"} />
              <ListItemIcon sx={{ alignItems: "center", justifyContent: "right", minWidth: "0" }}>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
            </Badge>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container = document.body;

  const activeStyle = {
    transition: "all 300ms ease",
    textDecoration: "none",
    border: "1px solid #fff",
    borderRadius: "10px",
  };

  const notActiveStyle = {
    border: "1px solid #1976d2",
    transition: "all 300ms ease",
    textDecoration: "none",
  };

  return (
    <>
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "right" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            {projectName}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <NavLink
              to="/"
              style={({ isActive }) =>
                isActive ? { ...activeStyle, marginRight: "10px" } : { ...notActiveStyle, marginRight: "10px" }
              }
            >
              <Button sx={{ color: "#fff" }} endIcon={<StoreOutlinedIcon />}>
                Shops
              </Button>
            </NavLink>
            <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}>
              <Badge badgeContent={cart.length} color="secondary">
                <Button sx={{ color: "#fff" }} endIcon={<ShoppingCartOutlinedIcon />}>
                  Cart
                </Button>
              </Badge>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default NavBar;
