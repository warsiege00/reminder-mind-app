import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";


export const Loader = () => {
    return(
        <ActivityIndicator size="large" color="#6200ee" style={styles.loader} />
    )
}

const styles = StyleSheet.create({
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });