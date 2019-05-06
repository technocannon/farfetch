import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Item,
  Input,
  Left
} from "native-base";
import React from "react";
import StatusBarManger from "./StatusBarManager";
import { Actions } from "react-native-router-flux";

const ItemsHeaderComp = props => {
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
      <Left>
        <Button
          transparent
          onPress={() => {
            Actions.pop();
          }}
        >
          <Icon name="arrowleft" type="AntDesign" style={{ color: "black" }} />
        </Button>
      </Left>
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

export default ItemsHeaderComp;
