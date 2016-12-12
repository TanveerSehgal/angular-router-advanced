import {NgModule} from "@angular/core";

import advancedRoutes from './advanced-life.routes';
import {AdvancedLifeComponent} from './advanced-life.component';
import {NasaComponent} from './nasa.component';
import {SpaceXComponent} from './space-x.component';
import {WelcomeComponent} from './welcome.component';

@NgModule({
    imports: [
        advancedRoutes
    ],
    declarations: [
        NasaComponent,
        SpaceXComponent,
        AdvancedLifeComponent,
        WelcomeComponent
    ],
    exports: [
        NasaComponent,
        SpaceXComponent,
        AdvancedLifeComponent
    ]
})

export class AdvancedLifeModule {}