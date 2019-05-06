import React, { Component } from "react";
import { View } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import { StyleSheet } from "react-native";
export default class ShoesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      saleType: "shoes"
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Flats"}
              activeTab={this.props.activeTab}
              saleType={"Shoes"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Heels"}
              activeTab={this.props.activeTab}
              saleType={"Shoes"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Sneakers"}
              activeTab={this.props.activeTab}
              saleType={"Shoes"}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Wedges"}
              activeTab={this.props.activeTab}
              saleType={"Shoes"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Boots"}
              activeTab={this.props.activeTab}
              saleType={"Shoes"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Shoes"}
              activeTab={this.props.activeTab}
              saleType={"Shoes"}
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
