import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";
import { useState } from "react";

export default function App() {
  const [task,setTask]=useState()
  const [taskStore,setTaskStore]=useState([])
  const handleAddItem =()=>{
    if (task !== null) {
      setTaskStore([...taskStore, task]);
      setTask(null);
    }else{
      alert("input can't be empty")
    }
  }
  const handleDeleteItem=(inx)=>{
    let taskStorecopy =[...taskStore]
    taskStorecopy.splice(inx,1)
    setTaskStore(taskStorecopy)
  }

  return (
    <View style={styles.container}>
      {/* tasks */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.taskWrapper}>
          <Text style={styles.title}>Today's tasks</Text>
          <View style={styles.items}>
            {taskStore?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleDeleteItem(index)}
                >
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      {/* input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.wrapperInput}
      >
        <TextInput
          style={styles.inputText}
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => {
            setTask(text);
          }}
        />
        <TouchableOpacity onPress={() => handleAddItem()}>
          <View style={styles.adding}>
            <Text style={styles.addingBtn}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEAED",
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 10,
  },
  wrapperInput: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 20 : 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  inputText: {
    padding: 15,
    backgroundColor: "#fff",
    width: 300,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#c0c0c0",
  },
  adding: {
    alignItems: "center",
    justifyContent: "center",
    height: 55,
    width: 55,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#c0c0c0",
    backgroundColor: "#fff",
  },
  addingBtn: {
    fontSize: 35,
  },
});
