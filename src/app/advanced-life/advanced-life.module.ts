import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import advancedRoutes from './advanced-life.routes';
import {NasaComponent} from './nasa.component';
import {SpaceXComponent} from './space-x.component';
import {WelcomeComponent} from './welcome.component';
import {NotificationComponent} from './notification.component';

@NgModule({
    imports: [
        CommonModule,
        advancedRoutes
    ],
    declarations: [
        NasaComponent,
        SpaceXComponent,
        WelcomeComponent,
        NotificationComponent
    ],
    exports: [
        NasaComponent,
        SpaceXComponent
    ]
})

export class AdvancedLifeModule {}