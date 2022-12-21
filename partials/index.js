export const toggleStyles = (toggleFlag, styles) => (!toggleFlag ? {} : styles);
export const generateScoreString = score => {
  return `${score?.name ?? ''}${score?.score <= 0 ? '!!!' : '...'}`;
};

export default {
  toggleStyles,
  generateScoreString,
};
