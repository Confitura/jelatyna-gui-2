import {Directive} from "angular2/core";
import {ElementRef} from "angular2/core";
import {Inject} from "angular2/core";
import {Component} from "angular2/core";
import {OnInit} from "angular2/core";
import {Input} from "angular2/core";
import {Output} from "angular2/core";
import {EventEmitter} from 'angular2/src/facade/async';
import {OnChanges} from "angular2/core";
@Directive({
    selector: "[datePicker]"
})
export class DatePicker implements OnInit, OnChanges {
    @Output('datePickerChange')
    private update = new EventEmitter();

    @Input('datePicker')
    private model:any;

    constructor(private element:ElementRef) {
    }

    ngOnInit():any {
        $(this.element.nativeElement).datetimepicker({
            keepOpen: false,
            format: 'YYYY-MM-DD HH:mm'
        });

        $(this.element.nativeElement).on('dp.change', (event)=> {
            this.update.emit($(this.element.nativeElement).val());
        });
    }

    ngOnChanges(changes:{}):any {
        $(this.element.nativeElement).val(this.model);
    }

}