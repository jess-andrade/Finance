import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Jessica Andrade" />
      <Balance saldo="15.000,00" gastos="1.200,00" />
      <Text>Pagina HOME</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',

  },
});
