import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {CoreLifeModule} from './core-life/core-life.module';
import {AdvancedLifeModule} from './advanced-life/advanced-life.module';
import appRoutes from './app.routes';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CoreLifeModule,
        AdvancedLifeModule,
        appRoutes
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
