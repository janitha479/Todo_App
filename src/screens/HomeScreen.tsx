import React, { useState, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Animated,
  Keyboard,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export default function HomeScreen() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const addTodo = () => {
    if (input.trim()) {
      setLoading(true);
      // Simulate network delay for feedback
      setTimeout(() => {
        setTodos([
          ...todos,
          {
            id: Math.random().toString(),
            text: input.trim(),
            completed: false,
            createdAt: new Date(),
          },
        ]);
        setInput("");
        setLoading(false);
        Keyboard.dismiss();
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }, 300);
    } else {
      Alert.alert("Cannot add empty todo", "Please enter some text");
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    Alert.alert("Delete Todo", "Are you sure you want to delete this item?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setLoading(true);
          setTimeout(() => {
            setTodos(todos.filter((todo) => todo.id !== id));
            setLoading(false);
          }, 300);
        },
      },
    ]);
  };

  const filteredTodos = () => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.completed);
      case "completed":
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  };

  const clearCompleted = () => {
    if (todos.some((todo) => todo.completed)) {
      Alert.alert("Clear Completed", "Remove all completed todos?", [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          style: "destructive",
          onPress: () => {
            setLoading(true);
            setTimeout(() => {
              setTodos(todos.filter((todo) => !todo.completed));
              setLoading(false);
            }, 300);
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={styles.title}>My Tasks</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="What needs to be done?"
          placeholderTextColor="#a0a0a0"
          returnKeyType="done"
          onSubmitEditing={addTodo}
          blurOnSubmit={false}
        />
        <TouchableOpacity
          style={[
            styles.addButton,
            input.trim() === "" && styles.disabledButton,
          ]}
          onPress={addTodo}
          disabled={input.trim() === "" || loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Ionicons name="add" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          onPress={() => setFilter("all")}
          style={[styles.filterButton, filter === "all" && styles.activeFilter]}
        >
          <Text
            style={[
              styles.filterText,
              filter === "all" && styles.activeFilterText,
            ]}
          >
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("active")}
          style={[
            styles.filterButton,
            filter === "active" && styles.activeFilter,
          ]}
        >
          <Text
            style={[
              styles.filterText,
              filter === "active" && styles.activeFilterText,
            ]}
          >
            Active
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilter("completed")}
          style={[
            styles.filterButton,
            filter === "completed" && styles.activeFilter,
          ]}
        >
          <Text
            style={[
              styles.filterText,
              filter === "completed" && styles.activeFilterText,
            ]}
          >
            Completed
          </Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#4a90e2" />
        </View>
      ) : filteredTodos().length === 0 ? (
        <View style={styles.emptyState}>
          <Ionicons name="list-outline" size={60} color="#e0e0e0" />
          <Text style={styles.emptyStateText}>
            No tasks {filter !== "all" ? `(${filter})` : ""}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredTodos()}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <Animated.View style={{ opacity: fadeAnim }}>
              <TouchableOpacity
                style={styles.todoItem}
                onPress={() => toggleTodo(item.id)}
                activeOpacity={0.7}
              >
                <View style={styles.todoLeftSection}>
                  <TouchableOpacity
                    onPress={() => toggleTodo(item.id)}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  >
                    <View
                      style={[
                        styles.checkbox,
                        item.completed && styles.checkedBox,
                      ]}
                    >
                      {item.completed && (
                        <Ionicons name="checkmark" size={16} color="white" />
                      )}
                    </View>
                  </TouchableOpacity>
                  <Text
                    style={[
                      styles.todoText,
                      item.completed && styles.completed,
                    ]}
                  >
                    {item.text}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => deleteTodo(item.id)}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                  style={styles.deleteButton}
                >
                  <Ionicons name="trash-outline" size={20} color="#ff6b6b" />
                </TouchableOpacity>
              </TouchableOpacity>
            </Animated.View>
          )}
        />
      )}

      {todos.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.counter}>
            {todos.filter((todo) => !todo.completed).length} items left
          </Text>
          {todos.some((todo) => todo.completed) && (
            <TouchableOpacity
              onPress={clearCompleted}
              style={styles.clearButton}
            >
              <Text style={styles.clearButtonText}>Clear completed</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#2c3e50",
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "white",
    fontSize: 16,
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginLeft: 10,
  },
  disabledButton: {
    backgroundColor: "#a0a0a0",
  },
  filterContainer: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    overflow: "hidden",
  },
  filterButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  filterText: {
    color: "#7f8c8d",
    fontWeight: "500",
  },
  activeFilter: {
    backgroundColor: "#f0f8ff",
  },
  activeFilterText: {
    color: "#4a90e2",
    fontWeight: "bold",
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginVertical: 8,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  todoLeftSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#4a90e2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  checkedBox: {
    backgroundColor: "#4a90e2",
    borderColor: "#4a90e2",
  },
  todoText: {
    fontSize: 16,
    color: "#2c3e50",
    flex: 1,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#95a5a6",
  },
  deleteButton: {
    padding: 5,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateText: {
    marginTop: 10,
    fontSize: 18,
    color: "#a0a0a0",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#eeeeee",
  },
  counter: {
    color: "#7f8c8d",
  },
  clearButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  clearButtonText: {
    color: "#e74c3c",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
