import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {isLastHole} from '../partials/counter';
import Hamburger from './Hamburger';

const Header = ({hole, isOpen, setIsOpen, resetScore, isDisplayResult}) => {
  return (
    <View style={styles.header}>
      {
        !isDisplayResult ? (
          <>
            <Text>
              <Text style={styles.holeNumber}>{hole}</Text>
              <Text style={styles.holeText}>H</Text>
            </Text>
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        ) : (
          <>
            <Text>
              <Text style={styles.scoreTitle}>スコア結果</Text>
            </Text>
            <TouchableOpacity style={styles.restartBtn} onPress={() => resetScore()}>
              <Text style={styles.restartText}>リスタート</Text>
            </TouchableOpacity>
          </>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderBottomWidth: 2,
  },
  holeNumber: {
    fontSize: 44,
    fontWeight: '700',
  },
  holeText: {
    fontSize: 30,
    fontWeight: '700',
  },
  scoreTitle: {
    fontSize: 30,
    fontWeight: '700',
  },
  restartBtn: {
    width: 110,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'tranparent',
    borderWidth: 2,
    borderRadius: 100,
  },
  restartText: {
    fontSize: 18,
    fontWeight: '700',
  },
})

export default Header;
