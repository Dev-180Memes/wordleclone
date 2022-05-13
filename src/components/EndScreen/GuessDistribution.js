import GuessDistributionLine from "./GuessDistributionLine";
import { styles } from "./EndScreen.styles";

export const GuessDistribution = ({ distribution }) => {
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
}