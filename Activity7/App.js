import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@tasks';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // READ: load saved tasks when the app mounts
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved !== null) {
          setTasks(JSON.parse(saved));
        }
      } catch (err) {
        console.log('Failed to load tasks:', err);
      } finally {
        setLoaded(true);
      }
    };
    loadTasks();
  }, []);

  // Save the full array to storage (stringify before saving)
  const saveTasks = async (newTasks) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
    } catch (err) {
      console.log('Failed to save tasks:', err);
    }
  };

  // Keep state and storage in sync
  const updateTasks = (newTasks) => {
    setTasks(newTasks);
    saveTasks(newTasks);
  };

  // CREATE or UPDATE, depending on whether we're editing
  const handleSubmit = () => {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (editingId) {
      // UPDATE
      updateTasks(
        tasks.map((t) => (t.id === editingId ? { ...t, text: trimmed } : t))
      );
      setEditingId(null);
    } else {
      // CREATE
      updateTasks([...tasks, { id: Date.now().toString(), text: trimmed }]);
    }
    setText('');
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setText(task.text);
  };

  // DELETE
  const deleteTask = (id) => {
    updateTasks(tasks.filter((t) => t.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setText('');
    }
  };

  if (!loaded) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={text}
          onChangeText={setText}
          onSubmitEditing={handleSubmit}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{editingId ? 'Save' : 'Add'}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.empty}>No tasks yet.</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.text}</Text>
            <TouchableOpacity onPress={() => startEdit(item)}>
              <Text style={styles.edit}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
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
  row: { flexDirection: 'row', marginBottom: 16 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginRight: 8,
  },
  addButton: {
    backgroundColor: '#2563eb',
    borderRadius: 6,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: { flex: 1, fontSize: 16 },
  edit: { color: '#2563eb', marginRight: 12 },
  delete: { color: '#dc2626' },
  empty: { textAlign: 'center', color: '#888', marginTop: 20 },
});

