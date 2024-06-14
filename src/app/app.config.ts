import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { ToasterComponent } from './components/common/toaster/toaster.component';
import { ToasterService } from './services/toaster.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(),ToasterComponent,ToasterService]
};
