import { Component, OnInit } from '@angular/core';
import { complainEntity } from 'src/app/model/complaint';
import { ComplaintService } from '../complaint.service';

@Component({
  selector: 'app-admincomplaint',
  templateUrl: './admincomplaint.component.html',
  styleUrls: ['./admincomplaint.component.css']
})
export class AdmincomplaintComponent implements OnInit {
 listComplaint:complainEntity[];
  constructor(
  private complainService:ComplaintService,

  ) { }

  ngOnInit(): void {
    this.getall();
    this.listComplaint;
  }

  getall(){
    this.complainService.getAll().subscribe(data =>{
      this.listComplaint =data
    }
      )
  }

}
