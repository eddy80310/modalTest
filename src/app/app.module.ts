
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';


import { Ng2PopupModule } from 'ng2-popup';
import { ApprovalsTwoComponent } from './approvals-two/approvals-two.component';
import { ApprovalDetailComponent } from './approval-detail/approval-detail.component';





@NgModule({
  declarations: [
    AppComponent,
    ApprovalsTwoComponent,
    ApprovalDetailComponent
    // FileSelectDirective, FileDropDirective, FileUploader
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    routing,
    ReactiveFormsModule,
    FileUploadModule,
    FormsModule,
  ],
  providers: [

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

