import React, {useState} from 'react';
import {Text, TouchableOpacity, View, NativeModules} from 'react-native';
import styles from './styles';

const HomeScreen = () => {
  const [helloData, setHelloData] = useState(null);
  const [otherData, setOtherData] = useState(null);

  const handlePressHello = () => {
    NativeModules.RNHello.findEvents((error, result) => {
      if (error) {
        console.error(error);
      } else {
        setHelloData(result);
      }
    });
  };

  const handlePressOther = () => {
    NativeModules.RCOther.getData()
      .then(data => {
        setOtherData(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressHello}>
        <Text>Call RNHello Module</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handlePressOther}>
        <Text>Call RCOther Module</Text>
      </TouchableOpacity>

      {helloData && (
        <View style={styles.dataContainer}>
          <Text>Hello Data: {helloData}</Text>
        </View>
      )}

      {otherData && (
        <View style={styles.dataContainer}>
          <Text>Other Data:</Text>
          {otherData.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
