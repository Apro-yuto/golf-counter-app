import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { toggleStyles } from '../partials';

const Hamburger = ({hole, isOpen, setIsOpen}) => {
  return (
      <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
        <View
          style={{
            ...styles.hamburger,
            ...toggleStyles(
              isOpen,
              {
              transform: [
                {rotate: '-135deg'},
                {translateY: -11},
                {translateX: -11},
              ],
            }),
          }}
          />
        <View
          style={{
            ...styles.hamburger,
            ...toggleStyles(
              isOpen,
              {
              visibility: 'hidden',
              opacity: 0,
            }),
          }}
          />
        <View
          style={{
            ...styles.hamburger,
            ...toggleStyles(
              isOpen,
              {
              transform: [
                {rotate: '135deg'},
                {translateY: 11},
                {translateX: -11},
              ],
            }),
          }}
          />
      </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  hamburger: {
    width: 50,
    backgroundColor: '#000',
    borderWidth: 3,
    borderRadius: 100,
    marginTop: 10,
    boxSizing: 'border-box',
  },
})

export default Hamburger;
