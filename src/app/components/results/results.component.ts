import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
    selector: 'app-results',
    styleUrls: ['./results.component.scss'],
    template: `
        <p class="content" *ngIf="userInput">Searching for results based on... "{{ userInput }}"</p>

        <p class="content" *ngIf="!userInput">Woops! You didn't search for anything... Try using the searchbar above! :)</p>

        <div class="container" *ngFor="let events of output;">
            <div>
                <h2 class="title" *ngIf="events.name.en && events.description.en">{{events.name.en}}</h2>
                <div *ngIf="events.description.en" [innerHTML]="events.description.en"></div>
                <p>Url goes here: {{ urlDisplay }}</p>
            </div>
            <br>

        </div>
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

    constructor(private eventService: EventService) {
    }


    search() {


        this.eventService.getFromApi(this.userInput).subscribe(data => {

            this.output = data['data'];

            console.log(this.output);

            this.output.forEach(eventListed => {
                if (eventListed.location) {
                    // console.log('Looking for coords for' + eventListed.id);
                    this.locID = eventListed.location['@id'];
                    // console.log('Trying to search in other address:' + this.locID);
                    this.eventService.getLocation(this.locID).subscribe(pos => {
                        this.posresults = pos;

                        this.latDisplay = this.posresults.position.coordinates[0];
                        this.lngDisplay = this.posresults.position.coordinates[1];
                        console.log('Lat:' + this.latDisplay + 'Lng:' + this.lngDisplay);

                        if (this.posresults.info_url) {
                            this.urlDisplay = this.posresults.info_url.fi;
                            console.log('Url:' + this.urlDisplay);
                        }
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
