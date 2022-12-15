import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HitContent = ({currentScore, onHitChange}) => {
  return (
    <View style={styles.hitContents}>
      <Text style={styles.hitTitle}>打数</Text>
      <TouchableOpacity
        style={styles.plusButton}
        onPress={() => onHitChange()}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>

      <Text style={styles.hitCount}>{currentScore?.hitCount}</Text>

      <TouchableOpacity
        style={styles.decrementButton}
        onPress={() => onHitChange(-1)}>
        <Text style={styles.buttonText}>−</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  hitContents: {
    width: 150,
  },
  hitTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '800',
  },
  hitCount: {
    fontSize: 110,
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

export default HitContent;
