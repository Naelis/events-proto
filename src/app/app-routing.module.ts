import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResultsComponent} from './components/results/results.component';
import {CategorylistComponent} from './components/categorylist/categorylist.component';
import {MapComponent} from './components/map/map.component';

const routes: Routes = [
    {
        path: 'results', component: ResultsComponent
    }, {
        path: 'frontpage', component: MapComponent
    }, {
        path: 'categories', component: CategorylistComponent
    }, {
        path: '**', redirectTo: '/frontpage'
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'frontpage'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

