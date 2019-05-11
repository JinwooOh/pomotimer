import AsyncStorage from '@react-native-community/async-storage';

export const getStoragePomo = async () => {
  try {
    const pomos = await AsyncStorage.getItem('pomos');
    return pomos;
  } catch (err) {
    console.log(err);
  }
};

export const savePomo = curPomo => {
  const currentTarget = (curPomo + 1).toString();
  AsyncStorage.setItem('pomos', currentTarget);
};
