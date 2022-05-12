import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../constants';

const Number = ({number, label}) => (
    <View style={{alignItems: "center", margin: 10}}>
        <Text style={{color: colors.lightgrey, fontSize: 30, fontWeight: "bold"}}>
            {number}
        </Text>
        <Text style={{color: colors.lightgrey, fontSize: 16, }}>{label}</Text>
    </View>
);

const GuessDistributionLine = ({ position, amount, percentage }) => {
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
                }}
            >
                <Text style={{color: colors.lightgrey}}>{amount}</Text>
            </View>
        </View>
    );
};

const GuessDistribution = () => {
    
}

const EndScreen = ({ won = false }) => {
  return (
    <View style={{ width: "100%", alignItems: "center"}}>
        <Text style={styles.title}>
            {won ? "Congrats!" : "Meh, try again tomorrow"}
        </Text>

        <Text style={styles.subtitle}>STATISTICS</Text>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
            <Number number={2} label={"Played"} />
            <Number number={2} label={"Win %"} />
            <Number number={2} label={"Cur Streak"} />
            <Number number={2} label={"Max Streak"} />
        </View>

        <Text style={styles.subtitle}>GUESS DISTRIBUTION</Text>
        <View style={{ width: "100%", padding: 20, justifyContent: "flex-start" }}>
            <GuessDistributionLine position={0} amount={2} percentage={50} />
        </View>
    </View>
  );
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

export default EndScreen