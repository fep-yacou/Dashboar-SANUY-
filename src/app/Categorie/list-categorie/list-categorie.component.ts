import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategorieServiceService } from '../categorie-service.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {
  photo = environment.URLPhoto;
  listCategorie : any;

  constructor(
    private categorieService : CategorieServiceService,
  ) { }

  ngOnInit(): void {
    this.getCategorie();
  }

  getCategorie(){
    this.categorieService.listeCategorie().subscribe(res=>{
      this.listCategorie = res;
      console.log(this.listCategorie); 
    })
  }

}
