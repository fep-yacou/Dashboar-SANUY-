import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AnnonceServiceService } from '../annonce-service.service';

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.scss']
})
export class ListeAnnonceComponent implements OnInit {
  photo = environment.URLPhoto;
  annoce : any;

  constructor(private aService : AnnonceServiceService) { }

  ngOnInit(): void {
    this.getAnnonce();
  }

  getAnnonce(){
    this.aService.listeAnnonce().subscribe(res=>{
      this.annoce = res;
      console.log(this.annoce);
      
    })
  }
  
}
