import {Component} from "angular2/core";
import {User} from "../user";
import {UserService} from "../user.service";
import {RouteParams} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router";

@Component({
    templateUrl: 'app/user/create/user-create.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class UserCreationComponent {
    private user:User = {};

    constructor(private service:UserService, private router:Router) {
    }


    create() {
        this.service.create(this.user)
            .then(()=>this.router.navigate(['Users']));

    }

}