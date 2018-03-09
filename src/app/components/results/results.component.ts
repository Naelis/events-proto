import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-results',
    styleUrls: ['./results.component.scss'],
    template: `
        <div id="destination"></div>
        <p class="content" *ngIf="userInput">Searching for results based on... "{{ userInput }}"</p>

        <p class="content" *ngIf="!userInput">Woops! You didn't search for anything... Try using the searchbar above! :)</p>

        <div class="container" *ngFor="let events of output;">
            <img *ngIf="events.images && events.images != null" (error)="events.images.url = 'http://placekitten.com/200/201'"
                 [src]='events.images.url'>
            <h2 class="title is-success" *ngIf="events.name.en && events.description.en">{{events.name.en}}</h2>
            <div *ngIf="events.description.en" [innerHTML]="events.description.en"></div>
            <p *ngIf="events.position && events.description.en && events.position.info_url">Url goes here: <span>
                    {{ events.position.info_url.fi }}</span>
            </p>
            <a class="button is-small is-info" *ngIf="events.description.en && events.position && events.position.info_url"
               (click)="navigateToMap(events.position.position, events.position.name.en, events.position.street_address.fi,
               events.position.info_url.fi);">
                Show on Map</a>
            <br>
            <br>
        </div>

        <button [ngx-scroll-to]="'#destination'" *ngIf="userInput">Back to Top</button>

    `
})

export class ResultsComponent implements OnInit {

    output: any;
    userInput: string;
    locID: Object;
    imgID: Object;


    constructor(public eventService: EventService, private router: Router) {
    }


    search() {


        this.eventService.getFromApi(this.eventService.userInput).subscribe(data => {


            this.output = data['data'];

            console.log(this.output);

            this.output.forEach(eventListed => {


                if (eventListed.location) {

                    this.locID = eventListed.location['@id'];

                    this.eventService.getLocation(this.locID).subscribe(pos => {
                            eventListed.position = pos;
                            // console.log(eventListed);

                            // this.latDisplay = position.coordinates[0];
                            // this.lngDisplay = eventListed.position.coordinates[1];


                            if (eventListed.images && eventListed.images[0].id) {
                                this.imgID = eventListed.images[0].id;

                                this.eventService.getImage(this.imgID).subscribe(img => {
                                    eventListed.images = img;

                                    console.log(eventListed);
                                    console.log(eventListed.position.position.coordinates[0]);


                                });

                            }

                        }
                    );

                } else {
                    console.log('there was no location listed for' + eventListed.id);
                }


            });


        });

    }

    navigateToMap(coords, venue, address, eventurl) {
        console.log(coords);
        console.log(venue);
        this.eventService.setMarker(coords.coordinates[1], coords.coordinates[0]);
        this.eventService.setLocale(venue, address, eventurl);
        this.router.navigate(['']);
    }


    ngOnInit() {


        // this.showMap() = this.eventService.showMap();
        this.userInput = this.eventService.userInput;
        this.search();
    }

}
