import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { STATUS } from '../shared/constant/constants';

@Component({
  selector: 'ts-approval-detail',
  templateUrl: './approval-detail.component.html',
  styleUrls: ['./approval-detail.component.css']
})
export class ApprovalDetailComponent implements OnInit {

  private modalId = "approvalDetailModal"
  private approvalModalForm: FormGroup

  private statuses = STATUS;
  private statusArr: string[] = [];

  // private currentBug = new Bug(null, null, this.statuses.Logged, this.severities.Severe, null, null, null, null, null);

  constructor(private formB: FormBuilder) { }

  ngOnInit() {
    this.statusArr = Object.keys(this.statuses).filter(Number); 
    this.configureForm();
  }

  configureForm() {
    this.approvalModalForm = this.formB.group({
      title: [''],
      status: [''],
      description: ['']
    });
  }

}
