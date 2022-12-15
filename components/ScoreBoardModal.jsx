import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import BaseModal from './BaseModal';

const ScoreBoardModal = ({scoreBoard, isOpen}) => {
  const total = scoreBoard.reduce((total, cur) => total + cur.hitCount, 0)
  const displayScore = item => item.hitCount ? item.hitCount - item.par : '-'
  return (
    <BaseModal isOpen={isOpen}>
      <ScrollView>
        {scoreBoard.map(item => {
          return (
            <View style={styles.table} key={item.id}>
              <Text style={styles.tableText}>{item.id}</Text>
              <Text style={styles.tableText}>Par {item.par}</Text>
              <Text style={styles.tableText}>{item.hitCount}</Text>
              <Text style={styles.tableText}>{displayScore(item)}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.total}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalText}>{total}</Text>
      </View>
    </BaseModal>
  )
}

const styles = StyleSheet.create({
  table: {
    borderBottomWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingBottom: 10,
    marginHorizontal: 22,
    paddingHorizontal: 22,
  },
  tableText: {
    fontSize: 32,
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    marginHorizontal: 22,
    paddingBottom: 10,
    paddingHorizontal: 22,
  },
  totalText: {
    fontSize: 32,
  },
})

export default ScoreBoardModal;
