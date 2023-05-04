import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 70,

  },

  name: {
    flex: 1,  
  },
  
  button: {
  },

  trashButton: {    
    width: 40,
    height: 40,
    marginRight: 10,

  },
  checkbox:{
    margin: 10,
    borderRadius: 10,  
    borderColor: '#4EA8DE', 
  },
});
