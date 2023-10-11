import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import {moviesApi} from '../../Api/api';

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = page => {
    moviesApi
      .getMovies(page)
      .then(data => {
        if (data.results) {
          console.log('data', data);
          setMovies([...movies, ...data.results]);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching Movies data: ', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setMovies([]);
    fetchMovies(1);
  }, []);

  const loadMoreMovies = () => {
    if (!isLoading) {
      const nextPage = movies.length / 20 + 1;
      setIsLoading(true);
      fetchMovies(nextPage);
    }
  };

  return (
    <ScrollView>
      {movies.map((movie, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Image
              style={styles.image}
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
              }}
            />
            <Title>{movie.title}</Title>
            <Paragraph>{movie.overview}</Paragraph>
          </Card.Content>
        </Card>
      ))}
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <Text
        style={styles.loadMoreButton}
        onPress={loadMoreMovies}
        disabled={isLoading}>
        Load More
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  loadMoreButton: {
    fontSize: 18,
    textAlign: 'center',
    padding: 16,
    color: 'blue',
  },
});

export default MoviesScreen;
