import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {UserComponent} from "./user/user.component";
import {HomeComponent} from "./home.component";
import {NewsComponent} from "./news/news.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/users/...', name: 'Users', component: UserComponent, useAsDefault: true},
    { path: '/news/...', name: 'News', component: NewsComponent},
    {path: '/', name: 'Home', component: HomeComponent}
])
export class AppComponent {
}