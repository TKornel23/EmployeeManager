import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  Employees: any;

  constructor(private http: HttpClient) { }

  DeleteEmployee(id: number){
    this.http.delete("http://localhost:16054/employee/" + id).subscribe(
      response => {console.log(response); window.location.reload();}, error => console.log(error)
    );
  }

  UpdateEmployee(id: number){
    
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

}
