import {RouterModule} from '@angular/router';

import {HomeComponent} from './core-life/home.component';
import {WorkComponent} from './core-life/work.component';
import {GymComponent} from "./core-life/gym.component";
import {RestaurantComponent} from "./core-life/restaurant.component";

const routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'work', component: WorkComponent},
    {path: 'gym', component: GymComponent},
    {path: 'restaurant', component: RestaurantComponent},
    {path: 'advanced', loadChildren: 'advanced-life/advanced-life.module'},
    {path: '**', component: HomeComponent}
];

export default RouterModule.forRoot(routes);