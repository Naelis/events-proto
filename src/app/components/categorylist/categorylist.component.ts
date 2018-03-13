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
    dance() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'dance';
        this.router.navigate(['results']);
    }

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

        this.eventService.userInput = 'museo';
        this.router.navigate(['results']);
    }
    music() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'music';
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
    events() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'tapahtumat';
        this.router.navigate(['results']);
    }
    theatre() {
        let list = document.getElementById('list');
        if (list.style.display === 'none') {
            list.style.display = 'block';
        } else {
            list.style.display = 'none';
        }

        this.eventService.userInput = 'theatre';
        this.router.navigate(['results']);
    }
    ngOnInit() {
        this.userInput = this.eventService.userInput;

    }

}