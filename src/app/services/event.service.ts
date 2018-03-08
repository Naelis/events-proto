import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {

    apiAddress = 'http://api.hel.fi/linkedevents/v1/search/?type=event?include=location%2ckeywords&input=';
    byKeyword = 'keyword/?format=json';
    byVenue = 'place/?format=json';
    byEvent = 'event/';
    byInput = 'event&input=';
    modifiedSearch = '?include=location%2ckeywords';
    userInput: '';
    public results: any;
    public url: string;
    locationApi = 'http://api.hel.fi/linkedevents/v1/place/tprek:';
    id: any;

    public eventInfo: any;

    constructor(private http: HttpClient) {
    }


    getFromApi(input) {


        interface EventData {
            data: Object;
        }


        return this.http.get<EventData>(this.apiAddress + input);
    }


    getLocation(locationSearch) {

        interface LocationData {
            position: any;
            infoUrl: any;
        }

        return this.http.get<LocationData>(locationSearch);
    }



    drawMarkers() {


    }

}
