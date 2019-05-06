import React from "react";
import { Container, Content, View } from "native-base";
import WishlistCardComp from "../Cards/WishlistCardComp";

export default class WishlistScreenContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: [],
      data2: [],
      address: "",
      returnData: [],
      counting: "",
      loading: true
    };
  }
  componentDidMount() {
    fetch(
      "http://estore.nfasoft.com/api/favourites.php?token=" +
        global.token +
        "&user_id=" +
        global.id
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          loading: false,
          data2: responseJson.response.favourites
        });
        this.getFav();
      })
      .catch(error => console.log(error));
  }
  getFav() {
    if (this.state.loading == false) {
      this.state.data2.forEach(element => {
        fetch("http://estore.nfasoft.com/api/product.php?id=" + element)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson);

            this.setState({
              loading: false,
              data1: responseJson.response.product
            });
            this.state.returnData.push(this.state.data1);
          })
          .catch(error => console.log(error));
      });
    }
  }

  render() {
    return (
      <Container>
        <Content>
          {this.state.returnData.map((productCard, i) => {
            return (
              <View style={{ flexDirection: "row", width: "100%" }}>
                <WishlistCardComp
                  product_id={productCard.id}
                  storeType="New Season"
                  productName={productCard.prod_name}
                  price={productCard.actual_price}
                />
                <WishlistCardComp
                  storeType="New Season"
                  productName={productCard.prod_name}
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
