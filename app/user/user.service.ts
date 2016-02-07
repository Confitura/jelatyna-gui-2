import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {User} from "./user";
import {Inject} from "angular2/core";
import {Headers} from "angular2/http";
import {Response} from "angular2/http";

@Injectable()
export class UserService {
    private static url = "http://localhost:3000/users";
    private users:User[] = [];
    private http:Http;

    constructor(http:Http) {
        this.http = http;
    }

    fetch():Promise<User[]> {
        return new Promise<User[]>(resolve=> {
            this.http.get(UserService.url)
                .subscribe(users => resolve(users.json()))
        });
    }

    get(id:string):Promise<User> {
        return new Promise<User>(resolve=> {
            this.http.get(UserService.url + "/" + id)
                .subscribe(user => resolve(user.json()))
        });
    }

    save(user:User):Promise<Response> {
        return new Promise<Response>(resolve => {
                let value = JSON.stringify(user);
                this.http.put(UserService.url + "/" + user.id, value, {headers: new Headers({'Content-Type': 'application/json'})})
                    .subscribe(resolve)
            }
        );
    }

    create(user:User):Promise<Response> {
        return new Promise<Response>(resolve => {
                let value = JSON.stringify(user);
                this.http.post(UserService.url, value, {headers: new Headers({'Content-Type': 'application/json'})})
                    .subscribe(resolve);
            }
        );
    }

    delete(user:User):Promise<Response> {
        return new Promise<Response>(resolve => {
            this.http.delete(UserService.url + "/" + user.id)
                .subscribe(resolve)
        });
    }
}