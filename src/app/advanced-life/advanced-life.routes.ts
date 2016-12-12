import {RouterModule} from '@angular/router';

import {NasaComponent} from './nasa.component';
import {SpaceXComponent} from './space-x.component';
import {WelcomeComponent} from './welcome.component';
import {NotificationComponent} from './notification.component';

const routes = [{
    path: 'advanced',
    children: [
        {path: '', component: WelcomeComponent},
        {path: 'nasa', component: NasaComponent},
        {
            path: 'nasa/:id',
            children: [
                {path: '', component: NasaComponent},
                {path: '', component: NotificationComponent, outlet: 'notification'}
            ]
        },
        {path: 'space-x', component: SpaceXComponent},
        {path: '**', redirectTo: '/advanced'}
    ]
}];

export default RouterModule.forChild(routes);