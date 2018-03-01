import {Component, OnInit} from '@angular/core';
import {ElementRef, NgZone, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

    public lat: number;
    public lng: number;
    locationChosen = false;
    public gestures = 'cooperative';
    public searchControl: FormControl;
    public zoom: number;
    public watchID = null;


    @ViewChild('search')
    public searchElementRef: ElementRef;

    constructor(private mapsAPILoader: MapsAPILoader,
                private ngZone: NgZone) {
    }

    ngOnInit() {
        // set google maps defaults
        this.zoom = 4;
        this.lat = 60.192059;
        this.lng = 24.945831;


        // create search FormControl
        this.searchControl = new FormControl();

        // set current position
        this.setCurrentPosition();

        // load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    // get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    // set latitude, longitude and zoom
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    this.zoom = 12;
                });
            });
        });
    }

    private setCurrentPosition() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 12;
            });
        }
    }

    private onChoseLocation(event) {
        console.log(event);

        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.locationChosen = true;
    }


}
