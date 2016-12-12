import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import advancedRoutes from './advanced-life.routes';
import {NasaComponent} from './nasa.component';
import {SpaceXComponent} from './space-x.component';
import {WelcomeComponent} from './welcome.component';
import {AdvancedLifeComponent} from './advanced-life.component';

@NgModule({
    imports: [
        CommonModule,
        advancedRoutes
    ],
    declarations: [
        NasaComponent,
        SpaceXComponent,
        WelcomeComponent,
        AdvancedLifeComponent
    ],
    exports: [
        NasaComponent,
        SpaceXComponent,
        AdvancedLifeComponent
    ]
})

export class AdvancedLifeModule {}