import { KEY_STORAGE_APP } from "./keys"
import { User } from '../../@core/types'

export const getUserFromStorage = (): User | null => {
    const source = localStorage.getItem(KEY_STORAGE_APP);

    if (!source) return null;

    return JSON.parse(source) as User;
}

export const setUserFromStorage = (id: string, username: string) => {
    localStorage.setItem(KEY_STORAGE_APP, JSON.stringify({id, username}));
}