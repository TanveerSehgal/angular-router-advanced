import {Component} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './nasa.component.html',
    styleUrls: ['./nasa.component.css']
})

export class NasaComponent {
    private router: Router;
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

    constructor(_router: Router, _route: ActivatedRoute) {
        this.router = _router;
        this.route = _route;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }

    ngOnDestory() {
        this.sub.unsubscribe();
    }

    selectSpaceship(id) {
        this.router.navigate(['advanced/nasa', id]);
    }
}