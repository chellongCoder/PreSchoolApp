import { AsyncStorage } from 'react-native';
import { EASY } from '../config';

export const ACCESS_KEY = 'ACCESSKEY';
export const LEVEL_KEY = 'LEVELKEY';

/**
 * AccessKey
 */
export const getAccessKey = () => AsyncStorage.getItem(ACCESS_KEY);
export const setAccessKey = (accesskey: string) => {
    AsyncStorage.removeItem(ACCESS_KEY);

    return AsyncStorage.setItem(ACCESS_KEY, accesskey);
};
export const clearAccessKey = () => AsyncStorage.removeItem(ACCESS_KEY);

/**
 * Level
 */
export const getLevel = async () => {
    try {
        const level = await AsyncStorage.getItem(LEVEL_KEY);
        if (!level) throw new Error('Level not set!');
        return level;
    } catch (error) {
        return EASY;
    }
};

export const setLevel = async (level: string) => {
    if (!level) throw new Error('Params level is falsy!');
    await AsyncStorage.removeItem(LEVEL_KEY);
    return AsyncStorage.setItem(LEVEL_KEY, level);
};

/**
 * Language
 */
const LANGUAGE_KEY = 'language_key';
export const getLanguage = () => AsyncStorage.getItem(LANGUAGE_KEY);

export const setLanguage = async (lang: any) => {
    if (!lang) throw new Error('Params language is falsy!');
    await AsyncStorage.removeItem(LANGUAGE_KEY);
    return AsyncStorage.setItem(LANGUAGE_KEY, lang);
};
