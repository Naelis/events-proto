import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {

    apiAddress = 'http://api.hel.fi/linkedevents/v1/search/?type=event?include=location%2ckeywords&input=';
    byKeyword = 'keyword/?format=json';
    byCategory = '';
    byVenue = 'place/?format=json';
    byEvent = 'event/';
    byInput = 'event&input=';
    modifiedSearch = '?include=location%2ckeywords';
    userInput: '';
    public results: any;

    constructor(private http: HttpClient) {
    }


    getFromApi(input) {


        interface EventData {
            data: Object;
        }

        return this.http.get<EventData>(this.apiAddress + input);
    }

}
