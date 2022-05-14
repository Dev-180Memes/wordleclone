import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import { colors } from "./src/constants";
import Game from './src/components/Game';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <Text style={styles.title}>DEVWORDS</Text>

      <Game />

      <Text style={styles.footer}>Made with 💛 by Developers for Developers</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "center",
  },
  title: {
    color: colors.lightgrey,
    fontSize: 32,
    fontWeight: "bold",
    paddingTop: 30,
    letterSpacing: 7,
  },
  footer: {
    color: colors.lightgrey,
    fontWeight: "bold",
    padding: 30,
  },
});
