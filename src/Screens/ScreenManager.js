import React from "react";
import { Scene, Router } from "react-native-router-flux";
import HomeScreen from "./HomeScreen";
import ShopNowScreen from "./ShopNowScreen";
import AccountScreen from "./AccountScreen";
import DesignerScreen from "./DesignerScreen";
import ShopScreen from "./ShopScreen";
import WishlistScreen from "./WishlistScreen";
import ProductDetail from "./ProductDetail";
import RegisterScreen from "./RegisterScreen";
import ItemsScreen from "./ItemsScreen";
const ScreenManager = () => {
  return (
    <Router>
      <Scene key={"root"}>
        <Scene
          key={"homeScreen"}
          component={HomeScreen}
          hideNavBar={true}
          initial
        />
        <Scene key={"shopNowScreen"} component={ShopNowScreen} />
        <Scene
          key={"accountScreen"}
          component={AccountScreen}
          hideNavBar={true}
        />
        <Scene
          key={"designerScreen"}
          component={DesignerScreen}
          hideNavBar={true}
        />
        <Scene key={"shopScreen"} component={ShopScreen} hideNavBar={true} />
        <Scene
          key={"wishlistScreen"}
          component={WishlistScreen}
          hideNavBar={true}
        />
        <Scene key={"productDetail"} component={ProductDetail} />
        <Scene
          key={"registerScreen"}
          component={RegisterScreen}
          hideNavBar={true}
        />
        <Scene key={"itemsScreen"} component={ItemsScreen} hideNavBar={true} />
      </Scene>
    </Router>
  );
};

export default ScreenManager;
