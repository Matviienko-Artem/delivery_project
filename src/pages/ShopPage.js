import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import ShopList from "../components/ShopList";
import MenuList from "../components/MenuList";
import { getAllShops } from "../actions/getAllShops";

function ShopPage() {
  const [currentShop, setCurrentShop] = useState("");
  const [shops, setShops] = useState([]);

  const changeCurrent = (name) => {
    setCurrentShop(name);
  };

  useEffect(() => {
    async function fetchAllShops() {
      const fetchShops = await getAllShops();
      setShops(fetchShops);
      setCurrentShop(fetchShops[0]);
    }

    fetchAllShops();
  }, []);

  return (
    <Grid container sx={{ flexDirection: { xs: "column", sm: "row" } }}>
      <Grid item xs={12} md={2} sx={{ pr: { md: "10px" }, pb: { xs: "10px", md: "0" } }}>
        <ShopList shops={shops} current={currentShop} changeCurrent={changeCurrent} />
      </Grid>
      <Grid item xs={12} md={10}>
        <MenuList shops={shops} current={currentShop} />
      </Grid>
    </Grid>
  );
}

export default ShopPage;
