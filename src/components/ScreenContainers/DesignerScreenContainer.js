import React from "react";
import { Container, Content, Tab, Tabs } from "native-base";
import DesingerMenTab from "../Tabs/DesignerMenTab";
import DesignerWomenTab from "../Tabs/DesignerWomenTab";
import DesignerKidsTab from "../Tabs/DesignerKidsTab";

const DesignerScreenContainer = () => {
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
          <DesignerWomenTab />
        </Tab>

        <Tab heading={"MEN"}>
          <DesingerMenTab />
        </Tab>

        <Tab heading={"KIDS"}>
          <DesignerKidsTab />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default DesignerScreenContainer;
