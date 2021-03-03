import { Component, OnInit } from '@angular/core';
import { ANEXODP12A120FService } from '../Services/anexo-dp12-a120-f.service';

@Component({
  selector: 'app-report-anexos-segimiento',
  templateUrl: './report-anexos-segimiento.component.html',
  styleUrls: ['./report-anexos-segimiento.component.css']
})
export class ReportAnexosSegimientoComponent implements OnInit {

  constructor(private anexo: ANEXODP12A120FService) { }
  public dateN = new Date();

  ngOnInit() {
    this.controlAv();
  }

  public repoAnexo: any = [];
  public avanceAv: number;
  controlAv() {
    this.anexo.SelectAnexoGen().subscribe( repAnexo => {
      this.repoAnexo = repAnexo;
      this.avanceAv = this.repoAnexo.length;
      console.log(this.repoAnexo);
    });
  }

}
