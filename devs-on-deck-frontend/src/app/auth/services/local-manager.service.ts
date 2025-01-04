import {Injectable, signal} from '@angular/core';

export enum LocalKeys {
  token = "token",
}

@Injectable({
  providedIn: 'root'
})
export class LocalManagerService {

  private isDev = signal<boolean>(false);
  private isOrg = signal<boolean>(false);

  getElement(key: LocalKeys): string | null {
    return localStorage.getItem(key);
  }

  setElement(key: LocalKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  clearStorage(): void {
    localStorage.clear();
  }

  // TODO recognize when user login is dev or org

}
