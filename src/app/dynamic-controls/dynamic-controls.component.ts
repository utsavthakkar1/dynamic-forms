import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-controls',
  templateUrl: './dynamic-controls.component.html',
  styleUrls: ['./dynamic-controls.component.scss']
})
export class DynamicControlsComponent implements OnInit {

  public form: FormGroup;
  public liabilities: HlLiabilities[] = [
    { liabilityName:'Liability1', outstandingAmount: 2000, isManualLiability: false },
    { liabilityName:'Liability2', outstandingAmount: 3000, isManualLiability: false },
 ]
  constructor() { }

  ngOnInit() {
    this.form = this.setAppData(this.liabilities);
    console.log(this.form, 'form');
  }

  public setAppData(items: HlLiabilities[]): FormGroup {
    const formControls = items.reduce((acc, item) => {
      if(!acc[item.liabilityName]) {
        acc[item.liabilityName] = new FormGroup({
          rb: new FormControl(item.rb || '', Validators.required),
          cb: new FormControl(item.cb || '', Validators.required)
        })
    }
    return acc;
    }, {});
    console.log(formControls, 'formControls');
    return new FormGroup(formControls);
  }

  public onSubmit(): void {
    const rawVal = this.form.getRawValue();
    console.log(rawVal, 'Form Raw Value');
    this.liabilities = this.liabilities.map(liability => {
      return {
        ...liability,
        rb: rawVal[liability.liabilityName].rb,
        cb: rawVal[liability.liabilityName].cb,
      }
    });
    console.log(this.liabilities, 'liabilities');
  }
}
