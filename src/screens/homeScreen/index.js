import React, {useEffect, useState} from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';
import {
  initializeSslPinning,
  addSslPinningErrorListener,
} from 'react-native-ssl-public-key-pinning';

const HomeScreen = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  useEffect(() => {
    // Initialize SSL pinning with the correct public key hash
    async function initializeSsl() {
      try {
        await initializeSslPinning({
          'RamLimited.com': {
            includeSubdomains: true,
            publicKeyHashes: [
              'NH/jU0PK765zaglECnPK+R70P/iScnj05yoTA/+UBrM=',
              'QKfE8rcYZKVwqijStZOoDqp9stoQC/pA9fqTKcaHJgM=',
            ],
            logKeys: true,
          },
        });
      } catch (error) {
        console.error('SSL pinning initialization error:', error);
      }
    }

    initializeSsl();

    // Subscribe to SSL pinning errors
    const subscription = addSslPinningErrorListener(error => {
      // Handle SSL pinning errors
      console.log('SSL pinning error:', error.serverHostname);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      if (response.ok) {
        const data = await response.json();
        setApiData(data);
        setApiError(null);
      } else {
        setApiData(null);
        setApiError(`API request failed: ${response.status}`);
      }
    } catch (error) {
      setApiData(null);
      setApiError(`API request error: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>This is the home screen</Text>
      <Button title="Fetch Data" onPress={fetchData} />
      {apiData && <Text>{JSON.stringify(apiData, null, 2)}</Text>}
      {apiError && <Text>{apiError}</Text>}
    </View>
  );
};

export default HomeScreen;
