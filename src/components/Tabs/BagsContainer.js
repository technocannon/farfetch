import React, { Component } from "react";
import { View } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import { StyleSheet } from "react-native";
export default class BagsContainer extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Work bags"}
              activeTab={this.props.activeTab}
              saleType={"Bags"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Clutches"}
              activeTab={this.props.activeTab}
              saleType={"Bags"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Shoulder bags"}
              activeTab={this.props.activeTab}
              saleType={"Bags"}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Cases"}
              activeTab={this.props.activeTab}
              saleType={"Bags"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"Backpacks"}
              activeTab={this.props.activeTab}
              saleType={"Bags"}
            />
          </View>
          <View style={styles.compContainer}>
            <MiniCardComp
              imgSource={this.props.imgLink}
              catagoryName={"T-Shirts"}
              activeTab={this.props.activeTab}
              saleType={"Bags"}
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
