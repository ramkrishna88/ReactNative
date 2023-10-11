import React, {useState, useEffect} from 'react';
import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const apiKey = 'e196c4dc7f1c579d934c1e6444b36924';

const shuffleArray = array => {
  // Create a copy of the array and shuffle it
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const MoviesScreen = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovies = page => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${page}`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
        },
      },
    )
      .then(response => response.json())
      .then(data => {
        if (data.results) {
          const shuffledData = shuffleArray(data.results); // Shuffle the data
          setMovies([...movies, ...shuffledData]);
          setIsLoading(false);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    setMovies([]); // Clear movies when the component mounts
    fetchMovies(1);
  }, []); // Empty dependency array to run only on mount

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
