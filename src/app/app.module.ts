import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';


import { AjoutAnnonceComponent } from './Annonces/ajout-annonce/ajout-annonce.component';
import { DetailAnnonceComponent } from './Annonces/detail-annonce/detail-annonce.component';
import { ListeAnnonceComponent } from './Annonces/liste-annonce/liste-annonce.component';
import { ModifierAnnonceComponent } from './Annonces/modifier-annonce/modifier-annonce.component';
import { AjoutUtilisateurComponent } from './Utilisateurs/ajout-utilisateur/ajout-utilisateur.component';
import { ListeUtilisateurComponent } from './Utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { ModifierUtilisateurComponent } from './Utilisateurs/modifier-utilisateur/modifier-utilisateur.component';
import { DetailUtilisateurComponent } from './Utilisateurs/detail-utilisateur/detail-utilisateur.component';
import { AjoutAdminComponent } from './Admin/ajout-admin/ajout-admin.component';
import { ListeAdminComponent } from './Admin/liste-admin/liste-admin.component';
import { DetailAdminComponent } from './Admin/detail-admin/detail-admin.component';
import { ModifierAdminComponent } from './Admin/modifier-admin/modifier-admin.component';
import { AjoutCategorieComponent } from './Categorie/ajout-categorie/ajout-categorie.component';
import { ListCategorieComponent } from './Categorie/list-categorie/list-categorie.component';
import { DetailCategorieComponent } from './Categorie/detail-categorie/detail-categorie.component';
import { ModifierCategorieComponent } from './Categorie/modifier-categorie/modifier-categorie.component';
import { DemandeAttenteComponent } from './DemandeAnnonce/demande-attente/demande-attente.component';
import { DetailDemandeComponent } from './DemandeAnnonce/detail-demande/detail-demande.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    AccueilComponent,
    LoginComponent,

    AjoutAnnonceComponent,
    DetailAnnonceComponent,
    ListeAnnonceComponent,
    ModifierAnnonceComponent,
    AjoutUtilisateurComponent,
    ListeUtilisateurComponent,
    ModifierUtilisateurComponent,
    DetailUtilisateurComponent,
    AjoutAdminComponent,
    ListeAdminComponent,
    DetailAdminComponent,
    ModifierAdminComponent,
    AjoutCategorieComponent,
    ListCategorieComponent,
    DetailCategorieComponent,
    ModifierCategorieComponent,
    DemandeAttenteComponent,
    DetailDemandeComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
