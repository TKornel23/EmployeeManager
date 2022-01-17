import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataSenderService {

  emptoupdate: any;
  constructor(private http:HttpClient) { }

  getOneEmployee(id:number){
    this.http.get("http://localhost:16054/employee/"+id).subscribe(
      (response) => {console.log(response); this.emptoupdate=response}, (error) => console.log(error)
    )
  }
}
