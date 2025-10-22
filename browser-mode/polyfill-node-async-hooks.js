export class AsyncLocalStorage {
  constructor() {
    this.storage = new Map();
    this.currentId = 0;
  }

  run(store, callback) {
    const id = ++this.currentId;
    this.storage.set(id, store);
    try {
      return callback();
    } finally {
      this.storage.delete(id);
    }
  }

  getStore() {
    for (const [id, store] of this.storage) {
      return store;
    }
    return undefined;
  }
}
