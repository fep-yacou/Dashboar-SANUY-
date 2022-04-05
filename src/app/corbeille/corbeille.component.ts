import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminServiceService } from '../Admin/admin-service.service';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.scss']
})
export class CorbeilleComponent implements OnInit {
  admin: any
  constructor(
    private service: AdminServiceService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listeAdminSupp();
  }

  listeAdminSupp(){
    this.service.listeAdminByEtat().subscribe(data =>{
      this.admin = data;
      // console.log(this.admin);  
    })
  }

  restaurerAdmin(id: any) {
    this.service.restaurerAdmin(id).subscribe();
  }

  alertDelete(id: any) {

    Swal.fire({
      title: 'Etes vous sûre de vouloir restaurer cet administrateur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Restaurer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.restaurerAdmin(id);
        Swal.fire(
          'Restaurer!',
          'Administrateur Restaurer avec succès!',
          'success'
        )
        window.location.reload();
        this.router.navigate(['corbeille']);
      }
    })
  }

}
