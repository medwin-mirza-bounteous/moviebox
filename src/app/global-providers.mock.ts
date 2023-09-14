import { RouterTestingModule } from "@angular/router/testing";
import { State, StoreModule } from "@ngrx/store";

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CommonModule } from "@angular/common";

export const GlobalAppModuleImports = [
	StoreModule.forRoot({}),
	
	RouterTestingModule,
	HttpClientTestingModule,
	CommonModule
];

export const GlobalAppModuleProviders = [

	

] 