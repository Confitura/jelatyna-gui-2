
import {Component} from "angular2/core";
import {News} from "../news";
import {NewsService} from "../news.service";
import {RouterLink} from "angular2/router";
@Component(
    {
        templateUrl: "app/news/list/news-list.component.html",
        directives: [RouterLink]
    }
)
export class NewsListComponent{

    news:News[] = [];

    constructor(private service:NewsService) {
    }

    ngOnInit() {
        this.service.fetch().then(news => this.news = news);
    }

}