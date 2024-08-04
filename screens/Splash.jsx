import { Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Splash() {
  return (
    <LinearGradient
      colors={["#636469", "#303135", "#303135"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Image
        source={require("../assets/icon-removebg.png")}
        style={{ width: 300, height: 270 }}
      />
    </LinearGradient>
  );
}
