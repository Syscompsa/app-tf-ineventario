import { Component, OnInit } from '@angular/core';
import { DataCallService } from '../Services/data-call.service';
import { GQRService } from '../Services/gqr.service';

@Component({
  selector: 'app-reporte-prod',
  templateUrl: './reporte-prod.component.html',
  styleUrls: ['./reporte-prod.component.css']
})
export class ReporteProdComponent implements OnInit {

  public dataArr;

  constructor(public QRData: GQRService, public data: DataCallService) { }

  ngOnInit() {
    this.getReportProducts();
  }

getReportProducts() {
  this.data.getReport().subscribe( x => {
    this.dataArr = x;
    console.log(this.dataArr);
  });
}


}
