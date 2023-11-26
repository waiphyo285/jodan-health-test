class LocalStorageService {
  private ls: Storage | null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.ls = window.localStorage;
    } else {
      // Handle the case where 'window' is not available (e.g., in a Node.js environment).
      // You can provide an alternative storage solution here if needed.
      this.ls = null;
    }
  }

  setItem(key: string, value: any): boolean {
    if (this.ls) {
      value = JSON.stringify(value);
      this.ls.setItem(key, value);
      return true;
    }
    return false; // Handle the case where localStorage is not available
  }

  getItem(key: string): any {
    if (this.ls) {
      let value = this.ls.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return null;
      }
    }
    return null; // Handle the case where localStorage is not available
  }

  clearAll(): boolean {
    if (this.ls) {
      this.ls.clear();
      return true;
    }
    return false; // Handle the case where localStorage is not available
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new LocalStorageService();
