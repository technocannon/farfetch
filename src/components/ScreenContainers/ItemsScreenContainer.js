import React from "react";
import { Container, Content, View, Icon, Text, Button } from "native-base";
import ItemsCardComp from "./../Cards/ItemsCardComp";

export default class ItemsScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      address: "",
      returnData: [],

      counting: ""
    };
  }
  getNumberCount() {
    count = 0;
    this.state.data1.forEach(element => {
      if (
        element.category == this.props.saleType &&
        element.sub_category == this.props.title
      ) {
        count++;
      }
    });
    return count;
  }
  getData() {
    if (this.props.saleType && this.props.title) {
      this.state.data1.forEach(element => {
        if (
          element.category == this.props.saleType &&
          element.sub_category == this.props.title
        ) {
          this.state.returnData.push(element);
        }
      });
    } else {
      this.state.data1.forEach(element => {
        this.state.returnData.push(element);
      });
    }
  }
  test() {
    if (this.props.saleType == undefined) {
      if (this.props.sectionName == "Women") {
        this.state.address =
          "http://estore.nfasoft.com/api/products.php?gender=women";
      } else if (this.props.sectionName == "Men") {
        this.state.address =
          "http://estore.nfasoft.com/api/products.php?gender=men";
      } else if (this.props.sectionName == "Kids") {
        this.state.address =
          "http://estore.nfasoft.com/api/products.php?gender=kids";
      }
    } else {
      if (this.props.activeTabNum == 1) {
        this.state.address =
          "http://estore.nfasoft.com/api/products.php?gender=women";
      } else if (this.props.activeTabNum == 2) {
        this.state.address =
          "http://estore.nfasoft.com/api/products.php?gender=men";
      } else if (this.props.activeTabNum == 3) {
        this.state.address =
          "http://estore.nfasoft.com/api/products.php?gender=kids";
      }
    }
  }
  componentDidMount() {
    this.test();
    fetch(this.state.address)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data1: responseJson.response.data
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    //alert(this.state.data1);
    if (this.state.loading == false) {
      this.state.counting = <Text>{this.getNumberCount()}</Text>;
    }
    this.getData();
    // alert(this.props.activeTabNum);
    return (
      <Container>
        <Content style={{ backgroundColor: "#eee" }}>
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff"
            }}
          >
            <View style={{ flex: 1 }}>
              <Text>{this.state.counting}</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "flex-end"
              }}
            >
              <View>
                <Button
                  style={{
                    flexDirection: "row",
                    borderWidth: 0.5,
                    borderRadius: 5,
                    borderColor: "#aaa",
                    paddingLeft: 10,
                    paddingRight: 10,
                    shadowOffset: { height: 0, width: 0 },
                    shadowOpacity: 0,
                    elevation: 0,
                    backgroundColor: "transparent"
                  }}
                >
                  <View>
                    <Icon
                      name="filter-list"
                      type="MaterialIcons"
                      style={{ color: "#000" }}
                    />
                  </View>
                  <View>
                    <Text>Refine</Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              padding: 15
            }}
          >
            <Text style={{ color: "#BFAC88", fontWeight: "bold" }}>
              Free Returns
            </Text>
          </View>

          {this.state.returnData.map((productCard, i) => {
            return (
              <View style={{ flexDirection: "row", width: "100%" }}>
                <ItemsCardComp
                  product_id={productCard.id}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/" + productCard.image
                  }}
                  storeType="New Season"
                  productName={productCard.product_name}
                  description={productCard.short_description}
                  price={productCard.actual_price}
                />
                <ItemsCardComp
                  product_id={productCard.id}
                  imageSource={{
                    uri: "http://estore.nfasoft.com/images/" + productCard.image
                  }}
                  storeType="New Season"
                  productName={productCard.product_name}
                  description={productCard.short_description}
                  price={productCard.actual_price}
                />
              </View>
            );
          })}
        </Content>
      </Container>
    );
  }
}
