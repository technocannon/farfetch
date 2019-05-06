import React, { Component } from "react";
import {
  Container,
  Content,
  Tabs,
  Tab,
  View,
  Text,
  Icon,
  Button
} from "native-base";
import { ImageBackground, StyleSheet } from "react-native";
import SignIn from "./../RegisterTabs/Signin";
import CreateAccount from "./../RegisterTabs/CreateAccount";
import { Actions } from "react-native-router-flux";

class RegisterScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const backImg = require("./../../Resources/Images/7.jpg");
    return (
      <ImageBackground
        source={backImg}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ width: "100%", paddingTop: 20, paddingLeft: 10 }}>
          <View>
            <Button
              style={styles.arrowBtn}
              onPress={() => {
                Actions.homeScreen();
              }}
            >
              <Icon name="arrowleft" type="AntDesign" />
            </Button>
          </View>
        </View>

        <Content
          contentContainerStyle={{
            flex: 1,
            padding: 30,
            paddingBottom: 10,
            paddingTop: 20
          }}
        >
          <View style={{ flex: 1 }}>
            <Tabs style={{ flex: 1 }}>
              <Tab heading="SIGN IN">
                <SignIn />
              </Tab>
              <Tab heading="CREATE ACCOUNT" page>
                <CreateAccount />
              </Tab>
            </Tabs>
          </View>
        </Content>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  arrowBtn: {
    backgroundColor: "transparent",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  }
});

export default RegisterScreenContainer;
