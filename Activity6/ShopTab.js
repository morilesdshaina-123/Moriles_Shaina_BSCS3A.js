import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

const PRODUCTS = [
  { id: '1', name: 'Notebook', price: 4.5 },
  { id: '2', name: 'Pen Set', price: 6.0 },
  { id: '3', name: 'Backpack', price: 35.0 },
  { id: '4', name: 'Water Bottle', price: 12.0 },
];

export default function ShopTab() {
  const { addToCart, updating } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shop</Text>
      {updating && <Text style={styles.status}>Adding to cart...</Text>}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>
              {item.name} - ${item.price.toFixed(2)}
            </Text>
            <TouchableOpacity
              style={[styles.button, updating && styles.disabled]}
              onPress={() => addToCart(item)}
              disabled={updating}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60, paddingHorizontal: 16 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  status: { color: '#2563eb', marginBottom: 8 },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  name: { flex: 1, fontSize: 16 },
  button: { backgroundColor: '#2563eb', borderRadius: 6, paddingHorizontal: 14, paddingVertical: 8 },
  disabled: { opacity: 0.5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});
