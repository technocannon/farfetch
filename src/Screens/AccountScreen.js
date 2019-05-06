import React from "react";
import { Container, StyleProvider } from "native-base";
import getTheme from "../../native-base-theme/components";
import material from "../../native-base-theme/variables/material";
import FooterComp from "../components/ContentContainerComp/FooterComp";
import AccountScreenContainer from "../components/ScreenContainers/AccountScreenContainer";
import HeaderComp from "./../components/ContentContainerComp/HeaderComp";
const AccountScreen = () => {
  return (
    <StyleProvider style={getTheme(material)}>
      <Container>
        <HeaderComp title="Account" />
        <AccountScreenContainer />
        <FooterComp activeTabNum={5} />
      </Container>
    </StyleProvider>
  );
};

export default AccountScreen;
