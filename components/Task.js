import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.items}>
      <View style={styles.itemleft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};
export default Task;

const styles = StyleSheet.create({
  items: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginBottom: 20,
  },
  itemleft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55bcf6",
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circle: {
    marginTop: 3,
    width: 15,
    height: 15,
    borderColor: "#55bcf6",
    borderWidth: 2,
    borderRadius: 7,
  },
});
