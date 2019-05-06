import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import ShopScreenContainer from "../components/ScreenContainers/ShopScreenContainer";
import HeaderComp from "../components/ContentContainerComp/HeaderComp";

const AccountScreen = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <HeaderComp title="Shop" hasTabs={true} />
        <ShopScreenContainer activeTab={1} />
        <FooterComp activeTabNum={2} />
      </Container>
    </StyleProvider>
  );
};

export default AccountScreen;
