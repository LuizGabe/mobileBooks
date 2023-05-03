import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    console.log('error', e)
  }
}

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key')
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('error', e)
  }
}

export {
  setData,
  getData
}