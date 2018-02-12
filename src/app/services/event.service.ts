import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {

    apiAddress = 'http://api.hel.fi/linkedevents/v1/';
    byKeyword = 'keyword/?format=json';
    byCategory = '';
    byVenue = 'place/?format=json';
    byEvent = 'event/';
    byInput = 'event/?text=';
    modifiedSearch = '?include=location%2ckeywords/?format=json';
    userInput = '';
    results: any;

    constructor(private http: HttpClient) {
    }

    search() {

        interface DataInterface {
            data: any;
        }

        this.http.get<DataInterface>(this.apiAddress + this.byInput + this.userInput + this.modifiedSearch).subscribe(data => {
            console.log(data.data);
            this.results = data.data;
        });

        return this.results;

    }

}
