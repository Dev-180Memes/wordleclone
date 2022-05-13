import { colors } from "../../constants";

export const GuessDistributionLine = ({ position, amount, percentage }) => {
    return (
        <View 
            style={{ 
                flexDirection: "row", 
                alignItems: "center",
                width: "100%",
            }}
        >
            <Text style={{ color: colors.lightgrey }}>{position}</Text>
            <View 
                style={{ 
                    alignSelf: "stretch",
                    backgroundColor: colors.grey, 
                    margin: 5, 
                    padding: 5,
                    width: `${percentage}%`,
                    minwidth: 20,
                }}
            >
                <Text style={{color: colors.lightgrey}}>{amount}</Text>
            </View>
        </View>
    );
};