import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval} from 'rxjs/observable/interval';

@Injectable()
export class EventService {

    apiAddress = 'http://api.hel.fi/linkedevents/v1/search/?type=event?include=location%2ckeywords&input=';
    modifiedSearch = '?include=location%2ckeywords';
    userInput: string;
    public results: any;
    public url: string;
    locationApi = 'http://api.hel.fi/linkedevents/v1/place/tprek:';
    imageApi = 'http://api.hel.fi/linkedevents/v1/image/';
    public lat: number;
    public lng: number;
    public locale: string;
    public address: string;
    public eventurl: string;


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

    getImage(imageSearch) {
        interface ImageData {
            url: any;
        }

        return this.http.get<ImageData>(this.imageApi + imageSearch);
    }

    setMarker(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }

    setLocale(locale, address, eventurl) {
        this.locale = locale;
        this.address = address;
        this.eventurl = eventurl;
    }


}
