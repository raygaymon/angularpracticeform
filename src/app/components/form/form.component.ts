import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../form-service';
import { Details } from '../details/Details';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  detailObj: Details ={
    id:0,
    name: '',
    address: '',
    phone: 0,
    job: '',
    birthday:null,
  }

  form: FormGroup;
  name: string;
  applicants: any[];
  birthday: Date;

  constructor(private fb: FormBuilder, private router: Router, private fs: FormService){

  }
  
  details: [];

  ngOnInit() : void {
    this.initializeForm();
  }

  initializeForm(){
    this.form = this.fb.group({
      name: new FormControl('', (Validators.required)),
      address: new FormControl('', (Validators.required)),
      phone: new FormControl('', (Validators.required)),
      job: new FormControl('', (Validators.required)),
      birthday: new FormControl('', (Validators.required)),
    })
  }

  createEntry(){
    this.fs.create("Details", this.form.value).subscribe({
      next: (data) => {
      this.router.navigateByUrl('/forms/deets');
    } })
  }
}
