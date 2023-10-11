import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {todosApi} from '../../Api/api';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    todosApi
      .getTodos()
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching data: ', error);
        Alert.alert('Error', 'Unable to load the Todo list', [{text: 'OK'}]);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      {data.map((item, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>UserID: {item.userId}</Paragraph>
            <Paragraph>ID: {item.id}</Paragraph>
            <Paragraph>Completed: {item.completed ? 'Yes' : 'No'}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    fontFamily: 'Helvetica',
    fontSize: 24,
    marginVertical: 16,
  },
});

export default HomeScreen;
