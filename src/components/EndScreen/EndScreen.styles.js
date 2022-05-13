import { colors } from "../../constants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "white",
        textAlign: "center",
        marginVertical: 20,
    },
    subtitle: {
        fontSize: 20,
        color: colors.lightgrey,
        textAlign: "center",
        marginVertical: 15,
        fontWeight: "bold",
    },
});