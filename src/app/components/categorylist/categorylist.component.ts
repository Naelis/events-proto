import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-categorylist',
    templateUrl: './categorylist.component.html',
    styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit {

    output: any;
    userInput: string;
    locID: Object;

    constructor(private eventService: EventService, private router: Router) { }

    food() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'food';
        this.router.navigate(['results']);
    }
    museum() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'museum';
        this.router.navigate(['results']);
    }
    kids() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'kids';
        this.router.navigate(['results']);
    }
    shopping() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'shopping';
        this.router.navigate(['results']);
    }
    sightseeing() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'sightseeing';
        this.router.navigate(['results']);
    }
    ngOnInit() {
        this.userInput = this.eventService.userInput;

    }

}
