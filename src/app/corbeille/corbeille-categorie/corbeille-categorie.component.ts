import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieServiceService } from 'src/app/Categorie/categorie-service.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeille-categorie',
  templateUrl: './corbeille-categorie.component.html',
  styleUrls: ['./corbeille-categorie.component.scss']
})
export class CorbeilleCategorieComponent implements OnInit {
  photo = environment.URLPhotoCat;
  categorie: any;
  id: any;

  constructor(
    private service: CategorieServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  listeCategorieSupp() {
    this.service.listeCategorieByEtat().subscribe((data: any)=>{
      this.categorie = data;
    })
  }

  restaurerCategorie(id: any){
    this.service.restaurerCategorie(id).subscribe();
  }

  alertDelete(id: any) {

    Swal.fire({
      title: 'Etes vous sûre de vouloir restaurer cette categorie ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Restaurer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.restaurerCategorie(id);
        Swal.fire(
          'Restaurer!',
          'Categorie Restaurer avec succès!',
          'success'
        )
        window.location.reload();
        this.router.navigate(['corbeille']);
      }
    })
  }

}
