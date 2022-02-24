import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { RosterComponent } from './roster/roster.component';
import { ResearchComponent } from './research/research.component';
//import { CalendarComponent } from './calendar/calendar.component';
const routes: Routes = [
{ path: '', component: DashComponent },
//{ path: 'calendar', component: CalendarComponent }
{ path: 'roster', component: RosterComponent },
{ path: 'library', component: ResearchComponent }
//{ path: 'Analysis', component: AnalysisComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }