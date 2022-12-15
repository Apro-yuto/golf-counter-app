export const canEditHitCount = hitCount => {
  return hitCount >= 0 && hitCount <= 99;
};

export const canEditParCount = parCount => {
  return parCount >= 3 && parCount <= 5;
};

export const isLastHole = holeCount => {
  return holeCount === 18;
};
