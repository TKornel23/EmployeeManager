import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DataSenderService } from '../data-sender.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  Employees: any;

  constructor(private http: HttpClient, private dss:DataSenderService) { }

  DeleteEmployee(id: number){
    this.http.delete("http://localhost:16054/employee/" + id).subscribe(
      response => {console.log(response); window.location.reload();}, error => console.log(error)
    );
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees()
  {
    this.http.get("http://localhost:16054/employee").subscribe(
      response => {
        this.Employees = response
      },
      error => {
        console.log(error);
      }
    );
  }

  getOneEmployee(id:number)
  {
    this.dss.getOneEmployee(id);
  }
}
