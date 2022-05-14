import GuessDistributionLine from "./GuessDistributionLine";
import { StyleSheet } from "react-native";
import { colors } from "../../../constants";

const GuessDistribution = ({ distribution }) => {
    if (!distribution) {
        return null;
    }
    const sum = distribution.reduce((total, dist) => dist + total, 0);
    return (
        <>
            <Text style={styles.subtitle}>GUESS DISTRIBUTION</Text>
            <View style={{ width: "100%", padding: 20, justifyContent: "flex-start" }}>
                {distribution.map((dist, index) => (
                    <GuessDistributionLine 
                        key={index}
                        position={index + 1} 
                        amount={dist} 
                        percentage={(100 * dist) / sum} 
                    />
                ))}
            </View>
        </>
        
    )
};

const styles = StyleSheet.create({
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

export default GuessDistribution