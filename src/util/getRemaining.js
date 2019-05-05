const formatNumber = number => `0${number}`.slice(-2);
const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) };
};

export default getRemaining;
