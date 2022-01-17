import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataSenderService } from '../data-sender.service';

@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.css']
})
export class DetailsModalComponent implements OnInit {

  constructor(public dss:DataSenderService, private http: HttpClient) { }
  emptoupdate: any = this.dss.emptoupdate

  ngOnInit(): void {
  }
}
