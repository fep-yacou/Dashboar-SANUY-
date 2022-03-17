import { Component, OnInit } from '@angular/core';
import { DemandeService } from '../DemandeAnnonce/Service/demande.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tab: any = [];
  nbreMessage: any;
  constructor(public service: DemandeService) { }

  ngOnInit(): void {
    this.service.listeDemandeAnnonce().subscribe((dem:any)=>{
      for(let i = 0; i< dem.length; i++){
        if(dem[i].etatAnnonce == 'Encours'){
          this.tab.push(dem[i]);
        }
      }
      this.service.setDemande(this.tab);
      this.nbreMessage = this.tab.length;
    })
  }

}
