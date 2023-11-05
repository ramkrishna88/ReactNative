import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator, RefreshControl} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import styles from './styles';

const FirebaseAssignmentScreen = () => {
  const [feeds, setFeeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [displayedIds, setDisplayedIds] = useState(new Set());
  const [refreshing, setRefreshing] = useState(false);

  // Default placeholder image URL
  const defaultImageURL = 'https://i.ytimg.com/vi/dET5Shsvrpo/sddefault.jpg';

  const loadFeeds = async () => {
    try {
      const query = firestore().collection('Feeds').orderBy('name');

      if (lastVisible) {
        query.startAfter(lastVisible);
      }

      const snapshot = await query.limit(10).get();
      const newFeeds = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Shuffle the new data
      const shuffledNewFeeds = newFeeds.sort(() => Math.random() - 0.5);

      // Check if image is null or empty and replace it with the default image
      shuffledNewFeeds.forEach(feed => {
        if (!feed.image) {
          feed.image = defaultImageURL;
        }
      });

      // Filter out items with duplicate IDs
      const filteredFeeds = shuffledNewFeeds.filter(
        feed => !displayedIds.has(feed.id),
      );

      // Add the IDs of new items to the set of displayed IDs
      filteredFeeds.forEach(feed => displayedIds.add(feed.id));

      setFeeds(prevFeeds => [...prevFeeds, ...filteredFeeds]);
      setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
      setIsLoading(false);
      setLoadingMore(false);
      setRefreshing(false); // Stop the pull-to-refresh loading indicator
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  useEffect(() => {
    loadFeeds();
  }, []);

  const renderCardItem = ({item}) => (
    <Card style={styles.card}>
      <Card.Cover source={{uri: item.image}} />
      <Card.Content>
        <Title>{item.name}</Title>
        <Paragraph>{item.description}</Paragraph>
        <Paragraph>Price: ${item.price}</Paragraph>
      </Card.Content>
    </Card>
  );

  const onEndReached = () => {
    if (!loadingMore) {
      setLoadingMore(true);
      loadFeeds();
    }
  };

  const onRefresh = () => {
    // You can refresh by calling loadFeeds here, which will append new data
    loadFeeds();
  };

  return (
    <View>
      <FlatList
        data={feeds}
        keyExtractor={item => item.id}
        renderItem={renderCardItem}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {isLoading && <ActivityIndicator size="large" />}
    </View>
  );
};

export default FirebaseAssignmentScreen;
