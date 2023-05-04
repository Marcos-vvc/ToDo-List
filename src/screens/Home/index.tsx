import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { List } from "../../Components/List";
import { AppContext } from "../../Context/AppContext";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksText, setTasksText] = useState("");
  const [tasksCount, setTasksCount] = useState(0);
  const { completedTasksCount } = useContext(AppContext);

  function handleTasksAdd() {
    if (tasks.includes(tasksText)) {
      return Alert.alert(
        "Tarefa existente",
        "Já existe uma tarefa na lista com esse texto."
      );
    }
    setTasks((prevState) => [...prevState, tasksText]);
    setTasksCount((prevState) => prevState + 1);
    setTasksText("");
  }

  function handleTasksRemove(task: string) {
    return Alert.alert("Remover", `Remover o participante ${task}?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((taskN) => taskN !== task)),
            setTasksCount((prevState) => prevState - 1);
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          onChangeText={setTasksText}
          value={tasksText}
        />

        <TouchableOpacity style={styles.button} onPress={handleTasksAdd}>
          <Text style={styles.buttonText}>
            <Image source={require("../../../assets/plus.png")} />
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerViewCounts}>
        <Text style={styles.countTasks}>Criadas</Text>
        <Text style={styles.numberCreate}>{tasksCount}</Text>

        <Text style={styles.completedTask}>Concluídas</Text>
        <Text style={styles.numberCompleted}>{completedTasksCount}</Text>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <List
            key={item}
            task={item}
            onRemove={() => handleTasksRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.containerNoTasks}>
            <Image
              style={styles.img}
              source={require("../../../assets/Clipboard.png")}
            />
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyText2}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
    </View>
  );
}
