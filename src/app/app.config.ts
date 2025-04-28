import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import {provideNativeDateAdapter} from '@angular/material/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideTransloco } from '@ngneat/transloco';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), provideNativeDateAdapter(), provideClientHydration(), provideTransloco({
    config: {
      availableLangs: ['en', 'fr'],
      defaultLang: 'en',
      reRenderOnLangChange: true
    },
    loader: TranslocoHttpLoader
  })]
};
