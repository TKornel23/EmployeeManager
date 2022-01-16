import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  Employees: any;

  constructor(/*private http: HttpClient*/) { }

  ngOnInit(): void {
    //this.getEmployees();
  }

  /*getEmployees()
  {
    this.http.get("").subscribe(
      response => {
        this.Employees = response
      },
      error => {
        console.log(error);
      }
    );
  }*/

}
