import {
  StyleSheet,
  View,
} from 'react-native';
import { toggleStyles } from '../partials';

const BaseModal = ({isOpen, children}) => {
  return (
    <View style={{
      ...styles.scoreModal,
      ...toggleStyles(
        isOpen,
        {
        left: 0,
      }),
    }}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  scoreModal: {
    ...StyleSheet.absoluteFill,
    left: '100%',
    top: 0,
    zIndex: 999999,
    backgroundColor: '#fff',
    paddingTop: 16,
  },
})

export default BaseModal;
