import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from "angular2/http";
import {AppComponent} from './app.component';
import {UserService} from "./user/user.service";
import {ROUTER_PROVIDERS} from "angular2/router";
import {ModalService} from "./modal/modal.service";
import {NewsService} from "./news/news.service";

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS, UserService, ModalService, NewsService]);
