import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const EscudoScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card} elevation={4}>
        <Card.Cover
          style={styles.image}
          source={{
            uri: 'https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg',
          }}
        />
        <Card.Content>
          <Title>Flamengo</Title>
          <Paragraph>Fundado em 15 de novembro de 1895</Paragraph>
          <Paragraph>Estádio: Maracanã</Paragraph>
          <Paragraph>Mascote: Urubu</Paragraph>
          <Paragraph>Cores: Vermelho e Preto</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
});

export default EscudoScreen;