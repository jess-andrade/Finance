import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Header from '../../components/Header'
import Balance from '../../components/Balance'
import Movements from '../../components/Movements'

const list = [
  {
    id: 1,
    label: 'internet',
    value: '110,00',
    date: '17/03/2024',
    type: 0 //despesas
  },
  {
    id: 2,
    label: 'pix Cliente X',
    value: '2200,00',
    date: '13/03/2024',
    type: 1 //entradas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7200,00',
    date: '05/03/2024',
    type: 1 //entradas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Jessica Andrade" />
      <Balance saldo="15.000,00" gastos="1.200,00" />
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
    marginBottom: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
