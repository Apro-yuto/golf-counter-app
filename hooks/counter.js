import {useState, useEffect, useCallback, useMemo} from 'react';
import {canEditHitCount, canEditParCount} from '../partials/counter';
import {LIMIT_HOLE_COUNT, SCORE} from '../constants';
import {generateScoreString} from '../partials';

const Counter = () => {
  let [scoreBoard, setScore] = useState([]);
  let [currentHole, setHole] = useState(1);
  let [hitCount, _] = useState(1);

  // useMemo
  // 現在のスコア
  const currentScore = useMemo(() => {
    return scoreBoard.find(item => item.id === currentHole);
  }, [scoreBoard, currentHole]);

  // 現在のスコア(文字列)
  const currentScoreString = useMemo(() => {
    const currentScoreBoard = scoreBoard.find(item => item.id === currentHole);
    const resultScore = SCORE.find(
      item =>
        item.score === currentScoreBoard?.hitCount - currentScoreBoard?.par,
    );
    return generateScoreString(resultScore);
  }, [currentHole, scoreBoard]);

  // useCallback
  // 現在のスコア(文字列)
  const generateUpdateScore = useCallback(
    updateValue => {
      return scoreBoard.map(item => {
        if (item.id !== currentHole) return item;
        return {
          ...item,
          ...updateValue,
        };
      });
    },
    [scoreBoard, currentHole],
  );
  const onScoreCountChange = useCallback(
    updateValue => {
      setScore(generateUpdateScore(updateValue));
    },
    [setScore, generateUpdateScore],
  );
  const onHitChange = useCallback(
    (direction = 1) => {
      const expectCount = currentScore.hitCount + direction * 1;
      if (!canEditHitCount(expectCount)) return;
      onScoreCountChange({hitCount: expectCount}, direction);
    },
    [onScoreCountChange, currentScore],
  );
  const onParChange = useCallback(
    (direction = 1) => {
      const expectCount = currentScore.par + direction * 1;
      if (!canEditParCount(expectCount)) return;
      onScoreCountChange({par: expectCount}, direction);
    },
    [onScoreCountChange, currentScore],
  );
  const onNextHole = useCallback(
    afterProcess => {
      setHole(currentHole + 1);
      if (!afterProcess) {
        return;
      }
      afterProcess();
    },
    [currentHole, setHole],
  );

  const initScoreBoard = useCallback(() => {
    let scoreBoardArr = [];
    for (let i = 1; i <= LIMIT_HOLE_COUNT; i++) {
      scoreBoardArr.push({
        id: i,
        hitCount: 0,
        par: 3,
      });
    }
    setScore([...scoreBoardArr]);
  }, []);

  const resetScore = useCallback(
    afterProcess => {
      initScoreBoard();
      setHole(1);

      afterProcess();
    },
    [initScoreBoard],
  );

  // useEffect
  useEffect(() => {
    // スコアボードの初期化
    initScoreBoard();
  }, [initScoreBoard]);
  return {
    scoreBoard,
    currentHole,
    currentScore,
    currentScoreString,
    onHitChange,
    onParChange,
    onNextHole,
    resetScore,
  };
};

export default Counter;
