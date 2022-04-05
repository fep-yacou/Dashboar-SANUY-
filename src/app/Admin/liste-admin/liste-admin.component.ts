import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-admin',
  templateUrl: './liste-admin.component.html',
  styleUrls: ['./liste-admin.component.scss']
})
export class ListeAdminComponent implements OnInit {
  listAdmin: any = [];
  searchText = '';

  constructor(
    private service: AdminServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listeAdm();
  }

  listeAdm() {
    return this.service.listeAdmin().subscribe((data: any) => {
      let liste = data;
      for (let i = 0; i < liste.length; i++) {
        if (liste[i].etat == 'disponible')
          this.listAdmin.push(liste[i]);
      }
    })
  }

  deleteAdmin(id: any) {
    this.service.deleteAdmin(id).subscribe();
  }

  alertDelete(id: any) {

    Swal.fire({
      title: 'Etes vous sûre de vouloir supprimer cet administrateur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteAdmin(id);
        Swal.fire(
          'Supprimé!',
          'Administrateur Supprimé avec succès!',
          'success'
        )
        window.location.reload();
        this.router.navigate(['liste-admin']);
      }
    })
  }
}
