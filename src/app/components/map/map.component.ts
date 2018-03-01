import {Component, OnInit, NgModule} from '@angular/core';



@Component({
    selector: 'app-map',
    styles: [`
        agm-map {
            height: 1200px;
        }
    `],
    template: `
        <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
    `
})
export class MapComponent implements OnInit {

    lat = 60.192059;
    lng = 24.945831;

    constructor() {
    }

    ngOnInit() {

    }

}
