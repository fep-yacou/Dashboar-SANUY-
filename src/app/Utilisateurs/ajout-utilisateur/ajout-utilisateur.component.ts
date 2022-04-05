import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { UtilisateurServiceService } from '../utilisateur-service.service';

@Component({
  selector: 'app-ajout-utilisateur',
  templateUrl: './ajout-utilisateur.component.html',
  styleUrls: ['./ajout-utilisateur.component.scss']
})
export class AjoutUtilisateurComponent implements OnInit {
  public imgfile: any = File;
  formulaire: FormGroup;
  user: any;

  constructor(
    public service: UtilisateurServiceService,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      tel: [''],
      email: [''],
      login: [''],
      password: ['']
    });
    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log(this.user);
  }

  imgSelect(event) {
    const img = event.target.files[0];
    this.imgfile = img;
  }

  submitForm() {

    const file = new FormData();
    const dataUtilisateur = this.formulaire.value;

    file.append('file', this.imgfile, this.imgfile.name);
    file.append('dataU', JSON.stringify(dataUtilisateur));
    console.log("file==========", file);

    let nom = this.formulaire.value['nom'];
    let prenom = this.formulaire.value['prenom'];
    let tel = this.formulaire.value['tel'];
    let email = this.formulaire.value['email'];
    let login = this.formulaire.value['login'];
    let password = this.formulaire.value['password'];

    // const navigationData: NavigationExtras = {queryParams: {"data": file}};

    this.service.ajoutUtilisateur(file).subscribe((data) => {
        data.nom = nom,
        data.prenom = prenom,
        data.tel = tel,
        data.email = email,
        data.login = login,
        data.password = password
        if(this.user.type == 'SimpleUtilisateur'){
          data.utilisateur = this.user
        }
        if(this.user.type == 'Administrateur'){
          data.admin = this.user
        }
        console.log(data);
        
        data.email = this.user.email
        console.log("localstorage : ", this.user.email);

      console.log("dataSave============", data);


      this.service.updateUtilisateur(data.id, data).subscribe((data) => {
        console.log("dataUpdate============", data);
        this.router.navigate(['liste-utilisateur']);
      })
    })

  }

}
