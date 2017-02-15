import {Component} from '@angular/core';

@Component({
    selector:'ag-app',
    template:`<div class="jumbotron">
        Welcome to Angular 2 app
    </div>`,
    styles:['.jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }']
})
export class AppComponent{}