import {Component} from '@angular/core';

import {Popover, PopoverProperties} from './popover';
import {ChildComponent} from './child.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent {

    constructor(
        public popover: Popover) {}

    showPopover(prop: PopoverProperties) {
        prop.component = ChildComponent;
        this.popover.load(prop);
    }

    closePopover() {
        this.popover.close();
    }
}