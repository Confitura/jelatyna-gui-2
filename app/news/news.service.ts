import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Inject} from "angular2/core";
import {Headers} from "angular2/http";
import {Response} from "angular2/http";
import {News} from "./news";

@Injectable()
export class NewsService {
    private static url = "http://localhost:3000/news";
    private http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    fetch():Promise<News[]> {
        return new Promise<News[]>(resolve=> {
            this.http.get(NewsService.url)
                .subscribe(news => resolve(news.json()))
        });
    }

    get(id:string):Promise<News> {
        return new Promise<News>(resolve=> {
            this.http.get(NewsService.url + "/" + id)
                .subscribe(user => resolve(user.json()))
        });
    }

    save(news:News):Promise<Response> {
        return new Promise<Response>(resolve => {
                let value = JSON.stringify(news);
                this.http.put(NewsService.url + "/" + news.id, value, {headers: new Headers({'Content-Type': 'application/json'})})
                    .subscribe(resolve)
            }
        );
    }

    create(news:News):Promise<Response> {
        return new Promise<Response>(resolve => {
                let value = JSON.stringify(news);
                this.http.post(NewsService.url, value, {headers: new Headers({'Content-Type': 'application/json'})})
                    .subscribe(resolve);
            }
        );
    }


    delete(news:News):Promise<Response> {
        return new Promise<Response>(resolve => {
            this.http.delete(NewsService.url + "/" + news.id)
                .subscribe(resolve)
        });
    }
}