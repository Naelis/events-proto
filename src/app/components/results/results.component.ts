import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

    output: any;
    userInput: '';

    constructor(private eventService: EventService) {
    }


    search() {

        interface DataInterface {
            data: any;
        }

        this.eventService.getFromApi(this.userInput).subscribe(data => {

            this.output = data['data'];

            console.log(this.output);
        });

    }




    ngOnInit() {
        this.userInput = this.eventService.userInput;
        this.search();

    }

}
