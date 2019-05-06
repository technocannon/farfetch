import React, { Component } from "react";
import {
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Icon,
  Button
} from "native-base";
import WishlistCardComp from "./../Cards/WishlistCardComp";
import { Actions } from "react-native-router-flux";
import {
  TouchableOpacity,
  TouchableNativeFeedback
} from "react-native-gesture-handler";
class AccountScreenContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };

    if (global.id == undefined) {
      this.state.isLoggedIn = false;
    }
  }
  componentDidMount() {}

  checkAuthuntication() {
    global.id = undefined;
    global.token = undefined;
    this.setState({
      isLoggedIn: false
    });
  }
  render() {
    myAccountLogged = (
      <View>
        <ListItem itemDivider>
          <Text style={{ fontWeight: "bold" }}>My Account</Text>
        </ListItem>
        <ListItem>
          <Text>Orders & returns</Text>
        </ListItem>
        <ListItem>
          <Text>Details & password</Text>
        </ListItem>
        <ListItem>
          <Text>Address book</Text>
        </ListItem>
      </View>
    );
    myAccountNotLogged = (
      <ListItem
        onPress={() => {
          Actions.registerScreen();
        }}
        itemDivider
      >
        <View
          style={{ flexDirection: "row", padding: 15, backgroundColor: "#fff" }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View>
              <Icon name="user" type="FontAwesome5" style={{ fontSize: 35 }} />
            </View>
          </View>
          <View style={{ flex: 4, flexDirection: "column" }}>
            <View>
              <Text style={{ fontWeight: "bold" }}>
                SIGN IN OR CREATE ACCOUNT
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }} note>
                Access your bag & Wishlist on any of your devices
              </Text>
            </View>
          </View>
        </View>
      </ListItem>
    );

    return (
      <Container>
        <Content>
          <List>
            {this.state.isLoggedIn ? myAccountLogged : myAccountNotLogged}
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>My Location</Text>
            </ListItem>
            <ListItem>
              <Text>Pakistan (USD $)</Text>
            </ListItem>
            <ListItem itemDivider style={{ flexDirection: "column" }}>
              <Text note style={{ fontSize: 12 }}>
                Your chosen location defines your language and shopping currency
              </Text>
              <View style={{ alignSelf: "flex-start" }}>
                <Text style={{ fontWeight: "bold" }}>My Shop Preferences</Text>
              </View>
            </ListItem>
            <ListItem>
              <Text>Men</Text>
            </ListItem>
            <ListItem>
              <Text>Women</Text>
            </ListItem>
            <ListItem itemDivider style={{ flexDirection: "column" }}>
              <Text note style={{ fontSize: 12 }}>
                This will tailor your app experience , showing you the type of
                products most suited to you
              </Text>
              <View style={{ alignSelf: "flex-start" }}>
                <Text style={{ fontWeight: "bold" }}>My Settings</Text>
              </View>
            </ListItem>
            <ListItem>
              <Text>Notifications & email</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Support</Text>
            </ListItem>
            <ListItem>
              <Text>About Farfetch</Text>
            </ListItem>
            <ListItem>
              <Text>Terms & conditions</Text>
            </ListItem>
            <ListItem>
              <Text>Privacy Policy</Text>
            </ListItem>
            <ListItem>
              <Text>FAQ's & guides</Text>
            </ListItem>
            <ListItem>
              <Text>Boutique partners</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Contact Us</Text>
            </ListItem>
            <View style={{ width: "100%", padding: 10 }}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="phone"
                    type="FontAwesome"
                    style={{ color: "#000" }}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Icon
                    name="email"
                    type="MaterialIcons"
                    style={{ color: "#000" }}
                  />
                </View>
              </View>
            </View>
            <ListItem itemDivider style={{ flexDirection: "column" }}>
              <Text note style={{ fontSize: 12 }}>
                Available Monday to Friday 81m - 11pm EST and Saturday to Sunday
                9am - 9pm EST.
              </Text>
              {this.state.isLoggedIn ? (
                <Button
                  style={{
                    alignItems: "center",
                    backgroundColor: "#fff",
                    width: "100%",
                    padding: 10,
                    marginTop: 10,
                    elevation: 0,
                    justifyContent: "center"
                  }}
                  onPress={() => {
                    this.checkAuthuntication();
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>SIGN OUT</Text>
                </Button>
              ) : null}
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default AccountScreenContainer;
