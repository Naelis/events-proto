import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CategorylistComponent } from './components/categorylist/categorylist.component';
import { ResultsComponent } from './components/results/results.component';
import { EventdetailsComponent } from './components/eventdetails/eventdetails.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import {EventService} from './services/event.service';
import {FormsModule} from '@angular/forms';
import { MapComponent } from './components/map/map.component';
import {HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { AgmCoreModule } from '@agm/core';
import {ReactiveFormsModule} from '@angular/forms';
import { TempComponent } from './temp/temp.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CategorylistComponent,
    ResultsComponent,
    EventdetailsComponent,
    CalendarComponent,
    NavigationComponent,
    MapComponent,
    HeaderComponent,
    GalleryComponent,
    EventCardComponent,
    TempComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
      HttpClientModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDBqH5K7K3BHn2xPcIk5Jl92AJuEox2kOk',
      }),
      ReactiveFormsModule,
      ScrollToModule.forRoot()
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})

export class AppModule { }
