import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 24,
  },
  
  form: {
    width: "100%",
    flexDirection: "row",
    bottom: 55,
  },

  input: {
    flex: 1,
    height: 56,
    fontWeight: "400",
    fontSize: 16,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    marginRight: 7,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 24,
    color: "#FFF",
    marginTop: 6,
  },

  containerViewCounts: {
    flexDirection: "row",
    marginBottom: 20,
  },

  countTasks: {
    color: "#4EA8DE",
    fontWeight: "700",
  },

  completedTask: {
    marginLeft: 150,
    color: "#8284FA",
    fontWeight: "700",
  },

  numberCreate: {
    color: "#D9D9D9",
    backgroundColor: "#333333",
    width: 25,
    height: 20,
    marginLeft: 8,  
    borderRadius: 10,
    textAlign: "center",
    overflow: "hidden"  
  },
  
  numberCompleted: {
    backgroundColor: "#333333",
    width: 25,
    height: 20,
    textAlign: "center",
    color: "#D9D9D9",
    marginLeft: 8,
    borderRadius: 10,
    overflow: "hidden"  

  },

  containerNoTasks: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333333",
  },

  listEmptyText: {
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
    color: "#808080",
    marginTop: 15,
  },
  listEmptyText2: {
    fontWeight: "400",
    fontSize: 14,
    textAlign: "center",
    color: "#808080",
  },

  img: {
    marginTop: 40,
  },
});
