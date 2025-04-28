import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // For native date functionality=
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {NavMenuComponent} from '../../../nav-menu/nav-menu.component';
import {TranslocoPipe} from '@ngneat/transloco';

@Component({
  selector: 'app-add-voter',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDatepickerToggle,
    MatIconModule,
    MatCheckboxModule,
    TranslocoPipe,
  ],
  templateUrl: './add-voter.component.html',
  styleUrls: ['./add-voter.component.css'],
})
export class AddVoterComponent {
  voterForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.voterForm = this.fb.group({
      firstName: ['', Validators.required],
      fatherName: ['', Validators.required],
      motherName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      birthDate: ['', Validators.required],
      registrationNumber: ['', Validators.required],
      address: ['', Validators.required],
      hasVoted: [false],
    });
  }

  onSubmit() {
    if (this.voterForm.valid) {
      console.log('Form Submitted:', this.voterForm.value);
    }
  }
}
