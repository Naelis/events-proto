import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Welcome to Helsinki!';
  greeting = 'What do you feel like doing today?';

  constructor() { }

  ngOnInit() {
  }

}
