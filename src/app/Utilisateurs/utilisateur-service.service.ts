import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurServiceService {
  url = environment.URL;
  constructor(
    private http: HttpClient,
  ) { }

    //liste Utilisateur
    listeUtilisateur(){
      return this.http.get(this.url + '/listUtilisateur');
    }

    //liste Utilisateur par Etat
    listeUserByEtat(){
      return this.http.get(this.url+'/findUserByEtat');
    }

    //ajout Utilisateur
    ajoutUtilisateur(formdata: FormData): Observable<any>{
      return this.http.post(this.url + '/ajoutUtilisateur', formdata);
    }
    
    //Modifier Utilisateur
    updateUtilisateur(id: any, data:any){
      return this.http.put(this.url + '/modifierUtilisateur/' + id, data, {responseType:"text"});
    }

    //Details Utilisateur
    detailUtilisateur(id: any){
      return this.http.get(this.url + '/findUtilisateur/' + id);
    }

    //Supprimer Utilisateur
    deleteUser(id: any){
      return this.http.delete(this.url+`/deleteUtilisateur/${id}`);
    }
    
    //Restaurer Utilisateur
    restaurerUser(id: any){
      return this.http.delete(this.url+`/restaurerUser/${id}`);
    }
}
