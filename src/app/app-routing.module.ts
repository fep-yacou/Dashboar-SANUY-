import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AjoutAdminComponent } from './Admin/ajout-admin/ajout-admin.component';
import { DetailAdminComponent } from './Admin/detail-admin/detail-admin.component';
import { ListeAdminComponent } from './Admin/liste-admin/liste-admin.component';
import { ModifierAdminComponent } from './Admin/modifier-admin/modifier-admin.component';
import { AjoutAnnonceComponent } from './Annonces/ajout-annonce/ajout-annonce.component';
import { DetailAnnonceComponent } from './Annonces/detail-annonce/detail-annonce.component';
import { ListeAnnonceComponent } from './Annonces/liste-annonce/liste-annonce.component';
import { ModifierAnnonceComponent } from './Annonces/modifier-annonce/modifier-annonce.component';
import { AjoutCategorieComponent } from './Categorie/ajout-categorie/ajout-categorie.component';
import { DetailCategorieComponent } from './Categorie/detail-categorie/detail-categorie.component';
import { ListCategorieComponent } from './Categorie/list-categorie/list-categorie.component';
import { ModifierCategorieComponent } from './Categorie/modifier-categorie/modifier-categorie.component';
import { CorbeilleAnnonceComponent } from './corbeille/corbeille-annonce/corbeille-annonce.component';
import { CorbeilleCategorieComponent } from './corbeille/corbeille-categorie/corbeille-categorie.component';
import { CorbeilleUtilisateurComponent } from './corbeille/corbeille-utilisateur/corbeille-utilisateur.component';
import { CorbeilleComponent } from './corbeille/corbeille.component';
import { DemandeAttenteComponent } from './DemandeAnnonce/demande-attente/demande-attente.component';
import { DetailDemandeComponent } from './DemandeAnnonce/detail-demande/detail-demande.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { AjoutUtilisateurComponent } from './Utilisateurs/ajout-utilisateur/ajout-utilisateur.component';
import { DetailUtilisateurComponent } from './Utilisateurs/detail-utilisateur/detail-utilisateur.component';
import { ListeUtilisateurComponent } from './Utilisateurs/liste-utilisateur/liste-utilisateur.component';
import { ModifierUtilisateurComponent } from './Utilisateurs/modifier-utilisateur/modifier-utilisateur.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },

  // Gestion des annonce
  { path: 'liste-annonce', component: ListeAnnonceComponent },
  { path: 'ajout-annonce', component: AjoutAnnonceComponent },
  { path: 'detail-annonce/:id', component: DetailAnnonceComponent },
  { path: 'modifier-annonce/:id', component: ModifierAnnonceComponent },

  // Gestion des administrateurs
  { path: 'liste-admin', component: ListeAdminComponent },
  { path: 'ajout-admin', component: AjoutAdminComponent },
  { path: 'detail-admin/:id', component: DetailAdminComponent },
  { path: 'modifier-admin/:id', component: ModifierAdminComponent },

  // Gestion des utilisateurs
  { path: 'liste-utilisateur', component: ListeUtilisateurComponent },
  { path: 'ajout-utilisateur', component: AjoutUtilisateurComponent },
  { path: 'detail-utilisateur/:id', component: DetailUtilisateurComponent },
  { path: 'modifier-utilisateur/:id', component: ModifierUtilisateurComponent },

  // Gestion des categories de dechet
  { path: 'liste-categorie', component: ListCategorieComponent },
  { path: 'ajout-categorie', component: AjoutCategorieComponent },
  { path: 'detail-categorie/:id', component: DetailCategorieComponent },
  { path: 'modifier-categorie/:id', component: ModifierCategorieComponent },

  // Gestion des demandes
  { path: 'demande-attente', component: DemandeAttenteComponent },
  { path: 'detail-demande/:id', component: DetailDemandeComponent },

  // Gestion map
  { path: 'map', component: MapComponent },

  // Gestion corbeille
  { path: 'corbeille', component: CorbeilleComponent },
  { path: 'corbeille-utilisateur', component: CorbeilleUtilisateurComponent },
  { path: 'corbeille-annonce', component: CorbeilleAnnonceComponent },
  {path: 'corbeille-categorie', component: CorbeilleCategorieComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
