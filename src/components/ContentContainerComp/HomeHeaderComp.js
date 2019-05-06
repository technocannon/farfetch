import {
  Body,
  Button,
  Header,
  Icon,
  Right,
  Title,
  Item,
  Input,
  View
} from "native-base";
import React from "react";
import StatusBarManger from "./StatusBarManager";
import { StyleSheet } from "react-native";

const HomeHeaderComp = () => {
  return (
    <Header style={{ height: 120 }} noShadow>
      <StatusBarManger />

      <View style={styles.headerMainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Title>Farfetch</Title>
          </View>

          <View style={styles.btnContainer}>
            <View>
              <Button style={styles.cartBtn} transparent>
                <Icon name="cart" style={{ color: "black" }} />
              </Button>
            </View>
          </View>
        </View>
        <View style={styles.searchBarContainer}>
          <Item style={styles.searchItem}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </View>
      </View>
    </Header>
  );
};

const styles = StyleSheet.create({
  headerMainContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 2
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row"
  },
  titleContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 5,
    paddingTop: 5
  },
  btnContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  cartBtn: {
    justifyContent: "flex-end"
  },
  searchBarContainer: {
    flex: 1
  },
  searchItem: {
    borderBottomColor: "transparent",
    backgroundColor: "#f5f5f5",
    paddingLeft: 10,
    borderRadius: 7,
    height: 45
  }
});

export default HomeHeaderComp;
