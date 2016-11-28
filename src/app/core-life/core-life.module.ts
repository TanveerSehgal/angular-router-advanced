import {NgModule} from "@angular/core";

import {HomeComponent} from './home.component';
import {WorkComponent} from './work.component';
import {GymComponent} from './gym.component';
import {RestaurantComponent} from './restaurant.component';

@NgModule({
    imports: [],
    declarations: [
        HomeComponent,
        WorkComponent,
        GymComponent,
        RestaurantComponent
    ],
    exports: [
        HomeComponent,
        WorkComponent,
        GymComponent,
        RestaurantComponent
    ]
})

export class CoreLifeModule {}