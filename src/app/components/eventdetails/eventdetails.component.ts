import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrls: ['./eventdetails.component.scss']
})
export class EventdetailsComponent implements OnInit {

  constructor() { }

    modalToggle() {
        document.querySelector('a#open-modal').addEventListener('click', function (event) {
            event.preventDefault();
            const modal = document.querySelector('.modal');  // assuming you have only 1
            const html = document.querySelector('html');
            modal.classList.add('is-active');
            html.classList.add('is-clipped');

            modal.querySelector('button#close-modal').addEventListener('click', function (ev) {
                ev.preventDefault();
                modal.classList.remove('is-active');
                html.classList.remove('is-clipped');
            });
        });
    }

  ngOnInit() {
      this.modalToggle();
  }

}
