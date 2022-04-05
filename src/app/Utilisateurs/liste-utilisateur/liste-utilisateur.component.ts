import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UtilisateurServiceService } from '../utilisateur-service.service';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.scss']
})
export class ListeUtilisateurComponent implements OnInit {
  listUtilisateur: any = [];
  searchText = '';

  constructor(
    private service: UtilisateurServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listeUtilisateur();
  }

  listeUtilisateur() {
    return this.service.listeUtilisateur().subscribe((data: any) => {
      let liste = data;
      for (let i = 0; i < liste.length; i++) {
        if (liste[i].etat == 'disponible')
          this.listUtilisateur.push(liste[i]);
      }
    })
  }

  deleteUser(id: any) {
    this.service.deleteUser(id).subscribe();
  }

  alertDelete(id: any) {

    Swal.fire({
      title: 'Etes vous sûre de vouloir supprimer cet utilisateur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser(id);
        Swal.fire(
          'Supprimé!',
          'Utilisateur Supprimé avec succès!',
          'success'
        )
        window.location.reload();
        this.router.navigate(['liste-utilisateur']);
      }
    })
  }

}
