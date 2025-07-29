import { Routes } from '@angular/router';
import { Counter } from './pages/counter/counter';
import { Series } from './pages/series/series';
import {Librairie} from './components/librairie/librairie';

export const routes: Routes = [
    {path: "", component: Counter},
    {path: "series", component: Series},
    {path: "librairie", component: Librairie},
];
