import {Component} from "angular2/core";
import {News} from "../news";
import {UserService} from "../../user/user.service";
import {OnInit} from "angular2/core";
import {User} from "../../user/user";
import {DatePicker} from "../../date-picker/date-picker.directive";
import {NewsService} from "../news.service";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
@Component({
    templateUrl: 'app/news/detail/news-detail.component.html',
    directives: [[DatePicker]]
})
export class NewsDetailComponent implements OnInit {
    news:News = {};
    users:User[] = [];

    constructor(private userService:UserService, private newsService:NewsService, private router:Router, private params:RouteParams) {
    }

    ngOnInit() {
        let id = this.params.get('id');
        if (id != null){
            this.newsService.get(id).then((news)=> this.news = news);
        }
        this.userService.fetch().then((users)=> {
            this.users = users
        });
    }


    save() {
        console.log(this.news);
        if (this.news.id != null) {
            this.newsService.save(this.news).then(() => this.backToList());
        } else {
            this.newsService.create(this.news).then(() => this.backToList());
        }
    }

    cancel(){
        this.backToList();
    }

    change(){
        console.log('change');
    }

    private backToList() {
        return this.router.navigate(['News']);
    };


}