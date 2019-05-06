import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ImageSlider from "react-native-image-slider";
import {
  Button,
  Content,
  Accordion,
  Container,
  Icon,
  Footer,
  FooterTab,
  List,
  ListItem
} from "native-base";
import Modal from "react-native-modal";
import { StyleSheet } from "react-native";

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      size: "Select Size",
      fav: false,
      data1: [],
      loading: true
    };
  }

  componentDidMount() {
    this.getFav();
  }
  getFav() {
    fetch(
      "http://estore.nfasoft.com/api/product.php?id=" + this.props.product_id
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.product
        });
      })
      .catch(error => console.log(error));
  }
  AddFav() {
    fetch(
      "http://estore.nfasoft.com/api/addfavourite.php?user_id=" +
        global.id +
        "&product_id=" +
        this.props.product_id +
        "&token=" +
        global.token
    )
      .then(response => response.json())
      .then(resJson => {
        alert(resJson.response.message);
      })
      .catch(error => console.log(error));
  }
  render() {
    const dataArray = [
      { title: "Description", content: this.state.data1.description },
      { title: "Size & Fit", content: this.state.data1.size },
      { title: "Composition & Care", content: "Lorem ipsum dolor sit amet" },
      {
        title: "Shipping & Free Return",
        content: this.state.data1.shipping
      },
      {
        title: "Designer - Emporio Armani",
        content: "Lorem ipsum dolor sit amet"
      }
    ];

    return (
      <Container>
        <View>
          <View style={styles.closeBtnContainer}>
            <View>
              <Button
                style={styles.favBtn}
                onPress={() => {
                  this.setState({
                    fav: !this.state.fav
                  });
                  this.AddFav();
                }}
              >
                <Icon
                  style={{ color: this.state.fav ? "#000" : "#aaa" }}
                  name="star"
                  type="Entypo"
                />
              </Button>
            </View>
          </View>
        </View>
        <View style={{ height: "50%" }}>
          <ImageSlider
            autoPlayWithInterval={3000}
            images={[
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHhCZdybnd3gOKxYAkd-Me6YIOD81kXYTbyg40YdmBFph25d9"
            ]}
            style={{ backgroundColor: "#fff" }}
          />
        </View>

        <Content>
          <View style={{ padding: 10 }}>
            <View>
              <Text style={{ color: "#BFAC88" }}>New Season</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#000" }}>
                {this.state.data1.prod_name}
              </Text>

              <Text>${this.state.data1.actual_price}</Text>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>{this.state.data1.description}</Text>
            </View>
          </View>
          <View>
            <Button
              style={{
                backgroundColor: "white",
                alignSelf: "center",
                marginTop: 25,
                marginBottom: 20,
                padding: 20,
                elevation: 0,
                borderWidth: 0.3,
                borderColor: "#000"
              }}
              onPress={() => {
                this.setState({ isModalVisible: !this.state.isModalVisible });
              }}
            >
              <Text style={{ color: "black" }}>{this.state.size}</Text>
            </Button>
          </View>

          <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
            headerStyle={{ backgroundColor: "white" }}
            contentStyle={{ backgroundColor: "white" }}
          />

          <Text style={{ marginLeft: 14, textAlign: "center" }}>
            Contact US & Order By Phone
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Button
              style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center"
              }}
            >
              <Icon
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  color: "black"
                }}
                name="md-call"
              />
            </Button>
            <Button
              style={{
                flex: 1,
                backgroundColor: "white",
                justifyContent: "center"
              }}
            >
              <Icon
                style={{
                  justifyContent: "center",
                  alignSelf: "center",
                  color: "black"
                }}
                name="md-chatboxes"
              />
            </Button>
          </View>
          <View style={{ paddingTop: this.state.isModalVisible ? 100 : 0 }}>
            <Modal
              isVisible={this.state.isModalVisible}
              style={{
                backgroundColor: "#fff",
                borderRadius: 10,
                marginTop: "50%"
              }}
              onBackButtonPress={() => {
                this.setState({ isModalVisible: !this.state.isModalVisible });
              }}
            >
              <View
                style={{
                  flex: 1,
                  padding: 20,
                  paddingTop: 30
                }}
              >
                <View>
                  <Text>
                    Some sizes are only available at alternative Farfetch
                    partners, with a different price
                  </Text>
                </View>
                <View>
                  <List>
                    <ListItem>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({
                            size: this.state.data1.size,
                            isModalVisible: !this.state.isModalVisible
                          });
                        }}
                        style={{ flex: 1 }}
                      >
                        <View style={{ width: "100%" }}>
                          <Text>{this.state.data1.size}</Text>
                        </View>
                      </TouchableOpacity>
                    </ListItem>
                  </List>
                </View>
              </View>
            </Modal>
          </View>
        </Content>
        <Footer style={{ backgroundColor: "#fff" }}>
          <FooterTab style={{ backgroundColor: "#fff" }}>
            <View
              style={{
                width: "100%",
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 5,
                paddingBottom: 5
              }}
            >
              <Button block style={{ backgroundColor: "#22A7F0" }}>
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  ADD TO BAG
                </Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  closeBtnContainer: {
    width: "100%",
    alignItems: "flex-end"
  },
  favBtn: {
    backgroundColor: "transparent",
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0
  }
});
