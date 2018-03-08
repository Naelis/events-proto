import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../../services/event.service';


@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.component.html',
    styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

    input: '';

    constructor(private router: Router, public eventService: EventService) {
    }


    clicked(event) {
        console.log(this.eventService.userInput);

        this.router.navigate(['temp']);

    }

    ngOnInit() {
    }

}
