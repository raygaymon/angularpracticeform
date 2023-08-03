import { Component, OnInit } from '@angular/core';
import { FormService } from '../form-service';
import { Router } from '@angular/router';
import { Details } from './Details';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  deets: Details[] = [];

  constructor(private fs: FormService, private router: Router){}
    
  ngOnInit():void{
    this.fs.getAll('Details').subscribe((data: Details[]) => {
      this.deets = data;
    })
  }
}
