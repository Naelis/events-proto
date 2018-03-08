import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';


@Component({
    selector: 'app-results',
    styleUrls: ['./results.component.scss'],
    template: `
        <div id="destination"></div>
        <p class="content" *ngIf="userInput">Searching for results based on... "{{ userInput }}"</p>

        <p class="content" *ngIf="!userInput">Woops! You didn't search for anything... Try using the searchbar above! :)</p>

        <div class="container" *ngFor="let events of output;">
            <h2 class="title is-success" *ngIf="events.name.en && events.description.en">{{events.name.en}}</h2>
            <div *ngIf="events.description.en" [innerHTML]="events.description.en"></div>
            <p *ngIf="events.position && events.description.en">Url goes here: <span *ngIf="events.position.info_url">
                    {{ events.position.info_url.fi }}</span>
            </p>
            <a class="button is-small is-info" *ngIf="events.description.en && events.position">Show on Map</a>
            <br>
            <br>
        </div>

        <button [ngx-scroll-to]="'#destination'" *ngIf="userInput">Back to Top</button>

    `
})

export class ResultsComponent implements OnInit {

    output: any;
    print: any;
    locationoutput: any;
    userInput: '';
    posresults: any;
    locID: Object;
    public latDisplay: number;
    public lngDisplay: number;
    public urlDisplay: string;

    constructor(public eventService: EventService) {
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
                        console.log(eventListed);
                        // this.latDisplay = position.coordinates[0];
                        // this.lngDisplay = eventListed.position.coordinates[1];

                    });

                } else {
                    console.log('there was no location listed for' + eventListed.id);
                }


            });


        });

    }


    ngOnInit() {
        this.userInput = this.eventService.userInput;
        this.search();
    }

}
