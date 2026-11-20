import Logger from 'js-logger';

const DB_NAME = 'apod-db';
const DB_STORE = 'apod-date';
const DB_VERSION = 3;

export type ApodItem = {
  alt: string;
  basic_html: string;
  basic_html_url: string;
  copyright: string;
  credit: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  permalink: string;
  post_id: string;
  title: string;
  url: string;
};

export class ApodIDB {
  private static instance: ApodIDB;
  db: IDBDatabase | null = null;

  public static async getInstance(): Promise<ApodIDB> {
    if (!ApodIDB.instance) {
      const idb = new ApodIDB();
      await idb.init();

      ApodIDB.instance = idb;
    }
    return ApodIDB.instance;
  }

  init() {
    const retVal = new Promise<boolean>((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => {
        reject(false);
      };
      request.onsuccess = () => {
        this.db = request.result;

        resolve(true);
      };
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const request = event.target as IDBOpenDBRequest;

        request.result.onerror = (event) => {
          Logger.error('onupgradeneeded', event);
          resolve(false);
        };

        if (request.result.objectStoreNames.contains(DB_STORE)) {
          request.result.deleteObjectStore(DB_STORE);
        }

        const storeDate = request.result.createObjectStore(DB_STORE, {
          keyPath: 'date',
          autoIncrement: true,
        });

        storeDate.transaction.oncomplete = () => {
          request.result
            .transaction(DB_STORE, 'readwrite')
            .objectStore(DB_STORE);
        };
      };
    });

    return retVal;
  }
  //
  getData(ids: string[]) {
    const retVal = new Promise<ApodItem[]>((resolve, reject) => {
      const transaction = this.db?.transaction([DB_STORE]) ?? null;

      if (transaction) {
        const objectStore = transaction.objectStore(DB_STORE);

        const all = ids.map((id) => {
          const retVal = new Promise<ApodItem>((resolve, reject) => {
            const request = objectStore.get(id);
            request.onerror = (event) => {
              reject(event);
            };
            request.onsuccess = () => {
              resolve(request.result ?? null);
            };
          });

          return retVal;
        });
        Promise.all(all)
          .then((all) => resolve(all))
          .catch((error) => {
            Logger.error('ApodIDB::getData', error);
            reject();
          });
      } else {
        reject();
      }
    });

    return retVal;
  }
  setData(datas: ApodItem[]) {
    const retVal = new Promise<void>((resolve, reject) => {
      const transaction = this.db?.transaction([DB_STORE], 'readwrite') ?? null;

      if (transaction) {
        transaction.onerror = (event) => {
          reject(event);
        };

        const objectStore = transaction.objectStore(DB_STORE);

        const all = datas.map((data) => {
          const retVal = new Promise((resolve, reject) => {
            const request = objectStore.put(data);
            request.onerror = (event) => {
              reject(event);
            };
            request.onsuccess = () => {
              resolve(null);
            };
          });

          return retVal;
        });
        Promise.all(all)
          .then(() => resolve())
          .catch((error) => {
            Logger.error('ApodIDB::setData', error);
            reject();
          });
      } else {
        reject();
      }
    });

    return retVal;
  }
}
