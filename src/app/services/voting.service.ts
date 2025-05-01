import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {VoterDto} from '../models/voter-dto';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  private readonly voterUrl = `${environment.api.baseUrl}/${environment.api.voterUrl}`;

  constructor(
    private http: HttpClient
  ) { }

  findAllVoters(): Observable<VoterDto[]> {
    return this.http.get<VoterDto[]>(this.voterUrl);
  }

  updateVotingStatus(id: number | undefined): Observable<void> {
    return this.http.patch<void>(`${this.voterUrl}/has-voted/${id}`, null);
  }
  
}
