import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import {DataSenderService} from '../data-sender.service';

@Component({
  selector: 'app-update-modal',
  templateUrl: './update-modal.component.html',
  styleUrls: ['./update-modal.component.css']
})
export class UpdateModalComponent implements OnInit {
  employee = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    zip: new FormControl(),
    BirthDate: new FormControl(),
    gender: new FormControl()
  })
  emptoupdate : any;
  constructor(private http:HttpClient, private dss:DataSenderService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.employee.valid){
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      let myform = JSON.stringify(this.employee.value)
      this.http.put("http://localhost:16054/employee" + this.dss.id, myform, httpOptions).subscribe(
        (response) => {console.log(response); console.log(myform); window.location.reload();}, (error) => console.log(error)
      )
      this.employee.reset();
    }

  }
  getOneEmployee(){
    this.http.get("http://localhost:16054/employee/"+this.dss.id).subscribe(
      (response) => {console.log(response); this.emptoupdate=response}, (error) => console.log(error)
    )
  }

}
