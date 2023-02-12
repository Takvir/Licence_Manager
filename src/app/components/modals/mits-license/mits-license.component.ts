import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-mits-license',
  templateUrl: './mits-license.component.html',
  styleUrls: ['./mits-license.component.scss']
})
export class MitsLicenseComponent implements OnInit {

  form!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._createForm()
  }


  private _createForm() {
    this.form = this._formBuilder.group({

      name: new FormControl(''),
      owner : new FormControl(''),
      desciption: new FormControl(''),
      url: new FormControl(''),
      username:new FormControl(''),
      email: new FormControl(''),
      old_pass : new FormControl(''),
      new_pass: new FormControl(''),
      status: new FormControl(''),
      billing_alert:new FormControl(''),
      note:new FormControl(''),
    })
  }

  public get signInFormOneControls() {
    return this.form.controls;
  }

}
