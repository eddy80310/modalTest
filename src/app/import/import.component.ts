import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

// webpack html imports
// let template = require('./simple-demo.html');

// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'ts-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})


export class ImportComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;

  public fileOverBase(e:any):void {
    console.log('asfjpagja')
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e:any):void {
    console.log('aopfep')
    this.hasAnotherDropZoneOver = e;
  }

  ngOnInit() { }
}
