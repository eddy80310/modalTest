import { ReactiveFormsModule } from '@angular/forms';
import { TimeSheetComponent } from './timesheet/timesheet.component';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApprovalsComponent } from './approvals/approvals.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkNumberComponent } from './timesheet/work-number/work-number.component';
import { ImportComponent } from './import/import.component';
// import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { ImportCsvComponent } from './import-csv/import-csv.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeSheetComponent,
    ApprovalsComponent,
    SettingsComponent,
    WorkNumberComponent,
    ImportComponent,
    ImportCsvComponent
    // FileSelectDirective, FileDropDirective, FileUploader
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    ReactiveFormsModule,
    FileUploadModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
