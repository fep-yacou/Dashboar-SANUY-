import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AccueilServiceService } from './accueil-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  url = environment.URL;
  nmbreU: any;
  nmbreA: any;

  constructor(
    private service : AccueilServiceService,
  ) { }

  ngOnInit(): void {
    this.nmbreUser();
    this.nmbreAnnonce();
  }

  nmbreUser() {
      return this.service.nmbreTotalUtilisateur().subscribe(data => {
      this.nmbreU = data;
      console.log(data);
    })
  }
  nmbreAnnonce() {
    return this.service.nmbreTotalUtilisateur().subscribe(datas =>{
      this.nmbreA = datas;
    })
  }
}
