
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  RefreshControl,
  Modal,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  // Fetch posts from API
  const fetchPosts = useCallback(async (isRefresh = false) => {
    if (isRefresh) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    setError(null);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?_limit=30'
      );

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const json = await response.json();
      setPosts(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Load posts when app starts
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Search posts by title or content
  const filteredPosts = posts.filter((post) => {
    const keyword = search.toLowerCase();

    return (
      post.title.toLowerCase().includes(keyword) ||
      post.body.toLowerCase().includes(keyword)
    );
  });

  // Display each post
  const renderPost = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => setSelectedPost(item)}
    >
      <Text style={styles.postNumber}>POST #{item.id}</Text>

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.body} numberOfLines={3}>
        {item.body}
      </Text>

      <Text style={styles.readMore}>Tap to read more →</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Posts 📝</Text>

      <Text style={styles.subtitle}>
        Explore and discover interesting posts!
      </Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Search posts..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Loading */}
      {loading ? (
        <View style={styles.center}>
          <Text style={styles.message}>Loading posts...</Text>
        </View>
      ) : error && posts.length === 0 ? (
        <View style={styles.center}>
          <Text style={styles.error}>Error: {error}</Text>

          <TouchableOpacity
            style={styles.retryButton}
            onPress={() => fetchPosts()}
          >
            <Text style={styles.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          {error && (
            <Text style={styles.error}>
              Could not refresh posts. Please try again.
            </Text>
          )}

          {/* Posts List with Pull-to-Refresh */}
          <FlatList
            data={filteredPosts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPost}
            contentContainerStyle={styles.list}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => fetchPosts(true)}
                colors={['#6366F1']}
              />
            }
            ListEmptyComponent={
              <Text style={styles.empty}>
                No posts found. Try another keyword.
              </Text>
            }
          />
        </>
      )}

      {/* Post Details Modal */}
      <Modal
        visible={selectedPost !== null}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSelectedPost(null)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalCard}>
            {selectedPost && (
              <>
                <Text style={styles.modalNumber}>
                  POST #{selectedPost.id}
                </Text>

                <Text style={styles.modalTitle}>
                  {selectedPost.title}
                </Text>

                <Text style={styles.modalBody}>
                  {selectedPost.body}
                </Text>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setSelectedPost(null)}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    paddingTop: 15,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#312E81',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#777',
    marginBottom: 18,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    fontSize: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDD6FE',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginBottom: 15,
    borderRadius: 14,
    elevation: 4,
    borderLeftWidth: 5,
    borderLeftColor: '#6366F1',
  },
  postNumber: {
    fontSize: 12,
    color: '#6366F1',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#312E81',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 22,
  },
  readMore: {
    color: '#6366F1',
    fontWeight: 'bold',
    marginTop: 12,
    fontSize: 13,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    color: '#6366F1',
  },
  error: {
    color: '#DC2626',
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: '#4F46E5',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    color: '#777',
    marginTop: 30,
    fontSize: 15,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalCard: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 18,
    elevation: 8,
  },
  modalNumber: {
    color: '#6366F1',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#312E81',
    marginBottom: 15,
  },
  modalBody: {
    fontSize: 16,
    color: '#555',
    lineHeight: 25,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#4F46E5',
    padding: 13,
    borderRadius: 10,
  },
});
