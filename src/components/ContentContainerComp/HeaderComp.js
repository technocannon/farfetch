import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Item,
  Input
} from "native-base";
import React from "react";
import StatusBarManger from "./StatusBarManager";

const HeaderComp = props => {
  return (
    <Header
      hasTabs={props.hasTabs}
      style={{
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 0,
        elevation: 0
      }}
    >
      <StatusBarManger />

      <Body>
        <Title>{props.title}</Title>
      </Body>

      <Right>
        <Button transparent>
          <Icon name="cart" style={{ color: "black" }} />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderComp;
