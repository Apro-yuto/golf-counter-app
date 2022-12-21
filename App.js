import React, {useState} from 'react';
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Counter from './hooks/counter';
import Header from './components/Header';
import HitContent from './components/HitContent';
import ParContent from './components/ParContent';
import ResultScoreModal from './components/ResultScoreModal';
import ScoreBoardModal from './components/ScoreBoardModal';

const App = () => {
  const {
    scoreBoard,
    currentScore,
    currentScoreString,
    currentHole,
    onHitChange,
    onParChange,
    onNextHole,
    resetScore,
  } = Counter();

  const [isScoreOpen, setIsScoreOpen] = useState(false);
  const [isHoleResultOpen, setIsHoleResultOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);
  const resetModal = () => {
    setIsHoleResultOpen(false);
    setIsResultOpen(false);
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <Header
        hole={currentHole}
        isOpen={isScoreOpen}
        setIsOpen={setIsScoreOpen}
        resetScore={() => resetScore(resetModal)}
        isDisplayResult={isResultOpen}
      />

      <View style={styles.sectionContainer}>
        <View style={styles.sectionContents}>
          <HitContent currentScore={currentScore} onHitChange={onHitChange} />
          <ParContent currentScore={currentScore} onParChange={onParChange} />
        </View>

        <TouchableOpacity
          style={styles.holeOutButton}
          onPress={() => setIsHoleResultOpen(true)}>
          <Text style={styles.holeOutText}>ホールアウト</Text>
        </TouchableOpacity>

        <ResultScoreModal
          currentScoreString={currentScoreString}
          hole={currentHole}
          isOpen={isHoleResultOpen}
          setIsResultOpen={setIsResultOpen}
          onNextHole={() => onNextHole(setIsHoleResultOpen(false))}
        />
        <ScoreBoardModal
          scoreBoard={scoreBoard}
          isOpen={isScoreOpen || isResultOpen}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
  sectionContainer: {
    paddingTop: 100,
    position: 'relative',
    flex: 1,
  },
  sectionContents: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  holeOutButton: {
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
  holeOutText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default App;
