import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {
  url = environment.URL

  constructor(
    private http: HttpClient,
  ) { }

  //liste Categorie
  listeCategorie() {
    return this.http.get(this.url + '/listCategorie');
  }

  //ajout Categorie
  ajoutCategorie(formdata: FormData): Observable<any> {
    return this.http.post(this.url + '/ajoutCategorie', formdata);
  }

  //Modifier Categorie
  updateCategorie(id: any, data: any) {
    return this.http.put(this.url + '/modifiercategorie/'+ id, data, {responseType:"text"});
  }
  
  //Details Categorie
  detailCategorie(id: any) {
    return this.http.get(this.url + `/infoannonce/` + id);
  }

  //Supprimer Categorie
  deleteCategorie(id: any) {
    return this.http.delete(this.url+ `/supprimercategorie/` +id);
  }

  //Restaurer Categorie
  restaurerCategorie(id: any){
    return this.http.delete(this.url+`/restaurerCategorie/${id}`);
  }

  //Liste Categorie par Etat
  listeCategorieByEtat(){
    return this.http.get(this.url+'/findCategorieByEtat');
  }
}
