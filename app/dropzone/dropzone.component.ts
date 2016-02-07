import {Directive} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Inject} from "angular2/core";
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
@Component({
    selector: "dropzone",
    template: "<div id='dropzone' class='dropzone'></div>",
    styles: [`
    #dropzone{
        width:180px;
        height: 180px;

    }
    `]
})
export class DropzoneComponent implements OnInit {

    constructor(private element:ElementRef) {

        console.log("abc");
        console.log(element.nativeElement)
    }

    ngOnInit():any {
        var dropzone = new Dropzone("div#dropzone", {url: "/abc", maxFiles: 1, asdsa: 123});
        dropzone.on("maxfilesexceeded", function(file) { this.removeFile(file); });
    }
}