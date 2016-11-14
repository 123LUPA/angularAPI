import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from "./about.component";
import {InternshipsComponent} from "./internships.component";
import {InternshipEntryComponent} from "./internshipEntry.component";
import {AComponent} from "./a.component";
import {BComponent} from "./b.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'internships',
    component: InternshipsComponent,
    children: [
      { path: '' },
      { path: 'a', component: AComponent },
      { path: 'b', component: BComponent }
    ]
  },
  { //new internships
    path: 'internship',
    component: InternshipEntryComponent
  },
  { //edit internship
    path: 'internship/:id',
    component: InternshipEntryComponent
  },
  { //edit internship
    path: 'internship/:id/:name',
    component: InternshipEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class InternshipsRoutingModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
