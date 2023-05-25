import * as React from "react";
import { Image, StyleSheet, View } from "react-native";

const Loding = () => {
  return (
    <View style={styles.loding}>
      <Image
        style={styles.loadingicon}
        resizeMode="cover"
        source={require("../assets/loadingicon.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingicon: {
    position: "absolute",
    top: 380,
    left: 117,
    width: 197,
    height: 173,
  },
  loding: {
    borderRadius: 15,
    backgroundColor: "#000",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Loding;
