import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurServiceService } from '../utilisateur-service.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {
  listUtilisateur: any = [];
  searchText= '';

  constructor(
    private service : UtilisateurServiceService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.listeUtilisateur();
  }

  listeUtilisateur(){
    return this.service.listeUtilisateur().subscribe((data: any)=>{
      let liste = data;
      for(let i=0; i<liste.length; i++){
        if(liste[i].etat == 'disponible')
        this.listUtilisateur.push(liste[i]);
      }
    })
}

  deleteUtilisateur(data: any){
  this.service.detailUtilisateur(data).subscribe((datas: any)=>{
    datas.etat = "non_disponible";
    let datasMod = datas;
    console.log(datasMod);
    this.service.updateUtilisateur(datasMod.id, datasMod).subscribe((mod: any)=>{
      window.location.reload();
    this.router.navigateByUrl('/liste-utilisateur', {skipLocationChange: true}).then(()=>
    this.router.navigate(['liste-utilisateur'])); 
    })
  })
  }

}
