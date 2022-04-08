import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  get<T extends Record<string, unknown>>(key: string) {
    const val = localStorage.getItem(key);
    if (!val) {
      return null;
    }
    return JSON.parse(val) as T;
  }
  set<T extends Record<string, unknown>>(key: string, val: T) {
    localStorage.setItem(key, JSON.stringify(val));
  }
  delete(key: string) {
    localStorage.removeItem(key);
  }
}
