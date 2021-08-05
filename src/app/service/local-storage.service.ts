import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    get(key: string): string {
        return localStorage.getItem(key) ?? '';
    }

    set(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
}
