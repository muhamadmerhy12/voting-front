import {AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {VotingService} from '../services/voting.service';
import {VoterDto} from '../models/voter-dto';
import {lastValueFrom} from 'rxjs';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {DatePipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {ConfirmationDialogComponent} from '../shared/app-confirmation-dialog/app-confirmation-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-voter-list',
  templateUrl: './voter-list.component.html',
  styleUrls: ['./voter-list.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatCellDef,
    MatHeaderCellDef,
    DatePipe,
    MatButton,
    MatTooltip,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatSort,
    MatPaginator,
    MatSortModule
  ],
})
export class VoterListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['firstName', 'fatherName', 'motherName', 'lastName', 'gender', 'birthDate', 'registrationNumber', 'address', 'hasVoted', 'actions'];
  dataSource: MatTableDataSource<VoterDto> = new MatTableDataSource<VoterDto>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private readonly votingService: VotingService,
              private readonly detectorRef: ChangeDetectorRef,
              private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.fetchVoterList().then();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.active = 'hasVoted';
    this.sort.direction = 'asc';
    this.sort.sortChange.emit();
    this.detectorRef.detectChanges();
  }

  async fetchVoterList(): Promise<void> {
    this.dataSource.data = await lastValueFrom(this.votingService.findAllVoters());
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

async markAsVoted(voter: VoterDto): Promise<void> {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    data: { message: `Are you sure you want to mark ${voter.firstName} , ${voter.lastName} as voted?` }
  });

  const confirmed = await lastValueFrom(dialogRef.afterClosed());
  if (confirmed) {
    try {
      await lastValueFrom(this.votingService.updateVotingStatus(voter.id));
      await this.fetchVoterList();
    } catch (err) {
      console.error('Failed to update voting status:', err);
    }
  }
}
}
