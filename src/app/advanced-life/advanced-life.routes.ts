import {RouterModule} from '@angular/router';

import {AdvancedLifeComponent} from './advanced-life.component';
import {NasaComponent} from './nasa.component';
import {SpaceXComponent} from './space-x.component';
import {WelcomeComponent} from './welcome.component';

const routes = [{
    path: 'advanced',
    component: AdvancedLifeComponent,
    children: [
        {path: '', component: WelcomeComponent},
        {path: 'nasa', component: NasaComponent},
        {path: 'space-x', component: SpaceXComponent},
    ]
}];

export default RouterModule.forChild(routes);