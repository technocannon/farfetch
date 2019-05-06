import React, { Component } from "react";
import { View } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import { StyleSheet } from "react-native";
export default class ClothingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    imgLink =
      "https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png";

    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={imgLink}
              catagoryName={"Coats"}
              activeTab={this.props.activeTab}
              saleType={"Clothing"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={imgLink}
              catagoryName={"Active wear"}
              activeTab={this.props.activeTab}
              saleType={"Clothing"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={imgLink}
              catagoryName={"Dresses"}
              activeTab={this.props.activeTab}
              saleType={"Clothing"}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={imgLink}
              catagoryName={"Jeans"}
              activeTab={this.props.activeTab}
              saleType={"Clothing"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={imgLink}
              catagoryName={"Pants"}
              activeTab={this.props.activeTab}
              saleType={"Clothing"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={imgLink}
              catagoryName={"T-Shirts"}
              activeTab={this.props.activeTab}
              saleType={"Clothing"}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    flexWrap: "wrap"
  },
  container: {
    flex: 1,
    flexDirection: "row"
  },
  compContainer: {
    flex: 1,
    padding: 5
  }
});
