import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageDirectionService {
  private currentLangDirection$ = new BehaviorSubject<string>('ltr');

  updatePageDirection(lang: string) {
    const direction = lang === 'ar' ? 'rtl' : 'ltr';
    this.currentLangDirection$.next(direction);
    document.documentElement.setAttribute('dir', direction);  // Update global direction
  }

  get currentDirection$() {
    return this.currentLangDirection$.asObservable();
  }
}
