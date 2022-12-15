import {useState, useEffect, useCallback, useMemo} from 'react';
import {canEditHitCount, canEditParCount} from '../partials/counter';
import {SCORE} from '../constants';

// 残タスク
// ・リファクタリング - Qiita
// ・JSDoc - Qiita
// ・ボタンコンポーネント欲しい
// ・編集機能
// ・GPS機能

const Counter = () => {
  const limitGameCount = 18;
  let [scoreBoard, setScore] = useState([]);
  let [hole, setHole] = useState(1);
  let [hitCount, setHitCount] = useState(1);

  // useMemo
  // 現在のスコア
  const currentScore = useMemo(() => {
    return scoreBoard.find(item => item.id === hole);
  }, [scoreBoard, hole]);

  // 現在のスコア(文字列)
  const currentScoreString = useMemo(() => {
    const currentScoreBoard = scoreBoard.find(item => item.id === hole);
    const resultScore = SCORE.find(
      item =>
        item.score === currentScoreBoard?.hitCount - currentScoreBoard?.par,
    );
    return `${resultScore?.name ?? ''}${resultScore?.score <= 0 ? '!!!' : '...'}`;
  }, [hole, scoreBoard]);

  // useCallback
  const generateUpdatedScore = useCallback(
    updateValue => {
      return scoreBoard.map(item => {
        if (item.id !== hole) return item;
        return {
          ...item,
          ...updateValue,
        };
      });
    },
    [scoreBoard, hole],
  );
  const onScoreCountChange = useCallback(
    updateValue => {
      setScore(generateUpdatedScore(updateValue));
    },
    [setScore, generateUpdatedScore],
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
      setHole(hole + 1);
      if (!afterProcess) {
        return;
      }
      afterProcess();
    },
    [hole, setHole],
  );

  const initScoreBoard = () => {
    let scoreBoardArr = [];
    for (let i = 1; i <= limitGameCount; i++) {
      scoreBoardArr.push({
        id: i,
        hitCount: 0,
        par: 3,
      });
    }
    setScore([...scoreBoardArr]);
  };

  // useEffect
  useEffect(() => {
    // スコアボードの初期化
    initScoreBoard();
  }, []);
  return {
    scoreBoard,
    setScore,
    hole,
    setHole,
    hitCount,
    currentScore,
    currentScoreString,
    onHitChange,
    onParChange,
    onNextHole,
    initScoreBoard,
  };
};

export default Counter;
