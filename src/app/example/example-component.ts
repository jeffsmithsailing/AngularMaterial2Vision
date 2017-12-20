
import { Component, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatTableDataSource, MatSort} from '@angular/material';


@Component({
    selector: 'ms-example',
    templateUrl: './example-component.html',
    styleUrls: ['./example-component.scss']
})
export class WizardStepperComponent {
isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }
	  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['']
    });
	    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
	this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
  }
	displayedColumns = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}

export interface Element {
  name: string;
  position: string;
  weight: string;
  //  size: string;
//  status: string;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
	 {position: 'Dr Jones Bill Feb 1', name: '2mb', weight: 'Complete', symbol: ''},
	 {position: 'Dr Jones Bill May 7', name: '2mb', weight: 'Complete', symbol: ''},
	 {position: 'Dr Jones EOB', name: '5mb', weight: 'Complete', symbol: ''},

];
