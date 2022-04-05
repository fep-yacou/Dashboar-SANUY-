import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { CategorieServiceService } from '../categorie-service.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.scss']
})
export class ListCategorieComponent implements OnInit {
  photo = environment.URLPhotoCat;
  listCategorie : any;

  constructor(
    private categorieService : CategorieServiceService,
    private router: Router,
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

  deleteCategorie(id: any) {
    this.categorieService.deleteCategorie(id).subscribe();
  }

  alertDelete(id: any) {

    Swal.fire({
      title: 'Etes vous sûre de vouloir supprimer cette categorie ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCategorie(id);
        Swal.fire(
          'Supprimé!',
          'Categorie Supprimé avec succès!',
          'success'
        )
        window.location.reload();
        this.router.navigate(['liste-categorie']);
      }
    })
  }

}
