
13. above step for new angular 2 project,

	take 5 file when you start new project
	index.html
	package.json
	systemjs.config.js
	tsconfig.json
	typings.json
	
14. create new folder "app" and create file app.component.ts
    
	import {Component} from '@angular/core';

	@Component({
		selector:'ag-app',
		template:`<div>
			Welcome to Angular 2 app
		</div>`,
		styles:[]
	})
	export class AppComponent{}
	
15. create file app.module.ts

			import {NgModule} from '@angular/core';
		import {BrowserModule} from '@angular/platform-browser';
		import { AppComponent} from './app.component';

		@NgModule({
		  imports: [ BrowserModule
		],
		  declarations: [ AppComponent
		],
		  bootstrap: [ AppComponent ]
		})
		export class AppModule { }

16.  Create file main.ts

	import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
	import {AppModule} from './app.module';
	platformBrowserDynamic().bootstrapModule(AppModule);

17. 