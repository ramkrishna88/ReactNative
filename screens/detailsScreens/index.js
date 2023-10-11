import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {NYCSchools} from '../../Api/api';

const DetailsScreen = () => {
  const [schoolData, setSchoolData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    NYCSchools.getNycSchools()
      .then(data => {
        console.log('data', data);
        setSchoolData(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
        Alert.alert('Error', 'Unable to load NYC Schools data', [{text: 'OK'}]);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        ) : (
          schoolData.map((item, index) => (
            <Card key={index} style={styles.card}>
              <Card.Content>
                <Title style={styles.title}>{item.school_name}</Title>
                <Paragraph style={styles.boldItalic}>
                  Overview: {item.overview_paragraph}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Location: {item.location}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Phone Number: {item.phone_number}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Website: {item.website}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Subway: {item.subway}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>Bus: {item.bus}</Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Extracurricular Activities: {item.extracurricular_activities}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  School Sports: {item.school_sports}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Attendance Rate: {item.attendance_rate}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Safety Percentage: {item.pct_stu_safe}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Accessibility Description:{' '}
                  {item.school_accessibility_description}
                </Paragraph>
                <Paragraph style={styles.boldItalic}>
                  Directions: {item.directions1}
                </Paragraph>
              </Card.Content>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  boldItalic: {
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});

export default DetailsScreen;
