import {Injectable} from "angular2/core";
import {ElementRef} from "angular2/core";
import {resolve} from "url";
import rejected = webdriver.promise.rejected;


@Injectable()
export class ModalService {
    //private modals:{[key:string]:ElementRef} = {};
    //
    //registerModal(id:string, element:ElementRef) {
    //    this.modals[id] = element;
    //
    //    //vex.dialog.confirm({
    //    //    message: 'Are you absolutely sure you want to destroy the alien planet?',
    //    //    callback: function (value) {
    //    //        return console.log(value);
    //    //    }
    //    //});
    //    //console.log($(element.nativeElement.children[0]));
    //    //var elem:any = $(element.nativeElement.children[0]);
    //    //elem.foundation('open');
    //    //element.foundation('open');
    //}


    show():Promise<Boolean> {
        return new Promise<Boolean>((resolve) =>
            swal({title: "abc", showCancelButton: true, showConfirmButton: true}, resolve));
    }

}