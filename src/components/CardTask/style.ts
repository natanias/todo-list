import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 5,
    width: '95%',
    margin: 10,
  },
  checkboxContainer: {
    marginRight: 15, 
  },
  taskContent: {
    flexDirection: 'column',
    marginLeft: 10,
    flex: 1,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#13a8ec',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  tagText: {
    color: '#fff',
    marginLeft: 5,
    fontWeight: '600',
  },
});
