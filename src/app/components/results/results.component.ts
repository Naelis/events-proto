import { Component, OnInit } from '@angular/core';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  searchResult: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
      this.searchResult = this.eventService.search();
  }

}
