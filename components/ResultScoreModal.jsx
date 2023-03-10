import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {isLastHole} from '../partials/counter';
import BaseModal from './BaseModal';

const ResultScoreModal = ({currentScoreString, hole, isOpen, onNextHole, setIsResultOpen}) => {
  return (
    <BaseModal isOpen={isOpen}>
      <View>
        <Text style={styles.scoreText}>{currentScoreString}</Text>
        {
          !isLastHole(hole) ? (
            <TouchableOpacity
              style={styles.modalButton}
              onPress={onNextHole}>
              <Text style={styles.modalText}>次のホールへ</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsResultOpen(true)}>
              <Text style={styles.modalText}>スコア確認</Text>
            </TouchableOpacity>
          )
        }
      </View>
    </BaseModal>
  )
}

const styles = StyleSheet.create({
  scoreText: {
    fontSize: 40,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 150
  },
  modalButton: {
    width: 250,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'tranparent',
    borderWidth: 5,
    borderRadius: 100,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  modalText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
})

export default ResultScoreModal;
