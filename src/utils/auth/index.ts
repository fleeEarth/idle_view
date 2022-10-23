import { Persistent, BasicKeys } from '/@/utils/cache/persistent';
import { CacheTypeEnum, PUBLIC_KEY, SESSION_KEY } from '/@/enums/cacheEnum';
import projectSetting from '/@/settings/projectSetting';
import { TOKEN_KEY } from '/@/enums/cacheEnum';

const { permissionCacheType } = projectSetting;
const isLocal = permissionCacheType === CacheTypeEnum.LOCAL;

export function getToken() {
  return getAuthCache(TOKEN_KEY);
}

export function getSessionId() {
  return Persistent.getSession(SESSION_KEY);
}

export function setSessionId(key: any) {
  Persistent.setSession(SESSION_KEY, key);
}


export function getPublicKey() {
  return Persistent.getSession(PUBLIC_KEY);
}

export function setPublicKey(key: any) {
  Persistent.setSession(PUBLIC_KEY, key);
}

export function getAuthCache<T>(key: BasicKeys) {
  const fn = isLocal ? Persistent.getLocal : Persistent.getSession;
  return fn(key) as T;
}

export function setAuthCache(key: BasicKeys, value) {
  const fn = isLocal ? Persistent.setLocal : Persistent.setSession;
  return fn(key, value, true);
}

export function clearAuthCache(immediate = true) {
  const fn = isLocal ? Persistent.clearLocal : Persistent.clearSession;
  return fn(immediate);
}
