import React from "react";
import { Container, Content, Tabs, Tab } from "native-base";
import WomenTab from "../Tabs/WomenTab";
import MenTab from "../Tabs/MenTab";
import KidsTab from "../Tabs/KidsTab";

const ShopScreenContainer = props => {
  return (
    <Container>
      <Tabs
        tabContainerStyle={{
          shadowOffset: { height: 0, width: 0 },
          shadowOpacity: 0,
          elevation: 0
        }}
      >
        <Tab heading={"WOMEN"}>
          <WomenTab activeTab={props.activeTab} />
        </Tab>

        <Tab heading={"MEN"}>
          <MenTab activeTab={2} />
        </Tab>

        <Tab heading={"KIDS"}>
          <KidsTab activeTab={3} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default ShopScreenContainer;
