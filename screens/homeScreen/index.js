import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    const headers = {
      'Content-Type': 'application/json',
      Authorization: 'Bearer YourAccessToken',
    };

    fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    })
      .then(response => response.json())
      .then(json => setData(json));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Home Screen</Text>
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
