import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor(private myapi:ApiService) { }


  name=""
  age=""
  email=""
  gender=""


  readValue=()=>{
    let data={
      "name":this.name,
      "age":this.age,
      "email":this.email,
      "gender":this.gender
      

    }
    console.log(data)
    this.myapi.addData(data).subscribe(
      (resp)=>{
        console.log(resp)
      }
    )
    alert("REGISTRATION SUCCESSFUL")
    this.name=""
    this.age=""
    this.email=""
    this.gender=""
  }

  ngOnInit(): void {
  }

}
