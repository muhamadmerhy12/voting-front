import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoterListComponent} from './voter/components/voter-list/voter-list.component';
import {AddVoterComponent} from './voter/components/add-voter/add-voter.component';

export const routes: Routes = [
  { path: 'voter-list', component: VoterListComponent },
  { path: 'add-voter', component: AddVoterComponent },
  { path: '', redirectTo: '/voter-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
