
import { IGlobalLocalStorage } from './interfaces/globalLocalStorage';
import { StorageType } from './types/storageType';
import { IGlobalSessionStorage } from './interfaces/globalSessionStorage';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private secrectKey = 'SERVIMAXlocalStorage*2022';
  //private dinamicScreen = {};
  constructor() { }

  public saveStorageElement(content: { space: 'Session', typeElement: keyof IGlobalSessionStorage, element: any } | { space: 'Local', typeElement: keyof IGlobalLocalStorage, element: any }): void {
    const keyEncryted = content.typeElement//CryptoJS.AES.encrypt(content.typeElement,this.secrectKey).toString();
    const jsonEncrypeted = CryptoJS.AES.encrypt(JSON.stringify(content.element), this.secrectKey).toString();
    // this.dinamicScreen = {...this.dinamicScreen,[content.typeElement]: keyEncryted};
    if (content.space === 'Local') {
      localStorage.setItem(keyEncryted, jsonEncrypeted);
    }
    if (content.space === 'Session') {
      sessionStorage.setItem(keyEncryted, jsonEncrypeted);
    }

  }
  public getStorageElement(content: { space: 'Session', typeElement: keyof IGlobalSessionStorage } | { space: 'Local', typeElement: keyof IGlobalLocalStorage }): any {
    let result = null;
    const keyEncryted = content.typeElement;//this.dinamicScreen[content.typeElement];
    if (content.space === 'Local') {
      result = localStorage.getItem(keyEncryted);
    }
    if (content.space === 'Session') {
      result = sessionStorage.getItem(keyEncryted);
    }
    result = CryptoJS.AES.decrypt(result, this.secrectKey);
    return JSON.parse(result.toString(CryptoJS.enc.Utf8));
  }
  public deleteStorageElement(content: { space: 'Session', typeElement: keyof IGlobalSessionStorage } | { space: 'Local', typeElement: keyof IGlobalLocalStorage }) {
    const keyEncryted = content.typeElement;//this.dinamicScreen[content.typeElement];
    if (content.space === 'Local') {
      localStorage.removeItem(keyEncryted);
    }
    if (content.space === 'Session') {
      sessionStorage.removeItem(keyEncryted);
    }
   // delete this.dinamicScreen[content.typeElement];
  }
  public cleanAll(space: StorageType) {

    //this.dinamicScreen = {};
    if (space === 'Local') {
      localStorage.clear();
    }
    if (space === 'Session') {
      sessionStorage.clear();
    }
  }

}
