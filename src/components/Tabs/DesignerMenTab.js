import React, { Component } from "react";
import { View, Text, Content } from "native-base";
import MiniCardComp from "../Cards/MiniCardComp";
import SwiperCardComp from "./SwiperCardsComp";
import { StyleSheet } from "react-native";

class DesignerMenTab extends Component {
  render() {
    imgLink =
      "https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140,2000%7C51g4BTlwJcL.png%7C0,0,2140,2000+0.0,0.0,2140.0,2000.0.png";

    return (
      <Content>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <SwiperCardComp />

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {" "}
            Popular Desingers
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <View style={styles.compContainer}>
              <MiniCardComp imgSource={imgLink} catagoryName={"T-Shirts"} />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp imgSource={imgLink} catagoryName={"T-Shirts"} />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp imgSource={imgLink} catagoryName={"T-Shirts"} />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.compContainer}>
              <MiniCardComp imgSource={imgLink} catagoryName={"T-Shirts"} />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp imgSource={imgLink} catagoryName={"T-Shirts"} />
            </View>
            <View style={styles.compContainer}>
              <MiniCardComp imgSource={imgLink} catagoryName={"T-Shirts"} />
            </View>
          </View>
        </View>
      </Content>
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

export default DesignerMenTab;
