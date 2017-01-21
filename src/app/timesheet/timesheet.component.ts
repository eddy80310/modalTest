import { TimeSheet } from './timesheet.interface';
import { TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms'

@Component({
  selector: 'ts-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimeSheetComponent implements OnInit {

  public timesheetForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.timesheetForm = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      workNumberFields: this._fb.array([])
    });

    // add work number fields
    this.addWorkNumberFields();

    /* subscribe to workNumberFields value changes */
    // this.timesheetForm.controls['workNumberFields'].valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  initWorkNumerFields() {
    return this._fb.group({
      workNumber: [''],
      equipmentNumber: [''],
      startTime: [''],
      stopTime: ['']
    });
  }

  addWorkNumberFields() {
    const control = <FormArray>this.timesheetForm.controls['workNumberFields'];
    const addrCtrl = this.initWorkNumerFields();

    control.push(addrCtrl);

    /* subscribe to individual workNumber value changes */
    // addrCtrl.valueChanges.subscribe(x => {
    //   console.log(x);
    // })
  }

  removeWorkNumberFields(i: number) {
    const control = <FormArray>this.timesheetForm.controls['workNumberFields'];
    control.removeAt(i);
  }

  onSubmit(formOutput: FormGroup) {
    // call API to save
    // ...
    console.log(formOutput.value);
    alert('Submit this data to database')
  }
}
