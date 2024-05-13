import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { appRoutes } from './app-routes';
//standalone migration
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { BrowserModule} from '@angular/platform-browser';
import { CdkColumnDef } from '@angular/cdk/table';


import { importProvidersFrom } from '@angular/core';

export const appConfig: ApplicationConfig = {
	providers: [provideRouter(appRoutes),
		importProvidersFrom(BrowserModule,MatTableModule, 
			MatSlideToggleModule,RouterModule.forRoot(appRoutes) 
		),
		CdkColumnDef,
		provideHttpClient(withInterceptorsFromDi()),
		provideAnimations(),
	],
		
};