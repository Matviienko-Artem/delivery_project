import { Route, Routes } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/ShopPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />

      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Toolbar />

        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<ShopPage />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
