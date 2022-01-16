import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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
    dateOfBirth: new FormControl(),
    gender: new FormControl()
  });

  constructor(/*private http: HttpClient*/) { }

  ngOnInit(): void {
  }

  onSubmit(){
    /*const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    this.http.post("", JSON.stringify(employee), httpOptions).subscribe(response => {
      console.log(response);
    },
    {
      error => {
        console.log(error);
      }
    });
    */
  }

}
