import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ResultsComponent} from './components/results/results.component';
import {CategorylistComponent} from './components/categorylist/categorylist.component';
import {MapComponent} from './components/map/map.component';
import {TempComponent} from './temp/temp.component';

const routes: Routes = [
    {
        path: 'results', component: ResultsComponent
    }, {
        path: '', component: MapComponent
    }, {
        path: 'categories', component: CategorylistComponent
    },
    {
        path: 'temp', component: TempComponent
    },
    {
        path: '**', redirectTo: ''
    },
    {
        path: '',
        pathMatch: 'full',
        component: MapComponent
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

