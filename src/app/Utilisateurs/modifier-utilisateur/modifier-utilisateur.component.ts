import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurServiceService } from '../utilisateur-service.service';

@Component({
  selector: 'app-modifier-utilisateur',
  templateUrl: './modifier-utilisateur.component.html',
  styleUrls: ['./modifier-utilisateur.component.scss']
})
export class ModifierUtilisateurComponent implements OnInit {
  id: any;
  utilisateur: any;

  constructor(
    private service: UtilisateurServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailUtilisateur(this.id).subscribe((data: any) =>{
      this.utilisateur = data;
    })
  }

  updateUser(){
    this.service.updateUtilisateur(this.id, this.utilisateur).subscribe((data: any)=>{
      this.router.navigate(['liste-utilisateur']);
    })
  }

}
