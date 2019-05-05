const getSettingOptions = (
  maxTime,
  maxBreak,
  maxPomo,
  Timeinterval,
  breakInterval
) => {
  const result = { times: [], breaks: [], pomos: [] };
  for (let i = 10; i <= maxTime; i += Timeinterval) {
    result.times.push({
      label: `${i} minutes`,
      value: `${i}`,
    });
  }
  for (let i = 5; i <= maxBreak; i += breakInterval) {
    result.breaks.push({
      label: `${i} minutes`,
      value: `${i}`,
    });
  }
  for (let i = 1; i <= maxPomo; i++) {
    result.pomos.push({
      label: `${i} 🍅`,
      value: `${i}`,
    });
  }
  return result;
};

export default getSettingOptions;
// {
//   label: '10 minutes',
//   value: '10',
// },
// {
//   label: '20 minutes',
//   value: '20',
// },
// {
//   label: '30 minutes',
//   value: '30',
// },
