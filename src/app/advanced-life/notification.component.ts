import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    template: `<div class="alert alert-success">You have selected the {{getSpaceship().name}} spaceship</div>`
})

export class NotificationComponent {
    private route: ActivatedRoute;
    private sub: any;
    private id: number;

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

    constructor(_route: ActivatedRoute) {
        this.route = _route;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getSpaceship() {
        let spaceships = this.spaceships.filter(spaceship => {
            return spaceship.id === this.id;
        });

        return spaceships[0];
    }
}