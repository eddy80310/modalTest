import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ts-work-number',
  templateUrl: './work-number.component.html',
  styleUrls: ['./work-number.component.css']
})
export class WorkNumberComponent implements OnInit {

  @Input('group')
  public adressForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
