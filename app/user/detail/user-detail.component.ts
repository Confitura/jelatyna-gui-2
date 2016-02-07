import {Component} from "angular2/core";
import {User} from "../user";
import {UserService} from "../user.service";
import {RouteParams} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {Router} from "angular2/router";
import {DropzoneComponent} from "../../dropzone/dropzone.component";
import {RouterOutlet} from "angular2/router";
import {RouterLink} from "angular2/router";

@Component({
    templateUrl: 'app/user/detail/user-detail.component.html',
    directives: [[RouterOutlet, RouterLink, DropzoneComponent]]
})
export class UserDetailComponent {
    private id:string;
    private user:User;

    constructor(private params:RouteParams, private service:UserService, private router:Router) {
    }

    ngOnInit() {
        let id = this.params.get("id");
        this.service.get(id).then(user => this.user = user);
    }

    save() {
        this.service.save(this.user)
            .then(result => this.router.navigate(['Users']));

    }

}