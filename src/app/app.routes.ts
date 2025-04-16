import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoterListComponent } from './voter-list/voter-list.component';

export const routes: Routes = [
  { path: 'voter-list', component: VoterListComponent },
  { path: '', redirectTo: '/voter-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
