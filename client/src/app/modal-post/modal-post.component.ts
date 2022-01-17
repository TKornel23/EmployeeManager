import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-post',
  templateUrl: './modal-post.component.html',
  styleUrls: ['./modal-post.component.css']
})

export class ModalPostComponent implements OnInit {

  employee = new FormGroup({
    email: new FormControl(),
    name: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    zip: new FormControl(),
    BirthDate: new FormControl(),
    gender: new FormControl()
  });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.employee.valid){
      const httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'})
      }
      let myform = JSON.stringify(this.employee.value)
      this.http.post("http://localhost:16054/employee", myform, httpOptions).subscribe(
        (response) => {console.log(response); console.log(myform); window.location.reload();}, (error) => console.log(error)
      )
      this.employee.reset();
    }

  }


}
