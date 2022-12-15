import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ParContent = ({currentScore, onParChange}) => {
  return (
    <View style={styles.parContents}>
      <Text style={styles.parTitle}>Par</Text>
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => onParChange()}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.parCount}>{currentScore?.par}</Text>

      <TouchableOpacity
        style={styles.decrementButton}
        onPress={() => onParChange(-1)}>
        <Text style={styles.buttonText}>−</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  parContents: {
    width: 90,
    marginLeft: 64,
  },
  parTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '800',
  },
  parCount: {
    fontSize: 60,
    fontWeight: '700',
    textAlign: 'center',
    whitespace: 'nowrap',
  },
  decrementButton: {
    backgroundColor: '#005DB4',
    borderRadius: 5,
  },
  plusButton: {
    backgroundColor: '#F00E0E',
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
  },
})

export default ParContent;
