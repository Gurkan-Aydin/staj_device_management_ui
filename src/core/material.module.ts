import {NgModule} from '@angular/core';
import {MatInputModule, MatOption, MatToolbarModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTableModule, MatTabsModule, BrowserAnimationsModule,
    MatFormFieldModule, MatRadioModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatCheckboxModule, MatPaginatorModule,
    MatButtonToggleModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule],
  exports: [CommonModule, MatToolbarModule, MatButtonModule, MatTableModule, MatTabsModule, BrowserAnimationsModule,
    MatFormFieldModule, MatRadioModule, MatInputModule, MatSelectModule, MatSnackBarModule, MatCheckboxModule, MatPaginatorModule,
    MatButtonToggleModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule]
  })

export class CustomMaterialModule { }
