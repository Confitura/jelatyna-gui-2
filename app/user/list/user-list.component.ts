import {Component} from "angular2/core";
import {User} from "../user";
import {UserService} from "../user.service";
import {Route} from "angular2/router";
import {OnInit} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {RouterLink} from "angular2/router";
import {ModalService} from "../../modal/modal.service";

@Component({
    templateUrl: 'app/user/list/user-list.component.html',
    directives: [RouterLink]
})
export class UserListComponent implements OnInit {
    users:User[] = [];

    constructor(private userService:UserService, private modal:ModalService) {
    }

    ngOnInit() {
        this.userService.fetch().then(users => this.users = users);
    }


    delete(user:User) {
        this.modal.show()
            .then((removed)=> {
                this.doDelete(user);
            });

    }

    private doDelete(user){
        this.userService.delete(user)
            .then(result => this.userService.fetch().then(users => this.users = users))
    }
}