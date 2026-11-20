import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=30')
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const json = await response.json();
        setPosts(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      
<FlatList
  data={posts}
  keyExtractor={(item) => item.id.toString()}
  contentContainerStyle={{ padding: 16 }}
  renderItem={({ item }) => (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        padding: 18,
        marginBottom: 15,
        borderRadius: 14,
        elevation: 4,
        borderLeftWidth: 5,
        borderLeftColor: '#6366F1',
      }}
    >
      <Text
        style={{
          fontSize: 12,
          color: '#6366F1',
          fontWeight: 'bold',
          marginBottom: 8,
        }}
      >
        POST #{item.id}
      </Text>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#312E81',
          marginBottom: 8,
        }}
      >
        {item.title}
      </Text>

      <Text
        style={{
          fontSize: 14,
          color: '#555555',
          lineHeight: 22,
        }}
      >
        {item.body}
      </Text>
    </View>
  )}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  item: { marginBottom: 16 },
  title: { fontWeight: 'bold', marginBottom: 4 },
});
