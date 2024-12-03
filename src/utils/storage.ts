/**
 * /**
 * @param key storage的key值
 * @param value 设置的value值
 * @param isSessionStorage 是否是sessionStorage
 */
export function setStorage(key: storage.StorageKey, value: any, isSessionStorage?: boolean) {
    isSessionStorage ? sessionStorage.setItem(key, value) : localStorage.setItem(key, value)
}

/**
 * 
 * @param key 获取的storage key值
 * @param isSessionStorage 
 * @returns 
 */
export function getStorage(key: storage.StorageKey, isSessionStorage?: boolean):any {
    return isSessionStorage ? sessionStorage.getItem(key) : localStorage.getItem(key)
}

/**
 * 
 * @param key 要删除的key值
 * @param isSessionStorage 
 */
export function deleteStorage(key: storage.StorageKey, isSessionStorage?: boolean) {
    isSessionStorage ? sessionStorage.removeItem(key) : localStorage.removeItem(key)
}