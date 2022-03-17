import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategorieServiceService } from '../categorie-service.service';

@Component({
  selector: 'app-ajout-categorie',
  templateUrl: './ajout-categorie.component.html',
  styleUrls: ['./ajout-categorie.component.scss']
})
export class AjoutCategorieComponent implements OnInit {
  public imgfile: any = File;
  submitted = false;
  formulaire: FormGroup;
  user: any;
  idcat:any;

  constructor(
    public service: CategorieServiceService,
    public router: Router,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      type: ['']
    });

    this.user = JSON.parse(localStorage.getItem("userData"));
    console.log(this.user);
  }

  get f() { return this.formulaire.controls; }

  imgSelect(event) {
    const img = event.target.files[0];
    this.imgfile = img;
  }

  submitForm() {

    const file = new FormData();
    const dataCategorie = this.formulaire.value;
    console.log("dataCat========",dataCategorie);
    

    file.append('file', this.imgfile, this.imgfile.name);
    file.append('dataC', JSON.stringify(dataCategorie));
    console.log("file==========", file);

    let type = this.formulaire.value['type'];

    this.service.ajoutCategorie(file).subscribe((data) => {
        data.type = type;

        console.log("dataType==========",data.type);
        

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

        console.log("dataID=========",data.idcat);
        
        this.idcat = data.idcat;
      this.service.updateCategorie(this.idcat, data).subscribe((data) => {
        console.log("dataUpdate============", data);

      })
    })


  }

}
