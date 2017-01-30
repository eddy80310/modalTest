
import { Component, OnInit } from '@angular/core';
import { STATUS } from '../shared/constant/constants';

@Component({
  selector: 'app-approvals-two',
  templateUrl: './approvals-two.component.html',
  styleUrls: ['./approvals-two.component.css']
})
export class ApprovalsTwoComponent implements OnInit {
  
  
  private statuses = STATUS;
  private statusArr: string[] = [];


  constructor() { }

  ngOnInit() {
    this.statusArr = Object.keys(this.statuses).filter(Number);
    this.getApprovals();
  }

  getApprovals() {
  }

  onTestClick(something: any) {
    console.log(something);
  }
}