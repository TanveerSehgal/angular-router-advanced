import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    templateUrl: './nasa.component.html',
    styleUrls: ['./nasa.component.css']
})

export class NasaComponent {
    router: Router;

    spaceships = [{
        id: 1,
        name: 'Moon Blaster'
    }, {
        id: 2,
        name: 'Back to Mars'
    }, {
        id: 3,
        name: `Little John's Dream`
    }, {
        id: 4,
        name: `3,2,1 I'm Out`
    }, {
        id: 5,
        name: 'Space Swag'
    }];

    constructor(_router: Router) {
        this.router = _router;
    }

    selectSpaceship(id) {
        this.router.navigate(['advanced/nasa', id]);
    }
}