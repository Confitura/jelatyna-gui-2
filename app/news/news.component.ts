import {Component} from 'angular2/core';
import {News} from "./news";
import {User} from "../user/user";
import {RouterOutlet} from "angular2/router";
import {NewsListComponent} from "./list/news-list.component";
import {RouteConfig} from "angular2/router";
import {NewsDetailComponent} from "./detail/news-detail.component";

@Component({
    directives: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    {path: '/', name: 'News', component: NewsListComponent, useAsDefault: true},
    {path: '/:id', name: 'NewsDetail', component: NewsDetailComponent},
    {path: '/create', name: 'NewsCreate', component: NewsDetailComponent}
])
export class NewsComponent {
}