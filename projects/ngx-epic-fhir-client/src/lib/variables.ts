import { InjectionToken } from '@angular/core';

export const BASE_PATH = new InjectionToken<string>('basePath');
export const TOKEN_STORAGE_KEY = 'epicOauthToken';
export const BASE_URL_STORAGE_KEY = 'epicBaseUrlToken';
export const COLLECTION_FORMATS = {
  csv: ',',
  tsv: '   ',
  ssv: ' ',
  pipes: '|',
};
