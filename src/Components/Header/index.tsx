import { View, Text, Image } from "react-native";
import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../../assets/rocket.png")} />
      <Text style={styles.eventName}>to</Text>
      <Text style={styles.eventName2}>do</Text>
    </View>
  );
}
