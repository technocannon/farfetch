import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import WishlistScreenContainer from "../components/ScreenContainers/WishlistScreenContainer";
import HeaderComp from "./../components/ContentContainerComp/HeaderComp";
const WishlistScreen = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <HeaderComp title="Wishlist" />
        <WishlistScreenContainer />
        <FooterComp activeTabNum={4} />
      </Container>
    </StyleProvider>
  );
};

export default WishlistScreen;
