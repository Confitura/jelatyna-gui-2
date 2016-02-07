import {Component} from "angular2/core";
import {RouteConfig} from "angular2/router";
import {UserDetailComponent} from "./detail/user-detail.component";
import {UserCreationComponent} from "./create/user-create.component";
import {UserListComponent} from "./list/user-list.component";
import {RouterOutlet} from "angular2/router";

@Component({
    directives: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    {path: '/', name: 'Users', component: UserListComponent, useAsDefault: true},
    {path: '/:id', name: 'UserDetail', component: UserDetailComponent},
    {path: '/create', name: 'NewUser', component: UserCreationComponent}
])
export class UserComponent {

}