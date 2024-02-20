type StorageEntryName = string;
type StorageEntryValue = any;

const getWindowProperty = (): Window => (typeof window !== 'undefined' ? window : ({} as Window));

const isStorageAvailable = (storage: Storage | null | undefined): storage is Storage => {
   return !!storage;
};

export class BrowserStorageManager {
   private static get _sessionStorage(): Storage {
      const storage = getWindowProperty().sessionStorage;
      if (!isStorageAvailable(storage)) {
         throw new Error('Session storage is not available');
      }
      return storage;
   }

   private static get _localStorage(): Storage {
      const storage = getWindowProperty().localStorage;
      if (!isStorageAvailable(storage)) {
         throw new Error('Local storage is not available');
      }
      return storage;
   }

   private static readStorage(storage: Storage, key: string): any {
      const data = storage.getItem(key);
      return data ? JSON.parse(data) : null;
   }

   private static writeStorage(storage: Storage, key: StorageEntryName, value: StorageEntryValue): void {
      if (value === undefined || value === null) {
         storage.removeItem(key);
      } else {
         storage.setItem(key, JSON.stringify(value));
      }
   }

   private static removeStorageKey(storage: Storage, key: string): void {
      storage.removeItem(key);
   }

   private static removeStorageItems(storage: Storage, keys: string[]): void {
      keys.forEach((key) => storage.removeItem(key));
   }

   // Public API ******************************************************************************

   static readSessionStorage<T>(key: string, otherwise?: T): T | null {
      try {
         return this.readStorage(this._sessionStorage, key) ?? otherwise ?? null;
      } catch (e) {
         return otherwise ?? null;
      }
   }

   static writeSessionStorage(key: StorageEntryName, value: StorageEntryValue): void {
      this.writeStorage(this._sessionStorage, key, value);
   }

   static removeSessionStorageKey(key: string) {
      this.removeStorageKey(this._sessionStorage, key);
   }

   static removeSessionStorageItems(keys: string[]) {
      this.removeStorageItems(this._sessionStorage, keys);
   }

   static clearSessionStorage() {
      this._sessionStorage.clear();
   }

   static readLocalStorage<T>(key: string, otherwise?: T): T | null {
      try {
         return this.readStorage(this._localStorage, key) ?? otherwise ?? null;
      } catch (e) {
         return otherwise ?? null;
      }
   }

   static writeLocalStorage(key: StorageEntryName, value: StorageEntryValue): void {
      this.writeStorage(this._localStorage, key, value);
   }

   static removeLocalStorageKey(key: string) {
      this.removeStorageKey(this._localStorage, key);
   }

   static removeLocalStorageItems(keys: string[]) {
      this.removeStorageItems(this._localStorage, keys);
   }

   static clearLocalStorage() {
      this._localStorage.clear();
   }
}
