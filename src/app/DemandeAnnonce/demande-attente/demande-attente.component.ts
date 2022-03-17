import { Component, OnInit } from '@angular/core';
import { CategorieServiceService } from 'src/app/Categorie/categorie-service.service';
import { DemandeService } from '../Service/demande.service';

@Component({
  selector: 'app-demande-attente',
  templateUrl: './demande-attente.component.html',
  styleUrls: ['./demande-attente.component.scss']
})
export class DemandeAttenteComponent implements OnInit {
    listeCategorie: any;
    demande: any=[];
  constructor(
    public categorieService: CategorieServiceService,
    public service: DemandeService
    ) { }

  ngOnInit(): void {
    this.listerCategorie();
    this.service.listeDemandeAnnonce().subscribe((dem:any)=>{
      for(let i = 0; i< dem.length; i++){
        if(dem[i].etatAnnonce == 'Encours'){
          this.demande.push(dem[i]);
        }
      }
    })
    
  }

  listerCategorie(){
    this.categorieService.listeCategorie().subscribe((dataa)=>{
      console.log(dataa);
      return this.listeCategorie=dataa;
    })
  }

}
