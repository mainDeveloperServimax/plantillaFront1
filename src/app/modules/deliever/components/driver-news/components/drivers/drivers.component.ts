
import { LABELS } from 'src/app/constants/labels.constans';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  public LABELS = LABELS;
  public formpicking: FormGroup;


  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.iniciliteForm();

  }

  private iniciliteForm(): void {
    this.formpicking = this.fb.group({
      deliveryDay: (new Date()).toLocaleDateString(),
      driver: null
    });

    this.formpicking.controls.deliveryDay.valueChanges.subscribe((newDeliverDay) => {

    });

    this.formpicking.controls.driver.valueChanges.subscribe((newDriver) => {

    });

  }

}
