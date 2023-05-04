import { TouchableOpacity, View, Text, Image } from "react-native";
import { styles } from "./styles";
import { useContext, useState } from "react";
import Checkbox from "expo-checkbox";
import { AppContext } from "../../Context/AppContext";

type Props = {
  task: string;
  onRemove: () => void;
};

export function List({ task, onRemove }: Props) {
  const [isChecked, setChecked] = useState(false);

  const { completedTasksCount, setCompletedTasksCount } = useContext(AppContext)

  function handleTaskCompletion(isChecked: boolean) {
    setChecked(isChecked);

    if (isChecked) {
      setCompletedTasksCount(completedTasksCount + 1) ;
    } else {     
      setCompletedTasksCount(completedTasksCount - 1) ;
    }
    
  }
  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={(newValue) => handleTaskCompletion(newValue)}        
        color={isChecked ? '#5E60CE': undefined}
        />
      <Text style={{textDecorationLine: isChecked ? 'line-through' : 'none', flex: 1, color: '#F2F2F2'}}> {task} </Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image
          style={styles.trashButton}
          source={require("../../../assets/trash.png")}
          />
      </TouchableOpacity>
    </View>
  );
}
