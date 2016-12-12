import {Component} from "@angular/core";

@Component({
    templateUrl: './nasa.component.html',
    styleUrls: ['./nasa.component.css']
})

export class NasaComponent {
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
}