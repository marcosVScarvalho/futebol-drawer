import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1981, 2019, 2022]
  },
  {
    nome: "Copa do Brasil",
    anos: [1990, 2006, 2013, 2022, 2024]
  },
  {
    nome: "Supercopa do Brasil",
    anos: [2020, 2021, 2025]
  }
];

const TitulosScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <Card style={styles.card} elevation={4}>
            <Card.Content>
              <Title>{item.nome}</Title>
              <Paragraph>Anos: {item.anos.join(', ')}</Paragraph>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export default TitulosScreen;