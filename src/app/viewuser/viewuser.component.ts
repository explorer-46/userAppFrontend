import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }



  fetchData=()=>{
    this.myapi.view().subscribe(
      (data)=>{
        this.viewD=data
      }
    )
  }



  viewD:any=[]

  ngOnInit(): void {
  }

}
