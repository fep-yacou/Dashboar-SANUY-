import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DemandeService } from '../Service/demande.service';
import { CategorieServiceService } from 'src/app/Categorie/categorie-service.service';

@Component({
  selector: 'app-detail-demande',
  templateUrl: './detail-demande.component.html',
  styleUrls: ['./detail-demande.component.scss']
})
export class DetailDemandeComponent implements OnInit {
  listCategorie : any;
  demande: any;
  id: any;
  image = environment.URLPhoto
  constructor(
    public categorieService : CategorieServiceService,
    public service: DemandeService, 
    private route: ActivatedRoute, 
    public router: Router
    ) { }

  ngOnInit(): void {
    this.getCategorie();
    this.id = this.route.snapshot.params['id'];
    this.service.detailDemandeAnnonce(this.id).subscribe((data: any)=>{
    this.demande = data;
    })
    this.image
  }

  getCategorie(){
    this.categorieService.listeCategorie().subscribe(res=>{
      this.listCategorie = res;
      console.log(this.listCategorie); 
    })
  }

  accepter(id){
    this.service.detailDemandeAnnonce(this.id).subscribe((data: any)=>{
      data.etatAnnonce = "Valider";
      this.service.updateDemandeAnnonce(data.id, data).subscribe((da:any)=>{
        let url: string = "/detail-demande/" + data.id
        console.log(data.utilisateur.email);
        this.service.getMail(data.utilisateur.email, "Votre demande est validee", "Validation Demande").subscribe((d:any)=>{
          console.log(d);
          
        })
        
        window.location.reload();
        this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
        this.router.navigate(['detail-demande', data.id]));
      })
    })
  }
  refuser(id){
    this.service.detailDemandeAnnonce(this.id).subscribe((data: any)=>{
      data.etatAnnonce = "Refuser";
      this.service.updateDemandeAnnonce(data.id, data).subscribe((da:any)=>{
        let url: string = "/detail-demande/" + data.id
        window.location.reload();
        this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
        this.router.navigate(['detail-demande', data.id]));
      })
    })
  }

}
