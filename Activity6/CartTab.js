import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

export default function CartTab() {
  const { cart, updating, removeFromCart } = useContext(AppContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      {updating && <Text style={styles.status}>Updating cart...</Text>}
      <FlatList
        data={cart}
        keyExtractor={(item) => item.cartId}
        ListEmptyComponent={<Text style={styles.empty}>Your cart is empty.</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>
              {item.name} - ${item.price.toFixed(2)}
            </Text>
            <TouchableOpacity onPress={() => removeFromCart(item.cartId)}>
              <Text style={styles.remove}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
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
  remove: { color: '#dc2626' },
  empty: { textAlign: 'center', color: '#888', marginTop: 20 },
  total: { fontSize: 18, fontWeight: 'bold', marginVertical: 16 },
});
