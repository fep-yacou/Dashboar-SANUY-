import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilisateurServiceService } from 'src/app/Utilisateurs/utilisateur-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeille-utilisateur',
  templateUrl: './corbeille-utilisateur.component.html',
  styleUrls: ['./corbeille-utilisateur.component.scss']
})
export class CorbeilleUtilisateurComponent implements OnInit {
  utilisateur: any;

  constructor(
    private service: UtilisateurServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listeUserSupp();
  }

  listeUserSupp(){
    this.service.listeUserByEtat().subscribe(data =>{
      this.utilisateur = data;
      console.log(this.utilisateur);  
    })
  }

  restaurerUser(id: any) {
    this.service.restaurerUser(id).subscribe();
  }

  alertDelete(id: any) {

    Swal.fire({
      title: 'Etes vous sûre de vouloir restaurer cet utilisateur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Restaurer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.restaurerUser(id);
        Swal.fire(
          'Restaurer!',
          'Utilisateur Restaurer avec succès!',
          'success'
        )
        window.location.reload();
        this.router.navigate(['corbeille-utilisateur']);
      }
    })
  }

}
